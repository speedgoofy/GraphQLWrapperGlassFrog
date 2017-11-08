import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} from 'graphql'

import { circlesType } from '../../types/circles';
import { fetchCircles }  from '../../fetch-functions/circles';

const fetch = require('node-fetch');

export default {
    type: new GraphQLList(circlesType),

    resolve: async (root, args) =>  fetchCircles()
}