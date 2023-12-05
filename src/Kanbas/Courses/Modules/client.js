import axios from "axios";

const COURSES_URL = `${process.env.REACT_APP_BASE_URL}/api/courses`;
const MODULES_URL = `${process.env.REACT_APP_BASE_URL}/api/modules`;

const request = axios.create({
  withCredentials: true,
});

export const findModuleToDelete = async (moduleId) => {
  const response = await request.delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};

export const findModulesForCourse = async (courseId) => {
  const response = await request.get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};

export const createModule = async (courseId, module) => {
  const response = await request.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const findModuleToUpdate = async (module) => {
  const response = await request.put(`${MODULES_URL}/${module._id}`, module);
  return response.data;
};
