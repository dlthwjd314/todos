import axios from "axios";

const apiBaseUrl = "http://localhost:8080/todo/";

export const getAll = async () => {
  return await axios(apiBaseUrl);
};

export const getByDate = async date => {
  return await axios(`${apiBaseUrl}${date}`, { method: "GET" });
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
  return await axios(apiBaseUrl, options);
};

export const remove = async id => {
  return await axios(`${apiBaseUrl}${id}`, {
    method: "DELETE",
  });
};
