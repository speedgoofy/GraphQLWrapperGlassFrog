import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from'graphql'


export const domainType = new GraphQLObjectType({
    name: 'Domain',
    description: '...',

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