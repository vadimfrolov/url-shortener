import React from 'react';
import constants from '../../constants/constants';

const InfoBanner = (props) => {
    const { isValidUrl, shortenedLink } = props;

    return (
        <div className="linkPlace">
            {shortenedLink.link === '' && !shortenedLink.error && (
                <span
                    className={
                        isValidUrl
                            ? constants.validatedClassName
                            : constants.alertClassName
                    }
                >
                    {isValidUrl
                        ? constants.validatedTextMessage
                        : constants.alertTextMessage}
                </span>
            )}

            {shortenedLink.error && (
                <span className={constants.alertClassName}>
                    {shortenedLink.error}
                </span>
            )}

            {shortenedLink.link !== '' && (
                <>
                    <span className={constants.validatedClassName}>
                        {shortenedLink.link}
                    </span>{' '}
                    - copied!
                </>
            )}
        </div>
    );
};

export default InfoBanner;
