const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { initializeApp } = require("firebase/app");
const config = require("./config");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const app = express();
const PORT = config.appPort;

const firebaseClient = initializeApp({
  apiKey: config.firebaseApiKey,
  authDomain: config.firebaseAuthDomain,
  databaseURL: config.firebaseDatabaseUrl,
  projectId: config.firebaseProjectId,
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      headers: req.headers,
      firebaseClient,
    };
  },
});

server.start().then(() => {
  server.applyMiddleware({ app, cors: true });
  app.listen({ port: PORT }, () => {
    console.log(`🚀 Server has started on http://localhost:${PORT}/graphql`);
  });
});
