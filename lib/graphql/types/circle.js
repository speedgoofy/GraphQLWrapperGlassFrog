import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql';

import { peopleType, roleType, domainType, policyType } from '../types';
// import { roleType } from './role';
// import { domainType } from './domain';
// import { policyType } from './policy';

export const circleType = new GraphQLObjectType({
  name: 'Circle',
  description: 'Get a specific circle by circleID',

  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: json => json.circles[0].id
    },
    name: {
      type: GraphQLString,
      resolve: json => json.circles[0].name
    },
    short_name: {
      type: GraphQLString,
      resolve: json => json.circles[0].short_name
    },
    strategy: {
      type: GraphQLString,
      resolve: json => json.circles[0].strategy
    },
    organization_id: {
      type: GraphQLString,
      resolve: json => json.circles[0].organization_id
    },
    people: {
      type: new GraphQLList(peopleType),
      resolve: json => json.linked.people
    },
    roles: {
      type: new GraphQLList(roleType),
      resolve: json => json.linked.roles
    },
    domains: {
      type: new GraphQLList(domainType),
      resolve: json => json.linked.domains
    },
    policies: {
      type: new GraphQLList(policyType),
      resolve: json => json.linked.policies
    }
  })
})