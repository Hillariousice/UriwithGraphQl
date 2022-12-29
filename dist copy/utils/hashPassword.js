"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = void 0;
const argon2_1 = require("argon2");
const hashPassword = async (password) => {
    return await (0, argon2_1.hash)(password);
};
exports.hashPassword = hashPassword;
