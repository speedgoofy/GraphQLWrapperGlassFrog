import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql'

import { peopleType } from '../../types';
import { peopleLoader } from '../../data-loaders'

export default {
  type: new GraphQLList(peopleType),
  resolve: async (root) => peopleLoader.load([])
}