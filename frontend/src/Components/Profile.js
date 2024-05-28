import React, { useState } from "react";
import styles from "./Profile.module.css";
import placeImage1 from "../assets/images.jpg";
import PlaceCard from "./PlaceCard";
import ImageUpload from "./ImageUpload";
import BackHome from "./BackHome";

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

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
    qualificationDescription: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      "Hello haha lol"
    ]
  };

  return (
    <div className={styles["profile-container"]}>
    <BackHome />
      <div className={styles["profile-header"]}>
        <ImageUpload header={true} isEditMode={isEditMode} />
        <div className={styles["image-and-details"]}>
          <div className={styles["profile-main-info"]}>
            <ImageUpload header={false} isEditMode={isEditMode} />
          </div>

          <div className={styles["profile-details"]}>
            <div className={styles["profile-details-left"]}>
              <h2>
                {userProfile.name} <span className={styles["verified"]}>&#x2714;</span>
              </h2>
              <p className={styles["profile-name"]}>
                {userProfile.rating} <span>&#9733;&#9733;&#9733;&#9733;</span> (
                {userProfile.reviews} reviews)
              </p>
            </div>
            <div className={styles["profile-details-right"]}>
              <div className={styles["profile-rate"]}>
                <p>
                  <strong>
                    {userProfile.currency} {userProfile.rate}
                  </strong>{" "}
                  / hour
                </p>
              </div>
              <div className={styles["profile-contact-info"]}>
                <button
                  className={`${styles["edit-profile-button"]} ${isEditMode ? styles["done"] : styles["edit"]}`}
                  onClick={toggleEditMode}
                >
                  {isEditMode ? "Done" : "Edit Profile"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["profile-section"]}>
        <h3>Can Guide</h3>
        <div className={styles["profile-places"]}>
          {userProfile.places.map((place, index) => (
            <PlaceCard
              key={index}
              placeImage={place.placeImage}
              placeName={place.placeName}
            />
          ))}
        </div>
      </div>

      <div className={styles["profile-section"]}>
        <h3>Languages</h3>
        <div className={styles["profile-languages"]}>
          {userProfile.languages.map((language, index) => (
            <span className={styles["language-tag"]} key={index}>
              {language}
            </span>
          ))}
        </div>
      </div>

      <div className={styles["profile-section"]}>
        <h3>Pricing (Nrs.)</h3>
        <div className={styles["profile-pricing"]}>
          <div className={styles["pricing-card"]}>
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
          <div className={styles["pricing-card"]}>
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
      </div>

      <div className={styles["profile-section"]}>
        <h3>Qualifications</h3>
        <ul className={styles["qualifications-list"]}>
          {userProfile.qualifications.map((qualification, index) => (
            <li key={index}>
              {qualification}
              <br />
              {userProfile.qualificationDescription[index]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
