const apiBaseUrl = 'http://localhost:4000/api';
const urls = getUrls({
  users: {
    authorised: 'users/authorised',
    login: 'users/authenticate'
  }
});

function getUrls(obj) {
  let urls = {};
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'string') {
      urls[key] = `${apiBaseUrl}/${obj[key]}`;
    } else {
      urls[key] = getUrls(obj[key]);
    }
  });

  return urls;
}

export default urls;
