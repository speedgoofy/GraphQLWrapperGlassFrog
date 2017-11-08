const fetch = require('node-fetch');

import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql';

//import { peopleType } from './people'
//import { roleType } from './role'

export const circlesType = new GraphQLObjectType({
    name: 'Circles',
    description: '...',

    fields: () => ({
        id: {
            type: GraphQLString,
            resolve: json => json.name
        },
        name: {
            type: GraphQLString,
            resolve: json => json.name
        },
        short_name: {
            type: GraphQLString,
            resolve: json => json.short_name
        },
        strategy: {
            type: GraphQLString,
            resolve: json => json.strategy
        },
        organization_id: {
            type: GraphQLString,
            resolve: json => json.organization_id
        },
        // people: {
        //     type: new GraphQLList(peopleType),
        //     resolve: json => {
        //         const ids = json.links.people

        //         return Promise.all(ids.map(id =>
        //             fetch(
        //                 `https://api.glassfrog.com/api/v3/people/${id}`, {
        //                 headers: { 'Content-Type': 'application/json',
        //                 'x-auth-token': '0c0176196d5fba82d7aed22167495d3c9d4d20c9' },
        //             })
        //             .then(res => res.json())
        //             .then(json => json.people[0])
        //         ))}
        // },
        // roles: {
        //     type: new GraphQLList(peopleType),
        //     resolve: json => {
        //         const ids = json.links.roles

        //         return Promise.all(ids.map(id =>
        //             fetch(
        //                 `https://api.glassfrog.com/api/v3/roles/${id}`, {
        //                 headers: { 'Content-Type': 'application/json',
        //                 'x-auth-token': '0c0176196d5fba82d7aed22167495d3c9d4d20c9' },
        //             })
        //             .then(res => res.json())
        //             .then(json => json.roles[0])
        //         ))}
        // }
    })
})