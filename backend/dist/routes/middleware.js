"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authmiddeware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("./user");
const authmiddeware = (req, res, next) => {
    const authheader = req.headers.get('authorization');
    if (!authheader || !authheader.startsWith('Bearer')) {
        //@ts-ignore
        res.status(403).json({
            message: "unathorized"
        });
    }
    const token = authheader?.split(' ')[1];
    //@ts-ignore
    const decoded = jsonwebtoken_1.default.verify(token, user_1.jwt_secret);
    if (decoded) {
        next();
    }
    else {
        console.log("authentication failed");
    }
};
exports.authmiddeware = authmiddeware;
//# sourceMappingURL=middleware.js.map