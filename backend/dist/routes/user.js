"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwt_secret = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("../db");
const userRouter = express_1.default.Router();
exports.jwt_secret = "raviraj@123";
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const middleware_1 = require("./middleware");
exports.default = userRouter;
userRouter.post("/signup", async (req, res) => {
    const { firstname, lastname, password, email } = req.body;
    const user = await db_1.usermodel.create({
        firstname,
        lastname,
        password,
        email
    });
    if (user) {
        const token = jsonwebtoken_1.default.sign({
            id: user._id
        }, exports.jwt_secret);
    }
    if (user._id) {
        res.json({
            message: "user already exist"
        });
    }
    res.json({
        message: "signup complete"
    });
});
//@ts-ignore
userRouter.put("/update", middleware_1.authmiddeware, async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    await db_1.usermodel.updateOne(req.body, {
        id: req.userId
    });
});
//# sourceMappingURL=user.js.map