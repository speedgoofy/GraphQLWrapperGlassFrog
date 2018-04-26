// test circleid 19837

import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql'

import { circleType } from '../../types';
import { circleLoader } from '../../data-loaders'

export default {
  type: circleType,
  args: {
    circleID: { type: GraphQLInt }
  },
  resolve: (root, args) => circleLoader.load(args.circleID)
}