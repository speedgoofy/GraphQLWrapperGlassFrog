import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql'

import { circleType } from '../../types/circle';

const fetch = require('node-fetch');

export default {
    type: new GraphQLList(circleType),

    resolve: async (root, args) => {

        return await fetch(
            `https://api.glassfrog.com/api/v3/circles/?include=members`, {
                headers: { 'Content-Type': 'application/json',
                            'x-auth-token': '0c0176196d5fba82d7aed22167495d3c9d4d20c9' },
        }).then(res => res.json())
        .then(json => {
            console.log(json.circles);
            return json.circles;
        }
    )
    }
}