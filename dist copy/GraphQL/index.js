"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./resolvers/user"));
exports.default = {
    Query: {
        ...user_1.default.Query
    },
    Mutation: {
        ...user_1.default.Mutation
    }
};
