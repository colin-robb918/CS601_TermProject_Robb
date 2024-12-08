import React from "react";
import '../AboutMe.css';

export default function AboutMe() {
    return (
        <div className="main-content">
            <ul className="photo-captions">
                <li>
                    <img src='../images/sneakpeek.jpeg' alt='Private Vow Exchange' />
                    <p className="image-description">My wife and I exchanging vows privately before the wedding</p>
                </li>
                <li>
                    <img src='../images/weddingceremony.jpeg' alt='Wedding Ceremony' />
                    <p className="image-description">Taking a moment to enjoy the wedding day</p>
                </li>
                <li>
                    <img src='../images/postwedding.jpeg' alt='Post Wedding' />
                    <p className="image-description">A stop in the White Mountains of New Hampshire after the wedding</p>
                </li>
                <li>
                    <img src='../images/christmas24.jpeg' alt='Old York Schoolhouse Christmas Photos' />
                    <p className="image-description">My wife and I making our Christmas Cards for all of our close friends</p>
                </li>
            </ul>
        </div>
    )
}