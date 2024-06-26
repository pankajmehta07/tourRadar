import React, { useState, useEffect, useMemo } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./QuickGuideForm.css";
import BackHome from "./Components/BackHome";

const QuickGuideForm = () => {
  const location = useLocation();
  const selectedLocations = useMemo(() => location.state?.selectedLocations || [], [location.state?.selectedLocations]);

  const [formData, setFormData] = useState({
    places: selectedLocations,
    numberOfPeople: 5,
    languages: ["English"],
    travelCoverage: true,
    foodCoverage: true,
    stayCoverage: true,
    additionalInfo: "",
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      places: selectedLocations,
    }));
  }, [selectedLocations]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAddLanguage = () => {
    setFormData({
      ...formData,
      languages: [...formData.languages, ""],
    });
  };

  const handleLanguageChange = (index, value) => {
    const newLanguages = formData.languages.map((language, i) =>
      i === index ? value : language
    );
    setFormData({
      ...formData,
      languages: newLanguages,
    });
  };

  const handleRemoveLanguage = (index) => {
    const newLanguages = formData.languages.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      languages: newLanguages,
    });
  };

  const handleToggle = (field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: !prevData[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Request sent:", formData);
    toast.success("Request sent to all guides!");
  };

  return (
    <div className="form-container">
    <BackHome />
      <h2>Quick Guide Request</h2>
      <form onSubmit={handleSubmit} className="guide-form">
        <div className="form-group places-group">
          <label>Places to visit:</label>
          <ul>
            {formData.places.map((place, index) => (
              <li key={index}>{place}</li>
            ))}
          </ul>
        </div>
        <div className="form-group">
          <label>Number of people: {formData.numberOfPeople}</label>
          <input
            type="number"
            name="numberOfPeople"
            min="1"
            max="10"
            value={formData.numberOfPeople}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group languages-group">
          <label>Languages you speak:</label>
          {formData.languages.map((language, index) => (
            <div key={index} className="input-group">
              <input
                type="text"
                value={language}
                onChange={(e) => handleLanguageChange(index, e.target.value)}
                required
              />
              <button type="button" onClick={() => handleRemoveLanguage(index)}>
                -
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddLanguage}
            className="add-button"
          >
            +
          </button>
        </div>
        <div className="form-group toggle-group">
          <label>Travel Coverage:</label>
          <div
            className={`toggle-button ${formData.travelCoverage ? "active" : ""}`}
            onClick={() => handleToggle("travelCoverage")}
          >
            {formData.travelCoverage ? "On" : "Off"}
          </div>
        </div>
        <div className="form-group toggle-group">
          <label>Food Coverage:</label>
          <div
            className={`toggle-button ${formData.foodCoverage ? "active" : ""}`}
            onClick={() => handleToggle("foodCoverage")}
          >
            {formData.foodCoverage ? "On" : "Off"}
          </div>
        </div>
        <div className="form-group toggle-group">
          <label>Stay Coverage:</label>
          <div
            className={`toggle-button ${formData.stayCoverage ? "active" : ""}`}
            onClick={() => handleToggle("stayCoverage")}
          >
            {formData.stayCoverage ? "On" : "Off"}
          </div>
        </div>
        <div className="form-group">
          <label>Additional information:</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Request
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default QuickGuideForm;
