import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5001";

class DJApi {
    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);
        const url = `${BASE_URL}/${endpoint}`;
        const headers = {};
        const params = (method === "get") ? data : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    // Existing API routes ...

    /**
     * Fetches embed code from SoundCloud's oEmbed API using axios.
     * @param {string} trackUrl - The URL of the SoundCloud track or playlist.
     * @returns {Promise} A promise that resolves with the embeddable content.
     */
    static async fetchSoundCloudEmbed(trackUrl) {
        const oEmbedUrl = 'https://soundcloud.com/oembed';

        try {
            const response = await axios.get(oEmbedUrl, {
                params: {
                    format: 'json',
                    url: trackUrl,
                    iframe: true // Additional parameters can be added as needed
                }
            });

            return response.data; // This will contain the embed code
        } catch (error) {
            console.error('Error fetching SoundCloud embed:', error);
            throw error;
        }
    }
}

export default DJApi;
