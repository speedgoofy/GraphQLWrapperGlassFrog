import { ApiKey }  from './ApiKey';
import DataLoader from 'dataloader'
const fetch = require('node-fetch');

export const domainLoader = new DataLoader(keys =>
  Promise.all(keys.map(fetchDomain)
  ))

const fetchDomain = (circleID) => {
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




