import * as dotenv from "dotenv";
dotenv.config();

import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { buildSchema } from "graphql";
import dataSource from "./lib/dataSource";

const start = async (): Promise<void> => {
  //const schema = await buildSchema({});

  const server = new ApolloServer({
    //schema,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });

  server.listen().then(async ({ url }) => {
    await dataSource.initialize();
    console.log(`serveur lancé sur ${url}`);
  });
};

start();
