import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from 'graphql'

import { domainType } from './domain'
import { accountabilitiesType } from './accountabilities'
import { peopleType } from './people'
import { fetchPeople } from '../fetch-functions/people'

const fetch = require('node-fetch');


export const roleType = new GraphQLObjectType({
    name: 'Role',
    description: '...',

    fields: () => ({
        id: {
            type: GraphQLString,
            resolve: json => {
                //console.log(json);
                return json.id
            }
        },
        tag_names :{
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
        // domains : {
        //     type: new GraphQLList(domainType),
        //     resolve: json => json.domains
        // },
        // accountabilities : {
        //     type: new GraphQLList(accountabilitiesType),
        //     resolve: json => json.domains
        // },
        people: {
            type: new GraphQLList(peopleType),
            resolve: async json => {
                const ids = json.links.people
                return Promise.all(ids.map(fetchPeople)
            )}
        }
    })
})