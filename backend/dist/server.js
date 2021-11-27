"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
var server = app.listen(4000, function () {
    console.log('listening for requests on port 4000,');
});
app.use(cors_1.default());
app.use(body_parser_1.default.json());
const mongooseUri = "mongodb+srv://stevandipl:stevandipl@cluster0.arryu.mongodb.net/diplomski?retryWrites=true&w=majority";
mongoose_1.default.connect(mongooseUri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('Database connected');
});
var accountRouter = require('./routes/account');
app.use('/account', accountRouter);
//# sourceMappingURL=server.js.map