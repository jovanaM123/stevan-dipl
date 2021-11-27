import express from 'express';
import Bcrypt from 'bcrypt';
import User from '../models/user';
var router = express.Router();


/* check if email if unique */
router.route('/emailExtists').post(
    (req, res) => {
        let email = req.body.email;

        User.find({'email': email},
        (err, adm) => {
            if (err) console.log(err);
            else res.json(adm);
        });
    }
);

/* register users. */
router.route('/register').post(
    async (req, res) => {                
        req.body.password = await Bcrypt.hashSync(req.body.password, 10);
        let user = new User(req.body);

        user.save()
            .then(response => {
                res.status(200).json('successfully')
            }).catch(err => {
                res.status(400).json('not');
            })
    }
);


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