import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getPosts = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const impostor = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getPosts, impostor };
