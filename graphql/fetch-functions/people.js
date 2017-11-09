import { ApiKey }  from './ApiKey';

const fetch = require('node-fetch');

export const fetchCircle = id => {

        return fetch(
            `https://api.glassfrog.com/api/v3/people/${id}`, {
            headers: { 'Content-Type': 'application/json',
            'x-auth-token': '0c0176196d5fba82d7aed22167495d3c9d4d20c9' },
        })
        .then(res => res.json())
        .then(json => json.people[0])
    }