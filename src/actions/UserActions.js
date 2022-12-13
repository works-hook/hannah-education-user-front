import axios from 'axios';
import instance from "./MyAxios";

const BASE_URL = "http://localhost:8080";

export function loginUser(dataToSubmit) {
    return axios.post(`${BASE_URL}/users/login`, dataToSubmit)
        .then(response => response.data)
}

export const getUser = async() => {
    const { data } = await instance.get(`${BASE_URL}/users-student`);
    return data;
}

export const modifyUser = async(updateData) => {
    const { data } = await instance.patch(`${BASE_URL}/users-student`, updateData);
    return data;
}

export const updatePassword = async(updateData) => {
    const { data } = await instance.post(`${BASE_URL}/users/password`, updateData);
    return data;
}
