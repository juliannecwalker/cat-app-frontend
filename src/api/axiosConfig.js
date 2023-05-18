import axios from 'axios';

export default axios.create({
    // base URL comes from ngrok http 8080, all three servers must be running for this to work
    baseURL:'https://26a7-2601-19b-681-cf90-e5d0-93c3-964c-2714.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});
