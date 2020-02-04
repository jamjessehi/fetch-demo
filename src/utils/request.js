import { OK } from "constants/HttpStatus";

const checkStatus = response => {
  if (response.status === OK) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const parseJSON = response => response.json();

export const paramStringify = params => {
  const searchParams = new URLSearchParams();

  for (const item of Object.entries(params)) {
    searchParams.set(...item);
  }
  return searchParams.toString();
};
export const urlWithParam = (url, params) => {
  return `${url}?${paramStringify(params)}`;
};

const BASE = process.env.REACT_APP_BASE_URL;

export default (url, options = {}) => {
  const u = new URL(url, BASE);

  const defaultOptions = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    credentials: "include"
  };

  return fetch(u.href, { ...defaultOptions, ...options })
    .then(checkStatus)
    .then(parseJSON);
};
