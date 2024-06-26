const express = require('express');
const port = 4000;
const userRouter = require('./routes/user');
const {connectMongoDB} = require('./connection');
const {logReqRes} = require('./middlewares');
const app = express();

connectMongoDB('mongodb://127.0.0.1:27017/you-tube-clone').then(() =>console.log('database connected successfully!')).catch((err) => console.log('error in connecting database ', err));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//ROUTES
app.use('/user', userRouter);
app.use(logReqRes('log.txt'));

app.listen(port, ()=>{
    console.log(`server is listening on http://localhost:${port}`);
});
