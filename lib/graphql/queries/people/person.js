// test circleid 19837

import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql'

import { peopleType } from '../../types'
import { personLoader } from '../../data-loaders'

export default {
  type: peopleType,
  args: {
    personID: { type: GraphQLInt }
  },
  resolve: (root, args) => personLoader.load(args.personID)
}