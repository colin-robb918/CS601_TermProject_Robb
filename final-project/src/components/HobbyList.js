import React from "react";
import HobbyItem from "./HobbyItem";
import { Link } from 'react-router-dom';
import '../Hobbies.css';

const HobbyList = ({ items }) => {
    return (
        <div className="main-content">
            <ul className="hobby-item"> 
                {items.map(({ SKU, name, description, image }) => (
                    <li>
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
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HobbyList;
