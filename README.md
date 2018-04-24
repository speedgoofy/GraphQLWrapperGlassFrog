# GraphQL Wrapper for GlassFrog

A GraphQL wrapper for the GlassFrog API

We’re making it easier to query the GlassFrog API using [GraphQL]( http://graphql.org/)!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

What things you need to install or have installed

```
Node 6.9.0 or higher, together with NPM 3 or higher.
```

### Installing

Clone the GraphQlWrapperGlassFrog repository and navigate into the directory 

```
git clone https://github.com/speedgoofy/GraphQLWrapperGlassFrog.git
cd GraphQlWrapperGlassFrog   
```

Install Dependencies 

```
npm install 
```

Add your GlassFrog Api key

1. Navigate to https://app.glassfrog.com/api_keys and create a new Api key ( Name the key anything you like )
2. Open the GraphQlWrapperGlassFrog in your editor
3. In the "data-loaders" folder,  add a new file "ApiKey.js"
4. Export your ApiKey

```javascript
export const ApiKey = 'yourApiKey';
```

Start the server and Navigate to the GraphQl endpoint:

```
npm start 
```

```
http://localhost:8080/graphql
```

### Make a query!

Get the all the circles in you organization with the people in those circles 

```javascript
query{
    circles {
        id
        name
        people {
            name
        }
    }
}
```

### GraphQL!

Learn more about GraphQL at --> http://graphql.org/



