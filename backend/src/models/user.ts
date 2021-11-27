import mongoose from 'mongoose';

const Schema = mongoose.Schema;

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

export default mongoose.model('user', User);