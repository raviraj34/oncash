"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usermodel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("");
const schema = mongoose_1.default.Schema;
const userschema = new schema({
    username: String,
    password: String
});
exports.usermodel = mongoose_1.default.model("users", userschema);
//# sourceMappingURL=db.js.map