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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = __importDefault(require("../models/user"));
var router = express_1.default.Router();
/* check if email if unique */
router.route('/emailExtists').post((req, res) => {
    let email = req.body.email;
    user_1.default.find({ 'email': email }, (err, adm) => {
        if (err)
            console.log(err);
        else
            res.json(adm);
    });
});
/* register users. */
router.route('/register').post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body.password = yield bcrypt_1.default.hashSync(req.body.password, 10);
    let user = new user_1.default(req.body);
    user.save()
        .then(response => {
        res.status(200).json('successfully');
    }).catch(err => {
        res.status(400).json('not');
    });
}));
//  /* if user can login. */
// router.route('/login').post(
//     async (req, res) => {
//         let username = req.body.username;
//         let password = req.body.password;
//         let user = await User.findOne({ username: username });
//         if(user && Bcrypt.compareSync(password, user.get('password'))) {
//             return res.json(admin);
//         } else {
//             console.log('error')
//         }
//     }
// );
module.exports = router;
//# sourceMappingURL=account.js.map