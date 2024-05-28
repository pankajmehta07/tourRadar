import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "./LocationSelection.css";
import BackHome from "./Components/BackHome";

const LocationSelection = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [markers, setMarkers] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (query.trim() === "") return;

    const apiKey = "your_api_key"; // Replace this with your OpenCage API key. Maile pahila ko disable haneko xu hai. jhukkera active api key nai halexu, ani generic high entropy secret leaked vanyo
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(query)}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      setResults(response.data.results);
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  const handleAddPlace = (place) => {
    const { lat, lng } = place.geometry;
    setSelectedLocations([...selectedLocations, place.formatted]);
    setMarkers([...markers, { lat, lng }]);
  };

  const handleRemovePlace = (index) => {
    const newPlaces = selectedLocations.filter((_, i) => i !== index);
    const newMarkers = markers.filter((_, i) => i !== index);
    setSelectedLocations(newPlaces);
    setMarkers(newMarkers);
  };

  const LocationMarker = ({ position }) => {
    const map = useMap();
    map.flyTo(position, 15);

    return (
      <Marker position={position} icon={new L.Icon({ iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png", shadowUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png", iconSize: [25, 41], iconAnchor: [12, 41] })}></Marker>
    );
  };

  const handleNext = () => {
    navigate("/quick-guide-form", { state: { selectedLocations } });
  };

  return (
    <div className="location-selection">
    <BackHome />
      <h2>Select Locations</h2>
      
      <MapContainer center={[27.7, 85.3]} zoom={12} scrollWheelZoom={false} style={{ height: "500px", width: "500px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <LocationMarker key={index} position={[marker.lat, marker.lng]} />
        ))}
      </MapContainer>

      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a place"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="results">
        {results.map((result, index) => (
          <div key={index} className="result-item">
            <p>{result.formatted}</p>
            <button onClick={() => handleAddPlace(result)}>Add</button>
          </div>
        ))}
      </div>

      <div className="selected-places">
        <h3>Selected Places</h3>
        {selectedLocations.map((place, index) => (
          <div key={index} className="selected-place">
            <p>{place}</p>
            <button onClick={() => handleRemovePlace(index)}>Remove</button>
          </div>
        ))}
      </div>
      {selectedLocations.length > 0 && <button onClick={handleNext} className="next-button">Next</button>}
    </div>
  );
};

export default LocationSelection;
