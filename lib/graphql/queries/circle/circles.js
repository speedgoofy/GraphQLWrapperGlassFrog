import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql'

import { circlesType } from '../../types';
import { circlesLoader } from '../../data-loaders'

export default {
  type: new GraphQLList(circlesType),
  resolve: async (root) => circlesLoader.load([])
}