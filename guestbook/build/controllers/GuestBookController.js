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
Object.defineProperty(exports, "__esModule", { value: true });
const { guest } = require("../db/models/index");
class GuestBookController {
    constructor() {
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { name, address, phone, note } = req.body;
                //valudate check empty data
                if (name == "") {
                    return res.status(400).json({
                        message: 'Name is required'
                    });
                }
                if (address == "") {
                    return res.status(400).json({
                        message: 'Address is required'
                    });
                }
                if (phone == "") {
                    return res.status(400).json({
                        message: 'Phone is required'
                    });
                }
                if (note == "") {
                    return res.status(400).json({
                        message: 'Note is required'
                    });
                }
                //validate check name to unique
                const checkName = yield guest.findOne({ where: { name: name } });
                //if true return error notice
                if (checkName) {
                    return res.status(400).json({
                        message: 'Name already exist'
                    });
                }
                const checkPhone = yield guest.findOne({ where: { phone: phone } });
                if (checkPhone) {
                    return res.status(400).json({
                        message: 'Phone already exist'
                    });
                }
                //if fales all validate store data to database
                const createGuest = yield guest.create({
                    name: name,
                    address: address,
                    phone: phone,
                    note: note
                });
                //return result data
                return res.status(201).json({
                    message: 'Guest form successfully created',
                    data: createGuest
                });
            }
            catch (error) {
                res.status(500).json({
                    error: error,
                    message: 'Something went wrong'
                });
            }
        });
    }
}
exports.default = new GuestBookController();
