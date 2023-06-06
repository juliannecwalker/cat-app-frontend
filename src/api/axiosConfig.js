import axios from 'axios';

export default axios.create({
    // base URL comes from ngrok http 8080, all three servers must be running for this to work
    baseURL:'https://1bf0-4-35-212-11.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});
