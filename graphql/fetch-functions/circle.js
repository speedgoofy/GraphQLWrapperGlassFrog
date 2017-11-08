import { ApiKey }  from './ApiKey';

const fetch = require('node-fetch');

export const fetchCircle = id =>
    fetch(
        `https://api.glassfrog.com/api/v3/circles/${id}?include=members`, {
        headers: { 'Content-Type': 'application/json',
                    'x-auth-token': ApiKey },
    })
    .then(res => res.json())
    .then(json =>  json)