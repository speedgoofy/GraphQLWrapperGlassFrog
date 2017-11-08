// test circleid 19837

import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql'

import { circleType } from '../../types/circle';
import { fetchCircle }  from '../../fetch-functions/circle';

export default {
    type: circleType,
    args: {
        circleID: { type: GraphQLInt }
    },
    resolve: (root, args) => fetchCircle(args.circleID)
}