import instance from "./MyAxios";

const BASE_URL = "http://localhost:8080/user-student"

export const getBanners = async() => {
  const { data } = await instance.get(`${BASE_URL}/banner`);
  return data;
}

export const ping = async() => {
  return await instance.get(`http://localhost:8080/ping`)
}
