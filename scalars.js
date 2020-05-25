// For graphql-codegen
let {typeDefs} = require("graphql-scalars");
const { buildSchema } = require('graphql');

typeDefs = typeDefs.reduce((a, c) => a+c+' ', '');

module.exports = typeDefs;