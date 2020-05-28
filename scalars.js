// For graphql-codegen
let {typeDefs} = require("graphql-scalars");
typeDefs = typeDefs.reduce((a, c) => a+c+' ', '');
module.exports = typeDefs;