import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from'graphql'


export const peopleType = new GraphQLObjectType({
    name: 'People',
    description: '...',

    fields: () => ({
        id: {
            type: GraphQLString,
            resolve: json => {
            //console.log('from people', json)
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
        }
    })
})