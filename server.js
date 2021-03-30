require('dotenv').config();

const { ApolloServer } = require('apollo-server')
const fs = require('fs');
const path = require('path');

const Query = require("./src/resolvers/Query")
const Mutation = require('./src/resolvers/Mutation')
const { Date } = require('./src/resolvers/ScalarDate')

const resolvers = {
    Query,
    Mutation,
    Date
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync(path.join(__dirname, '/src/schema.graphql'), 'utf-8'),
    resolvers: resolvers,
});

server
    .listen()
    .then(({ url }) => console.log(`Server is running on ${url}`));