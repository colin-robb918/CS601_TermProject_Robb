import React from "react";
import { useParams } from 'react-router-dom';

export default function HobbyDetail({ hobbies }) {
    let {id} = useParams();
    id = parseInt(id);

    const hobbyToDisplay = hobbies.find(h => h.id === id);

    return (
        <div className="main-content">
            <h1>Hobby Details</h1>
            <div>
                <p className="hobby-description">{hobbyToDisplay.description}</p>
                <img src={hobbyToDisplay.detailImage} alt='hobby'></img>
                <p>Name: {hobbyToDisplay.name}</p>
                <p>{hobbyToDisplay.detailImageDesc}</p>
            </div>
        </div>
    )
}