import React from "react";

const HobbyItem = ({ name, description }) => {
    return (
        <div className="hobby-item">
            <p>Name: { name }</p>
            <p>{ description }</p>
        </div>
    )
}

export default HobbyItem;