// @/src/apollo/createApolloServer.js
import { ApolloServer } from "apollo-server-fastify";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { applyMiddleware } from "graphql-middleware";  // <- This line was added

// middlewares argument was added to the createApolloServer function
export const createApolloServer = (middlewares:any, { app, schema }:any) => {
  const schemaWithPermissions = applyMiddleware(schema, ...middlewares);  // <- This line was added

  return new ApolloServer({
    schema: schemaWithPermissions,  // <- This line was changed
    context: ({ request, reply }) => ({
      request,
      reply,
    }),
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer: app.server }),
      {
        serverWillStart: async () => {
          return {
            drainServer: async () => {
              await app.close();
            },
          };
        },
      },
    ],
  });
};