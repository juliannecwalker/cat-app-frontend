import axios from 'axios';

export default axios.create({
    // base URL comes from ngrok http 8080, all three servers must be running for this to work
    baseURL:'https://6c04-2600-387-15-917-00-a.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});
