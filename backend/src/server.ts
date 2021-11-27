import express, { json, RequestHandler } from 'express';
import bodyParser from 'body-parser';
import mongoose, { Document } from 'mongoose';
import cors from 'cors';

const app = express();
var server = app.listen(4000, function () {
    console.log('listening for requests on port 4000,');
});

app.use(cors());
app.use(bodyParser.json() as RequestHandler);

const mongooseUri = "mongodb+srv://stevandipl:stevandipl@cluster0.arryu.mongodb.net/diplomski?retryWrites=true&w=majority";

mongoose.connect(mongooseUri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database connected');
});


var accountRouter = require('./routes/account');

app.use('/account', accountRouter);




