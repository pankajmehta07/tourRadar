import React from "react";
import { Link, useNavigate } from "react-router-dom";
import profilePhotoImg from "./assets/Atul.jpg";

const Home = () => {

  const navigate = useNavigate();

  const handleQuickGuideClick = () => {
    navigate("/location-selection");
  };

  return (
    <div>
      <header>
        <Link to="/profile">
          <img
            className="profile-photo"
            src={profilePhotoImg}
            alt="https://via.placeholder.com/150"
            style={{
              width: 55,
              height: 55,
              borderRadius: "50%",
              position: "absolute",
              top: 10,
              right: 10,
            }}
          />
        </Link>
      </header>
      <div>
        <h1>Welcome to Tourist Guide</h1>
          <button onClick={handleQuickGuideClick}>Quick Guide</button>
      </div>
    </div>
  );
};

export default Home;
