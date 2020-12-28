import express from "express";
import mongoose from "mongoose";

import  data from "./data.js";
import Data from "./data.js";
import  Videos from "./dbModel.js";

const connnection_url = 'mongodb+srv://Test:mufaro@cluster0.uwyri.mongodb.net/Tik-Tok?retryWrites=true&w=majority';

mongoose.connect(connnection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//app config
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use((req,res, next) => {
    res.setHeader('Access-Control-Allow_Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next();
});

// db config

//api endpoints
app.get('/', (req, res) => res.status(200).send('Hello World'));

app.get('/v1/posts', (req, res) => res.status(200).send(Data));

app.get('/v2/posts', (req,res) => {
    Videos.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data)
        }
    })
});

app.post('/v2/posts', (req, res) => {
    //Post request to add data to the databse
    //It will let us add a video Document(row) to the videos collection
    const dbVideos = req.body;

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data)
        }
    })
})

//listen
app.listen(port, (req, res) => console.log(`listening on localhost: ${port}`));