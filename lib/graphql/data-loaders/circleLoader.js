import { ApiKey }  from './ApiKey';
import DataLoader from 'dataloader'
const fetch = require('node-fetch');

export const circleLoader = new DataLoader(keys =>
    Promise.all(keys.map(fetchCircle))
  )

const fetchCircle = id =>
  fetch(
    `https://api.glassfrog.com/api/v3/circles/${id}?include=members`, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': ApiKey
      },
    })
    .then(res => res.json())
    .then(json => json)