import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'

import { domainType } from './domain';
import { accountabilitiesType } from './accountabilities';
import { peopleType } from './person';

import { personLoader } from '../data-loaders/personLoader';
import { domainLoader } from '../data-loaders/domainLoader';
import { accountabilitiesLoader } from '../data-loaders/accountabilitiesLoader';

export const roleType = new GraphQLObjectType({
  name: 'Role',
  description: 'Get the roles for a circle',

  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: json => {
        //console.log(json);
        return json.id
      }
    },
    tag_names: {
      type: GraphQLString,
      resolve: json => json.tag_names
    },
    name: {
      type: GraphQLString,
      resolve: json => json.name
    },
    purpose: {
      type: GraphQLString,
      resolve: json => json.purpose
    },
    elected_until: {
      type: GraphQLString,
      resolve: json => json.elected_until
    },
    organization_id: {
      type: GraphQLString,
      resolve: json => json.organization_id
    },
    domains: {
      type: new GraphQLList(domainType),
      resolve: json => {
        const circleId = json.links.circle
        const domainIds = json.links.domains

        return domainLoader.load(circleId)
          .then(data => {
            const domainList = data.linked.domains
            var domainsForRole = domainList.filter(function (el) {
              return ~domainIds.indexOf(el.id)
            })
            return domainsForRole
          })
      }
    },
    accountabilities: {
      type: new GraphQLList(accountabilitiesType),
      resolve: json => {
        const circleId = json.links.circle
        const accountabilityIds = json.links.accountabilities
        return accountabilitiesLoader.load(circleId)
          .then(data => {
            const accountabilitiesList = data.linked.accountabilities
            var accountabilitiesForRole = accountabilitiesList.filter(function (el) {
              return ~accountabilityIds.indexOf(el.id)
            })
            return accountabilitiesForRole
          })
      }
    },
    people: {
      type: new GraphQLList(peopleType),
      resolve: async json => {
        const ids = json.links.people
        return personLoader.loadMany(ids)
      }
    }
  })
})