import React, { useEffect, useState } from "react";



const fetchSoundCloudEmbed = async (url) => {
    const oEmbed = 'http://api.soundcloud.com/oembed?url=' 
    const params = new URLSearchParams({
        format: 'json',
        url: url,
        maxheight: '300',

    });

    try {
        const response = await fetch(`${oEmbedUrl}?${params}`);
        const data = await response.json();
        return data.html;
    } catch (error) {
        console.error('Error fetching SoundCloud Embed: ', error);
        this.setState({ error });
    }

}

export default { fetchSoundCloudEmbed }  