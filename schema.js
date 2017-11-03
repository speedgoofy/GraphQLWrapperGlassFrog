const fetch = require('node-fetch');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = require('graphql')

// cd circle id 19837


fetch(
    'https://api.glassfrog.com/api/v3/circles?include=members', {
    headers: { 'Content-Type': 'application/json',
    'x-auth-token': '0c0176196d5fba82d7aed22167495d3c9d4d20c9' },
})
.then(res => res.json())
.then(json => console.log(json));

const circleType = new GraphQLObjectType({
    name: 'Circle',
    description: '...',

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
        }
    })
})



module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'query',
        description: '...',

        fields: () => ({
            circle: {
                type: circleType,
                args: {
                    circleID: { type: GraphQLInt }
                },
                resolve: (root, args) => fetch(
                    `https://api.glassfrog.com/api/v3/circles/${args.circleID}?include=members`, {
                    headers: { 'Content-Type': 'application/json',
                    'x-auth-token': '0c0176196d5fba82d7aed22167495d3c9d4d20c9' },
                })
                .then(res => res.json())
            }
        })
    })
})

