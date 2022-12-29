"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthorized = void 0;
const graphql_shield_1 = require("graphql-shield");
const index_1 = require("../../utils/index");
exports.isAuthorized = (0, graphql_shield_1.rule)()(async (parent, args, ctx, info) => {
    const { authorization } = ctx.request.headers;
    if (!authorization) {
        return false;
    }
    const token = authorization.replace("Bearer", "").trim();
    const { userId } = (0, index_1.verifyToken)(token);
    return !!userId;
});
