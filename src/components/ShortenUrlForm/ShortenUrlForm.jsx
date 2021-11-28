/* eslint no-unused-vars: 1 */

import React, { useCallback, useState } from 'react';

import InfoBanner from '../InfoBanner';

import validateWebsiteUrl from '../../utils/validateWebsiteUrl';

import getShortenedUrl from '../../api/getShortenedUrl';

const ShortenUrlForm = () => {
    const [value, setValue] = useState('');
    const [isUrl, setIsUrl] = useState();
    const [shortLink, setShortLink] = useState({link: '', error: null});

    const onChange = useCallback(
        (e) => {
            const data = e.target.value;
            const isValid = data !== '' ? validateWebsiteUrl(data) : false;
            setValue(data);
            setIsUrl(isValid);
            setShortLink({link: "", error: null});
        },
        [setValue],
    );

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();

            if (isUrl) {
                getShortenedUrl(value, setShortLink);
            }
        },
        [value, isUrl, setShortLink],
    );

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="shorten">
                Url:
                <input
                    placeholder="https://example.com"
                    id="shorten"
                    type="text"
                    value={value}
                    onChange={onChange}
                    required
                />
            </label>
            <input type="submit" value="Shorten and copy URL" />
            {value && (
                <InfoBanner
                    isValidUrl={isUrl}
                    shortenedLink={shortLink}
                />
            )}
        </form>
    );
};

export default ShortenUrlForm;
