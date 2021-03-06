import { ApiKey }  from './ApiKey';
import DataLoader from 'dataloader'
const fetch = require('node-fetch');

export const peopleLoader = new DataLoader(keys =>
    Promise.all(keys.map(fetchPeople))
  )

const fetchPeople = () => {
  return fetch(
    `https://api.glassfrog.com/api/v3/people?include=circles`, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': ApiKey
      },
    })
    .then(res => res.json())
    .then(json => json.people)
}