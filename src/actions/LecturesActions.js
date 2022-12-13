import instance from "./MyAxios";

const BASE_URL = "http://localhost:8080/lecture-student"

export const getMostTakenLectures = async() => {
  const { data } = await instance.get(`${BASE_URL}/most-taken`);
  return data;
}

export const getMostLikeLectures = async() => {
  const { data } = await instance.get(`${BASE_URL}/most-like`);
  return data;
}


