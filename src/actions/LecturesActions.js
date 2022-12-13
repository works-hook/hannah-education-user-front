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

export const getLectures = async() => {
  const { data } = await instance.get(`${BASE_URL}`);
  return data;
}

export const getLecture = async(id) => {
  const { data } = await instance.get(`${BASE_URL}/${id}`);
  return data;
}

export const getTeacher = async(id) => {
  const { data } = await instance.get(`${BASE_URL}/teacher/${id}`);
  return data;
}

export const likedLecture = async() => {
  const { data } = await instance.get(`${BASE_URL}/like`);
  return data;
}

export const checkLikedLecture = async(lectureId) => {
  const { data } = await instance.get(`${BASE_URL}/like/${lectureId}`);
  return data;
}

export const likeLecture = async(lectureId) => {
  const { data } = await instance.post(`${BASE_URL}/like/${lectureId}`);
  return data;
}

export const cancelLikeLecture = async(lectureId) => {
  const { data } = await instance.delete(`${BASE_URL}/like/${lectureId}`);
  return data;
}
