const fetch = require('node-fetch');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = require('graphql')

// cd circle id 19837


fetch(
    'https://api.glassfrog.com/api/v3/circles?include=members', {
    headers: { 'Content-Type': 'application/json',
    'x-auth-token': '0c0176196d5fba82d7aed22167495d3c9d4d20c9' },
})

.then(res => res.json())
.then(json => console.log(json));

const rolesType = new GraphQLObjectType({
    name: 'Roles',
    description: '...',

    fields: () => ({
        id: {
            type: GraphQLString,
            resolve: json => 
            console.log(json)
        },
        name: {
            type: GraphQLString,

        },
        purpose: {
            type: GraphQLString,

        },
        elected_until: {
            type: GraphQLString,

        },
        organization_id: {
            type: GraphQLInt,
        },
        accountabilities: {
            type: GraphQLString,
        }
    })
})


const peopleType = new GraphQLObjectType({
    name: 'Person',
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
        email: {
            type: GraphQLString,
            resolve: json => json.circles[0].email
        },
        external_id: {
            type: GraphQLString,
            resolve: json => json.circles[0].external_id
        }
    })
})



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
        },
        roles: {
            type: new GraphQLList(rolesType),
            resolve: json => {
                console.log(json.linked.roles)
                console.log( json.circles[0].links.roles)
            }
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

