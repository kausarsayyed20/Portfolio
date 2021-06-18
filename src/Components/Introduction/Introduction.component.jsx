import React from 'react'
import "./Introduction.css";
import image from "../../assets/13264.jpg";

const Introduction = () => {
    return (
        <div className="main-container" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div className="profile-container" >
                <h1>Hey I'm Kausar S</h1>
                <div>
                    <p>
                        A passionate Frontend Software Developer 🚀 having an experience of building Web applications with
                        JavaScript / Reactjs / Nodejs.
                    </p>
                </div>
            </div>
            <div className="image-container">
                <img src={image} width="500px" height="500px" alt="kausar" />
            </div>


        </div>
    )
}

export default Introduction;
