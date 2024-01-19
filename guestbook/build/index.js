"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
//Routers
const UserRoutes_1 = __importDefault(require("./routers/UserRoutes"));
const AuthRoutes_1 = __importDefault(require("./routers/AuthRoutes"));
const GuestBookRoutes_1 = __importDefault(require("./routers/GuestBookRoutes"));
const NoteGalleryRoutes_1 = __importDefault(require("./routers/NoteGalleryRoutes"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.plugins();
        this.routes();
        (0, dotenv_1.config)();
    }
    plugins() {
        this.app.use(body_parser_1.default.json());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, compression_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send("Welcome to wedding guestbook app.");
        });
        //users routes
        this.app.use("/api/v1/users", UserRoutes_1.default);
        //auth
        this.app.use("/api/v1/auth", AuthRoutes_1.default);
        //guest
        this.app.use("/api/v1/guest", GuestBookRoutes_1.default);
        //note
        this.app.use("/api/v1/note-gallery", NoteGalleryRoutes_1.default);
    }
}
const port = 8000;
const app = new App().app;
app.listen(port, () => {
    console.log("This app run on port " + port);
});
