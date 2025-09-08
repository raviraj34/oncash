"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usermodel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("");
const schema = mongoose_1.default.Schema;
const ObjectId = mongoose_1.default.Types.ObjectId;
const userschema = new schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userId: ObjectId
});
exports.usermodel = mongoose_1.default.model("users", userschema);
//# sourceMappingURL=db.js.map