import React from "react";
import '../Hobbies.css';

const HobbyItem = ({ SKU, name, description, image }) => {
    return (
        <div className="main-content">
            <div className="hobby-item">
                <img className='hobby-img' src={image} alt='hobby item' />
            </div>
            <div>
                <p>{name}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default HobbyItem;