import { shield } from "graphql-shield";

import { isAuthorized } from './rules/rulesIndex'

export const permissions = shield({
  Query: {},
  Mutation: {
    deleteProduct: isAuthorized,
    createProduct: isAuthorized,
    updateProduct: isAuthorized,
  },
});