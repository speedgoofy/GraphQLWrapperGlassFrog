import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql';

import { peopleType } from './people'
import { roleType } from './role'

import { fetchPeople } from '../fetch-functions/people';
import { fetchRoles } from '../fetch-functions/roles';

//import { ApiKey }  from '../fetch-functions/ApiKey';

//const fetch = require('node-fetch');

export const circlesType = new GraphQLObjectType({
    name: 'Circles',
    description: 'List circles for an organization',

    fields: () => ({
        id: {
            type: GraphQLString,
            resolve: json => json.id
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
        people: {
            type: new GraphQLList(peopleType),
            resolve: async json => {
                const ids = json.links.people
                return Promise.all(ids.map(fetchPeople)
            )}
        },
        roles: {
            type: new GraphQLList(roleType),
            resolve: async json => {
                const id = json.id
                return Promise.resolve(fetchRoles(id))
            }
        },
    })
})