import React from "react";
import './LandingPage.css'
import SoundCloudWidget from "./SoundCloudPlayer";

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1>Dj Narcissist</h1>
            <p>NEW MIXES    EVENTS </p>
            <SoundCloudWidget />
        </div>
    );
}
export default LandingPage;