import React from "react";

const HobbyItem = ({ SKU, name, description, image }) => {
    return (
        <div className="main-content">
            <img src={image} alt='hobby item' />
            <p>id: { SKU }</p>
            <p>Name: { name }</p>
            <p>Description: { description }</p>
        </div>
    )
}

export default HobbyItem;