"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./BaseRouter"));
const GuestBookController_1 = __importDefault(require("../controllers/GuestBookController"));
class GuestBookRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("/", GuestBookController_1.default.create);
    }
}
//exports
exports.default = new GuestBookRoutes().router;
