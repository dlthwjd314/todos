import axios from "axios";

const apiBaseUrl = "http://localhost:3000/todo";

export const getAll = async () => {
  return await axios(apiBaseUrl);
};

export const create = async todo => {
  const options = {
    method: "POST",
    data: { ...todo },
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await axios(apiBaseUrl, options);
};

export const update = async todo => {
  const options = {
    method: "PUT",
    data: { ...todo },
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await axios(`${apiBaseUrl}/${todo.id}`, options);
};

export const remove = async todo => {
  const options = {
    method: "DELETE",
    data: { ...todo },
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await axios(apiBaseUrl, options);
};
