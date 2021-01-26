import axios from 'axios';

export default function call(url) {
    return axios.get(url);
}
