/* global fetch, localStorage */
export default function(url, options = {}, authNotRequired) {
  options.headers = options.headers || {};

  if (!authNotRequired) {
    options.headers = Object.assign(options.headers, authHeader())
  }

  options.method = options.method || 'get';
  if (options.method.toLowerCase() !== 'get' && !options.headers['Content-type']) {
    options.headers['Content-type'] = 'application/json';
  }

  if (typeof options.body === 'object') {
    options.body = JSON.stringify(options.body);
  }

  return fetch(url, options).then(response => response.json());
}

function authHeader() {
  // return authorization header with jwt token
  let token = localStorage.getItem('token');
  if (token) {
    return { 'Authorization': `Bearer ${token}` };
  }
  else {
    return {};
  }
}