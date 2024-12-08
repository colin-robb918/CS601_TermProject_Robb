import React from "react";
import blackwhite from '../images/blackwhite.jpeg';

export default function HomePage() {
    return (
        <div className="main-content">
            <h2>Welcome to my Term Project for CS601</h2>
            <img src={blackwhite} alt='Black and White'></img>
        </div>
    )
}