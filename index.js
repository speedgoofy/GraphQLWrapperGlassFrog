import express from 'express';

import graphqlHTTP from 'express-graphql';

import schema from './graphql'
const app = express();

app.get('/', (req, res) => {
  res.send('Navigate to http://localhost:3000/graphql');
});

app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true
})))

app.listen(3000, () => {
  console.log('GraphQL server running at port 3000...')
})

