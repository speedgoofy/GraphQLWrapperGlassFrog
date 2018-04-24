import express from 'express';
import graphqlHTTP from 'express-graphql';
import "babel-polyfill";
import schema from './graphql'
const app = express();

var port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('Navigate to http://localhost:3000/graphql');
});

app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true
})))

app.listen(port, () => {
  console.log('GraphQL server running at port 3000...')
})

