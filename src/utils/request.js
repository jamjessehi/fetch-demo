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

  return fetch(u.href, { ...defaultOptions, ...options }).then(response =>
    response.json()
  );
};
