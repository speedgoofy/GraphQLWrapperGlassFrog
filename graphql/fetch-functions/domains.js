import { ApiKey }  from './ApiKey';

const fetch = require('node-fetch');

export const fetchDomain = (circleID) => {
  return fetch(
    `https://api.glassfrog.com/api/v3/circles/${circleID}/roles`, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': ApiKey
      },
    })
    .then(res => res.json())
    .then(json => json)
}




