import instance from "./MyAxios";

const BASE_URL = "http://localhost:8080"

export const getBanners = async() => {
  const { data } = await instance.get(`${BASE_URL}/user-student/banner`);
  return data;
}

export const getRandomSubjects = async() => {
  const { data } = await instance.get(`${BASE_URL}/lecture/tags-random`);
  return data;
}

export const getSubjects = async() => {
  const { data } = await instance.get(`${BASE_URL}/lecture/tags`);
  return data;
}

export const getTeachers = async() => {
  const { data } = await instance.get(`${BASE_URL}/user-student/teacher`);
  return data;
}
