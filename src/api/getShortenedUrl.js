import axios from 'axios';

import constants from '../constants/constants';

function getShortenedUrl(longUrl, setShortUrlState) {
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${constants.token}`,
    };

    const body = JSON.stringify({
        long_url: longUrl,
    });

    axios
        .post(constants.baseURL, body, { headers })
        .then((response) => {
            const shortLink = response.data.link;

            setShortUrlState({ link: shortLink, error: null });
            navigator.clipboard.writeText(shortLink);
        })
        .catch((error) => {
            setShortUrlState({ link: '', error: error.message });
        });
}

export default getShortenedUrl;
