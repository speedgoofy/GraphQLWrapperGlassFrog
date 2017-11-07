const fetch = require('node-fetch');

import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql';

import { peopleType } from './people'
import { roleType } from './role'

export const circleType = new GraphQLObjectType({
    name: 'Circle',
    description: '...',

    fields: () => ({
        id: {
            type: GraphQLString,
            resolve: json => json.circles[0].id
        },
        name: {
            type: GraphQLString,
            resolve: json => json.circles[0].name
        },
        short_name: {
            type: GraphQLString,
            resolve: json => json.circles[0].short_name
        },
        strategy: {
            type: GraphQLString,
            resolve: json => json.circles[0].strategy
        },
        organization_id: {
            type: GraphQLString,
            resolve: json => json.circles[0].organization_id
        },
        people: {
            type: new GraphQLList(peopleType),
            resolve: json => json.linked.people
        },
        roles: {
            type: new GraphQLList(roleType),
            resolve: json => json.linked.roles
        }
    })
})