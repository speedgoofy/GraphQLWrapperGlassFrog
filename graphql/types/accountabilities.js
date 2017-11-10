import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from'graphql'


export const AccountabilitiesType = new GraphQLObjectType({
  name: 'Accountabilities',
  description: 'Get the Accountabilities of a role',

  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: json => json.id
    },
    description: {
      type: GraphQLString,
      resolve: json => json.description
    }
  })
})