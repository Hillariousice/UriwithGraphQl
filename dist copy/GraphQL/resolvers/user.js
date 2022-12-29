"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = require("../../model/userModel");
const productModel_1 = require("../../model/productModel");
const bcryptjs_1 = __importStar(require("bcryptjs"));
const utils_1 = require("../../utils");
// import {generateToken} from '../'
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
                const oneProduct = await productModel_1.Products.findById(args.id);
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
                const oneUser = await userModel_1.User.findById(args.id);
                return oneUser;
            }
            catch (err) {
                console.log(err);
            }
        },
    },
    Mutation: {
        registerUser: async (_, args) => {
            try {
                const salt = await (0, bcryptjs_1.genSalt)();
                const password = await bcryptjs_1.default.hash(args.input.password, salt);
                const newUser = {
                    fullName: args.input.fullName,
                    password,
                    email: args.input.email,
                    salt
                };
                const userall = await userModel_1.User.create(newUser);
                if (userall) {
                    return { ...newUser, _id: userall._id };
                }
            }
            catch (err) {
                console.log(err);
            }
        },
        loginUser: async (parent, args, context) => {
            try {
                const { password, email } = args.input;
                const output = await userModel_1.User.findOne({ email });
                const isValidPassword = await (0, utils_1.verifyPassword)(args.input.password, password);
                if (!isValidPassword) {
                    throw new Error("Invalid password");
                    console.error("Invalid password");
                }
                return {
                    id: args.input.id,
                    email: args.input.email,
                    token: (0, utils_1.signToken)({ userId: args.input.id }),
                };
            }
            catch (err) {
                console.log(err);
            }
        },
        createProduct: async (_, args) => {
            try {
                const newProduct = {
                    name: args.input.name,
                    image: args.input.image,
                    brand: args.input.brand,
                    category: args.input.category,
                    description: args.input.description,
                    price: args.input.price,
                    countInStock: args.input.countInStock,
                    rating: args.input.rating,
                    userId: args.input.userId,
                    numReviews: args.input.numReviews,
                };
                const products = await productModel_1.Products.create(newProduct);
                if (products) {
                    return products;
                }
            }
            catch (err) {
            }
        },
        updateProduct: async (_, args) => {
            try {
                const id = args.input.id;
                const updateProduct = {
                    id: args.input.id,
                    name: args.input.name,
                    image: args.input.image,
                    brand: args.input.brand,
                    category: args.input.category,
                    description: args.input.description,
                    price: args.input.price,
                    countInStock: args.input.countInStock,
                    rating: args.input.rating,
                    userId: args.input.userId,
                    numReviews: args.input.numReviews,
                };
                const updateNew = await productModel_1.Products.findByIdAndUpdate(id, updateProduct, { new: true });
                if (updateNew) {
                    return updateNew;
                }
            }
            catch (err) {
                console.log(err);
            }
        },
        deleteProduct: async (_, args) => {
            try {
                const deleteOne = await productModel_1.Products.findById({ _id: args.id });
                console.log(deleteOne);
                if (deleteOne) {
                    return { message: `Product with ${args.id} has been deleted` };
                }
            }
            catch (err) {
                console.log(err);
            }
        }
    }
};
exports.default = UserResolvers;
