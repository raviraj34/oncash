"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/api/signup", (req, res) => {
    const { email, password } = req.body;
    const user = db_1.usermodel.create({
        email,
        password
    });
});
//# sourceMappingURL=index.js.map