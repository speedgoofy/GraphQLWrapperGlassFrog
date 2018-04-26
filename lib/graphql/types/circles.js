import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql';

import { peopleType, roleType } from '../types'
import { personLoader, rolesLoader } from '../data-loaders';

export const circlesType = new GraphQLObjectType({
  name: 'Circles',
  description: 'List circles for an organization',

  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: json => json.id
    },
    name: {
      type: GraphQLString,
      resolve: json => json.name
    },
    short_name: {
      type: GraphQLString,
      resolve: json => json.short_name
    },
    strategy: {
      type: GraphQLString,
      resolve: json => json.strategy
    },
    organization_id: {
      type: GraphQLString,
      resolve: json => json.organization_id
    },
    people: {
      type: new GraphQLList(peopleType),
      resolve: async json => {
        const ids = json.links.people
        return personLoader.loadMany(ids)
      }
    },
    roles: {
      type: new GraphQLList(roleType),
      resolve: async json => {
        const ids = json.id
        return rolesLoader.load(ids)
      }
    },
  })
})