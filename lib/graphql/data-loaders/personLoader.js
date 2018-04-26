import { ApiKey }  from './ApiKey';
import DataLoader from 'dataloader'
const fetch = require('node-fetch');

export const personLoader = new DataLoader(keys =>
  Promise.all(keys.map(fetchPeople)
  ))

const fetchPeople = id => {
  return fetch(
    `https://api.glassfrog.com/api/v3/people/${id}?include=circles`, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': ApiKey
      },
    })
    .then(res => res.json())
    .then(json => json.people[0])
}