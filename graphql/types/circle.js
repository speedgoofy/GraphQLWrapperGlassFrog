import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql';

import { peopleType } from './people'

export const circleType = new GraphQLObjectType({
    name: 'Circle',
    description: '...',

    fields: () => ({
        id: {
            type: GraphQLString,
            resolve: json => json.id
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
        people: {
           type: new GraphQLList(peopleType),
           resolve: json => json.linked.people
         }
    })
})