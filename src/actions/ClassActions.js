import instance from "./MyAxios";

const BASE_URL = "http://localhost:8080"

export const getTakingLecture = async () => {
  const { data } = await instance.get(`${BASE_URL}/lecture-student/taking`);
  return data;
}

export const getNotice = async(noticeId) => {
  const { data } = await instance.get(`${BASE_URL}/class-student/notice/${noticeId}`);
  return data;
}

export const getAllClass = async(lectureId) => {
  const { data } = await instance.get(`${BASE_URL}/class-student/${lectureId}`)
  return data;
}

export const doneTakingClass = async(takingClassId) => {
  const { data } = await instance.post(`${BASE_URL}/class-student/${takingClassId}`);
  return data;
}

