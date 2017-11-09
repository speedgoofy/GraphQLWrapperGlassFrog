import { ApiKey }  from './ApiKey';

const fetch = require('node-fetch');

export const fetchDomains = (circleID, domainIds) => {

    const domainids = domainIds;

    return fetch(
        `https://api.glassfrog.com/api/v3/circles/${circleID}/roles`, {
        headers: { 'Content-Type': 'application/json',
                    'x-auth-token': ApiKey },
    })
    .then(res => res.json())
    .then(json => {
        const domainList = json.linked.domains

        var d = domainList.filter(function(el){
            return ~domainids.indexOf(el.id)
        })
        return d
    })
}




