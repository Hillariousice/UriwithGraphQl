"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = void 0;
const graphql_shield_1 = require("graphql-shield");
const rulesIndex_1 = require("./rules/rulesIndex");
exports.permissions = (0, graphql_shield_1.shield)({
    Query: {},
    Mutation: {
        deleteProduct: rulesIndex_1.isAuthorized,
        createProduct: rulesIndex_1.isAuthorized,
        updateProduct: rulesIndex_1.isAuthorized,
    },
});
