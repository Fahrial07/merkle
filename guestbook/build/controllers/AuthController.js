"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Authentication_1 = __importDefault(require("../utils/Authentication"));
const { user } = require("../db/models/index");
class AuthController {
    constructor() {
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { username, password } = req.body;
                //hash password
                const hashPassword = yield Authentication_1.default.hash(password);
                //query check data username to unique
                let userCheck = yield user.findOne({ where: { username: username } });
                //if result true return error notice
                if (userCheck) {
                    return res.status(400).json({
                        message: 'Username already exist'
                    });
                }
                //if false insert data
                const createUser = yield user.create({
                    username: username,
                    password: hashPassword
                });
                //and return result
                return res.status(201).json({
                    message: 'User created',
                    data: createUser
                });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    error: error,
                    message: 'Something went wrong'
                });
            }
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { username, password } = req.body;
                //find user by username in the database
                const userData = yield user.findOne({ where: { username } });
                if (!userData) {
                    return res.status(400).json({
                        message: 'Username or password wrong'
                    });
                }
                //compare password
                const isMatch = yield Authentication_1.default.passwordCompare(password, userData.password);
                if (isMatch) {
                    //create token
                    let token = yield Authentication_1.default.generateToken(userData.id, userData.username, userData.password);
                    //return result
                    return res.status(200).json({
                        message: 'Login success',
                        data: userData,
                        token: token
                    });
                }
                else {
                    return res.status(400).json({
                        message: 'Username or password wrong'
                    });
                }
            }
            catch (error) {
                console.log(error);
                res.status(500).json({
                    error: error,
                    message: 'Something went wrong'
                });
            }
        });
    }
}
exports.default = new AuthController();
