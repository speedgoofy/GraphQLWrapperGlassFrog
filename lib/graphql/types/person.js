import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from'graphql'

import { circleType } from './circle';
import { circleLoader } from '../data-loaders/circleLoader'


export const peopleType = new GraphQLObjectType({
  name: 'People',
  description: 'Get a list of people',

  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: json => {
        console.log('from person', json)
        return json.id
      }
    },
    name: {
      type: GraphQLString,
      resolve: json => json.name
    },
    email: {
      type: GraphQLString,
      resolve: json => json.email
    },
    external_id: {
      type: GraphQLString,
      resolve: json => json.external_id
    },
    settings: {
      type: GraphQLString,
      resolve: json => json.settings
    },
    circles: {
      type: new GraphQLList(circleType),
      resolve: async json => {
        const ids = json.links.circles
        return circleLoader.loadMany(ids)
      }
    },

  })
})