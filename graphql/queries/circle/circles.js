import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql'

import { circlesType } from '../../types/circles';
import { circlesLoader } from '../../data-loaders/circlesLoader'

export default {
  type: new GraphQLList(circlesType),
  resolve: async (root) => circlesLoader.load([])
}