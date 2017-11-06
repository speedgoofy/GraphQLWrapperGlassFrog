import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from 'graphql'


export const roleType = new GraphQLObjectType({
    name: 'Role',
    description: '...',

    fields: () => ({
        id: {
            type: GraphQLString,
            resolve: json => json.id
        },
        name: {
            type: GraphQLString,
            resolve: json => json.name
        },
        purpose: {
            type: GraphQLString,
            resolve: json => json.email
        },
        elected_until: {
            type: GraphQLString,
            resolve: json => json.external_id
        },
        organization_id: {
            type: GraphQLString,
            resolve: json => json.settings
        }
    })
})