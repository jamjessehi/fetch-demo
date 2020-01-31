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

export default (url, options = {}) => {
  const base = process.env.REACT_APP_BASE_URL;

  const u = new URL(url, base);

  const defaultOptions = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };

  return fetch(u.href, { ...defaultOptions, ...options });
};
