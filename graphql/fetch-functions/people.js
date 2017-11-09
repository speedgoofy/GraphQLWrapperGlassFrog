import { ApiKey }  from './ApiKey';

const fetch = require('node-fetch');

export const fetchPeople = id => {

        return fetch(
            `https://api.glassfrog.com/api/v3/people/${id}`, {
            headers: { 'Content-Type': 'application/json',
            'x-auth-token': ApiKey },
        })
        .then(res => res.json())
        .then(json => json.people[0])
    }