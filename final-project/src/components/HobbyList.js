import React from "react";
import HobbyItem from "./HobbyItem";
import { Link } from 'react-router-dom';
import '../Hobbies.css';

const HobbyList = ({ items }) => {

    console.log(items);

    return (
        <div className="main-content">
            <h1>Hobbies</h1>
            {items.map(({ SKU, name, description, image }) => {
                <Link to={'/hobby/' + SKU}>
                    <button className="hobby-button">
                        <HobbyItem
                            key={SKU}
                            SKU={SKU}
                            name={name}
                            description={description}
                            image={image}
                        />
                    </button>
                </Link>
            })}
        </div>
    )
}

export default HobbyList;
