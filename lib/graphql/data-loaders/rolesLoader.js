import { ApiKey }  from './ApiKey';
import DataLoader from 'dataloader'
const fetch = require('node-fetch');

export const rolesLoader = new DataLoader(keys =>
  Promise.all(keys.map(fetchRoles)
  ))

const fetchRoles = id => {
  return fetch(
    `https://api.glassfrog.com/api/v3/circles/${id}/roles`, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': ApiKey
      },
    })
    .then(res => res.json())
    .then(json => json.roles)
}
