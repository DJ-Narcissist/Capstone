import React, { useEffect, useState } from "react"
import { fetchSoundCloudEmbed } from "../Services/api"


const SoundCloudWidget = () => {
    const [embedHtml, setEmbedHtml] = useState('');

    useEffect(() => {
        const profileUrl = 'https://soundcloud.com/djnarcissist';
        fetchSoundCloudEmbed(profileUrl)
            .then(html => setEmbedHtml(html))
            .catch(error => console.error(error));
    },[]);

    return (
        <div dangerouslySetInnerHTML={{ __html: embedHtml }}/>
    );      
}


export default SoundCloudWidget;