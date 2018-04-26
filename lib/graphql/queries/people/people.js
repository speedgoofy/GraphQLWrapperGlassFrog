import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql'

import { peopleType } from '../../types/person';
import { peopleLoader } from '../../data-loaders/peopleLoader'

export default {
  type: new GraphQLList(peopleType),
  resolve: async (root) => peopleLoader.load([])
}