"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = require("../../model/userModel");
const productModel_1 = require("../../model/productModel");
const UserResolvers = {
    Query: {
        getProducts: async () => {
            try {
                const products = await productModel_1.Products.find({});
                return products;
            }
            catch (err) {
                console.log(err);
            }
        },
        getProductById: async (_, args) => {
            try {
                const oneProduct = await productModel_1.Products.findById({ _id: args.id });
                return oneProduct;
            }
            catch (err) {
                console.log(err);
            }
        },
        getUsers: async () => {
            try {
                const users = await userModel_1.User.find({});
                return users;
            }
            catch (err) {
                console.log(err);
            }
        },
        getUserById: async (_, args) => {
            try {
                const oneUser = await userModel_1.User.findById({ _id: args.id });
                return oneUser;
            }
            catch (err) {
                console.log(err);
            }
        }
    },
    Mutation: {
        registerUser: async (_, args) => {
            try {
            }
            catch (err) {
                console.log(err);
            }
        }
    }
};
exports.default = UserResolvers;
