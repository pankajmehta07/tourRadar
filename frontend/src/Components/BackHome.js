import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"

const BackHome = () => {
    return(
        <div>
            <header>
                <Link to="/">
                <img
                src={Logo}
                alt="https://via.placeholder.com/150"
                style={{
                width: 50,
                height: 50,
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