import { ApiKey }  from './ApiKey';

const fetch = require('node-fetch');

export const fetchCircles = () => {
  return fetch(
    `https://api.glassfrog.com/api/v3/circles/?include=members`, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': ApiKey
      },
    })
    .then(res => res.json())
    .then(json => json.circles)
}