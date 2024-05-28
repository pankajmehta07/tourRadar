import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../assets/home.png"

const BackHome = () => {
    return(
        <div>
            <header>
                <Link to="/">
                <img
                src={HomeImage}
                alt="https://via.placeholder.com/150"
                style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                position: "absolute",
                top: 10,
                left: 10,
                }}
            />
            </Link>
            </header>
        </div>
    )

}

export default BackHome