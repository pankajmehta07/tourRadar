import React from "react";
import { Link } from "react-router-dom";
import profilePhotoImg from "./assets/Atul.jpg";

const Home = () => {
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
        <Link to="/quick-guide">
          <button>Quick Guide</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
