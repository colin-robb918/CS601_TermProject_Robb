import React from "react";
import { useParams } from 'react-router-dom';

export default function HobbyDetail({ items }) {
    let { SKU } = useParams();
    SKU = parseInt(SKU);

    const hobbyToDisplay = items.find(h => h.SKU === SKU);

    return (
        <div className="main-content">
            <h1>Hobby Details</h1>
            <div>
                <img src={hobbyToDisplay.detailImage} alt='hobby'></img>
                <p>Name: {hobbyToDisplay.name}</p>
                <p>{hobbyToDisplay.detailImageDesc}</p>
            </div>
        </div>
    )
}