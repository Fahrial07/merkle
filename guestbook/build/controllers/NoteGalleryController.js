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
class NoteGalleryController {
    constructor() {
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                //query get gallery data to result attributes name and note
                const noteGallery = yield guest.findAll({
                    attributes: ['name', 'note']
                });
                //return result
                return res.status(201).json({
                    message: 'Guest form successfully created',
                    data: noteGallery
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
exports.default = new NoteGalleryController();
