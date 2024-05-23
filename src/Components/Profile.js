import React from "react";
import "./Profile.css";
import profileHeaderImg from "../assets/patan.jpg";
import profilePhotoImg from "../assets/Atul.jpg";
import placeImage1 from "../assets/images.jpg";
import PlaceCard from "./PlaceCard";

const Profile = () => {
  const userProfile = {
    name: "Atul Tiwari",
    id: "12345",
    age: 18,
    gender: "Male",
    country: "Nepal",
    rating: 4.7,
    reviews: 69,
    rate: 1000,
    currency: "Nrs",
    phone: "9869696969",
    email: "example@gmail.com",
    places: [
      {
        placeName: "Patan Dhoka",
        placeImage: placeImage1,
      },
      {
        placeName: "Patan Dhoka",
        placeImage: placeImage1,
      },
      {
        placeName: "Patan Dhoka",
        placeImage: placeImage1,
      },
    ],
    languages: ["Nepali", "Nepali", "Nepali"],
    pricing: {
      hourly: { rate: 1000, negotiable: false },
      oneDay: { rate: 5000, negotiable: true },
    },
    qualifications: [
      "6-month training in location guide",
      "6-month training in location guide",
    ],
    qualificationDescriptions: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "Haha hello lol"
    ],
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
      <img
        className="profile-header-img"
        src={profileHeaderImg}
        alt="https://via.placeholder.com/1500x500"
      />
        <div className="image-and-details">
          <div className="profile-main-info">
            <img
              className="profile-photo"
              src={profilePhotoImg}
              alt="https://via.placeholder.com/150"
            />
          </div>

          <div className="profile-details">
            <div className="profile-details-left">
              <h2>
                {userProfile.name} <span className="verified">&#x2714;</span>
              </h2>
              <p className="profile-name">
                {userProfile.rating} <span>&#9733;&#9733;&#9733;&#9733;</span> (
                {userProfile.reviews} reviews)
              </p>
            </div>
            <div className="profile-details-right">
              <div className="profile-rate">
                <p>
                  <strong>
                    {userProfile.currency} {userProfile.rate}
                  </strong>{" "}
                  / hour
                </p>
              </div>
              <div className="profile-contact-info">
                <button className="edit-profile-button">
                  <i className="fas fa-edit">Edit Profile</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-section">
        <h3>Can Guide</h3>
        <div className="profile-places">
          {userProfile.places.map((place, index) => (
            <PlaceCard
              key={index}
              placeImage={place.placeImage}
              placeName={place.placeName}
            />
          ))}
        </div>
      </div>

      <div className="profile-section">
        <h3>Languages</h3>
        <div className="profile-languages">
          {userProfile.languages.map((language, index) => (
            <span className="language-tag" key={index}>
              {language}
            </span>
          ))}
        </div>
      </div>

      <div className="profile-section">
        <h3>Pricing (Nrs.)</h3>
        <div className="profile-pricing">
          <div className="pricing-card">
            <p>
              <strong>Hourly</strong>
            </p>
            <p>{userProfile.pricing.hourly.rate}</p>
            <p>
              {userProfile.pricing.hourly.negotiable
                ? "Negotiable"
                : "Non-negotiable"}
            </p>
          </div>
          <div className="pricing-card">
            <p>
              <strong>One day</strong>
            </p>
            <p>{userProfile.pricing.oneDay.rate}</p>
            <p>
              {userProfile.pricing.oneDay.negotiable
                ? "Negotiable"
                : "Non-negotiable"}
            </p>
          </div>
        </div>
        <p>*For up to 5-person group</p>
      </div>

      <div className="profile-section">
        <h3>Qualifications</h3>
        <ol className="qualifications-list">
          {userProfile.qualifications.map((qualification, index) => (
            <li key={index}>
              {qualification}
              <br />
              {userProfile.qualificationDescriptions[index]}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Profile;
