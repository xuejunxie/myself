export const GENERIC_ERROR = 'Something went wrong!';
export const GENERIC_ERROR_RETRY = 'Something went wrong, please try again!';
export const api = {
  baseURL: './api',
  get: (endpoint, external = false) => api.respond('get', endpoint, null, external),
  post: (endpoint, options) => api.respond('post', endpoint, options),
  put: (endpoint, options) => api.respond('put', endpoint, options),
  patch: (endpoint, options) => api.respond('patch', endpoint, options),
  delete: (endpoint) => api.respond('delete', endpoint),
  respond: async (method, endpoint, data, external) => {
    const url = external ? endpoint : api.baseURL + endpoint;
    const options = data
      ? {
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify(data)
        }
      : {};
    try {
      const response = await fetch(url, {
        method,
        ...options
      });
      const data = await response.json();
      return [null, data];
    } catch (error) {
      return [error];
    }
  }
};
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      // @ts-ignore
      func(...args);
    };
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
export const sleep = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));
