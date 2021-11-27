"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let User = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    isAdmin: {
        type: Boolean
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});
exports.default = mongoose_1.default.model('user', User);
//# sourceMappingURL=user.js.map