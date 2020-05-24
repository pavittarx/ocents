// For graphql-codegen
let {typeDefs} = require("graphql-scalars");
const { makeExecutableSchema } = require('graphql-tools');

typeDefs = typeDefs.reduce((a, c) => a+c+' ', '');

module.exports = makeExecutableSchema({typeDefs});