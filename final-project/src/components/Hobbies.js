import React from "react";
import HobbyItem from "./HobbyItem";
import { Link } from 'react-router-dom';

const Hobbies = ({ hobbies }) => {
    return (
        <div className="main-content">
            {hobbies.map(({ id, name, description }) => {
                <Link to={'/hobby/' + id}>
                    <a>
                        <HobbyItem
                            key={id}>
                            name={name}
                            description={description}
                        </HobbyItem>
                    </a>
                </Link>
            })}
        </div>
    )
}

export default Hobbies;
