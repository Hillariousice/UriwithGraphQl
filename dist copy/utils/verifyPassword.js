"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = void 0;
// @/src/utils/verifyPassword.js
const argon2_1 = require("argon2");
const verifyPassword = async (hash, password) => {
    return await (0, argon2_1.verify)(hash, password);
};
exports.verifyPassword = verifyPassword;
