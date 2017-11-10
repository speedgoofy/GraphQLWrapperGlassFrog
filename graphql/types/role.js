import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'

import { domainType } from './domain';
import { accountabilitiesType } from './accountabilities';
import { peopleType } from './people';

import { peopleLoader } from '../data-loaders/peopleLoader';
import { domainLoader } from '../data-loaders/domainLoader';

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
          }
          )
      }
    },
    // accountabilities : {
    //     type: new GraphQLList(accountabilitiesType),
    //     resolve: json => json.domains
    // },
    people: {
      type: new GraphQLList(peopleType),
      resolve: async json => {
        const ids = json.links.people
        return peopleLoader.loadMany(ids)
      }
    }
  })
})