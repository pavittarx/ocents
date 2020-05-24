// For graphql-codegen

const {typeDefs} = require("graphql-scalars");
const { makeExecutableSchema } = require('graphql-tools');

module.exports = makeExecutableSchema({typeDefs});