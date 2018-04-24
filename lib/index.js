import express from 'express';
import graphqlHTTP from 'express-graphql';
import "babel-polyfill";
import schema from './graphql'
const cors = require('cors')
const app = express();


var port = process.env.port || 8080;

app.get('/', (req, res) => {
  res.send('Navigate to http://localhost:8080/graphql');
});

app.use(cors())

app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true
})))

app.listen(port, () => {
  console.log('GraphQL server running at port 8080...')
})

