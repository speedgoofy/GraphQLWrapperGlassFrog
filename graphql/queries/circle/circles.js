import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql'

import { circlesType } from '../../types/circles';
import { fetchCircles }  from '../../fetch-functions/circles';

export default {
    type: new GraphQLList(circlesType),

    resolve: async (root) =>  Promise.resolve(fetchCircles())
}