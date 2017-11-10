import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from'graphql'


export const policyType = new GraphQLObjectType({
  name: 'policy',
  description: 'get policies',

  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: json => {
        //console.log(json)
        return json.id
      }
    },
    title: {
      type: GraphQLString,
      resolve: json => json.title
    },
    body: {
      type: GraphQLString,
      resolve: json => json.body
    }
  })
})