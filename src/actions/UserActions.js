import axios from 'axios';

const BASE_URL = "http://localhost:8080";

export function loginUser(dataToSubmit) {
    return axios.post(`${BASE_URL}/users/login`, dataToSubmit)
        .then(response => response.data)
}
