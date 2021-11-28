const constants = {
    alertClassName: 'alert',
    alertTextMessage: 'url is not correct',

    validatedClassName: 'validated',
    validatedTextMessage: 'url is correct',

    baseURL: 'https://api-ssl.bitly.com/v4/shorten',

    token: process.env.REACT_APP_BITLY_AUTHORIZATION_TOKEN,
};

export default constants;
