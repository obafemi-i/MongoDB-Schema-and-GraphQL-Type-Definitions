const fs = require('fs-extra');
const path = require('path');
const { buildSchema, GraphQLSchema } = require('graphql');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

const typeDefs = `
  type User {
    id: ID!
    username: String!
  }

  type Query {
    users: [User]
  }
`;

// Function to build the GraphQL schema from type definitions
const buildGraphQLSchema = () => {
  return buildSchema(typeDefs);
};

// Function to write the schema and type definitions to files
const writeSchemaToFile = (schema) => {
  const schemaPath = path.join(__dirname, 'schemas', 'schema.graphql');
  fs.writeFileSync(schemaPath, schema);
};

// Function to update MongoDB models
const updateMongoDBModels = () => {
  // Implement logic to handle schema updates and model changes here
  // For example, you can use a migration tool or update the Mongoose models accordingly
};

// Main function to update schema, type definitions, and MongoDB models
const updateSchema = () => {
  try {
    const schema = buildGraphQLSchema();
    writeSchemaToFile(schema);

    // After writing the schema to file, update MongoDB models if needed
    updateMongoDBModels();

    console.log('Schema and models updated successfully.');
  } catch (error) {
    console.error('Failed to update schema and models:', error);
  }
};

// Trigger the schema update when this script is executed
updateSchema();

module.exports = { updateSchema };
