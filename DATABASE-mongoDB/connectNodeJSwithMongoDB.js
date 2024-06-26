const express = require('express');
const port = 4000;
const mongoose = require('mongoose');
const { type } = require('os');
const app = express();

/*
[
        {Connecting NodeJS with MongoDB | Mongoose + Express}
]
*/

//TODO 1: Schema
const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type : String
    },
    email: {
        type : String,
        unique : true, 
        required : true
    },
    country : {
        type : String
    },
    gender: {
        type : String
    }
},{timestamps : true}
);
//TODO 2: Model
const User = mongoose.model("user", userSchema);

// TODO 3: Connect database
mongoose.connect('mongodb://127.0.0.1:27017/you-tube-clone').then(() => console.log('database connected successfully!')).catch((err) => console.log('error in connecting database ', err));

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Welcome to the Homepage!");
});

app.get('/users', async (req, res) => {
    try {
        const allDBusers = await User.find({});
        const data = `
            <ul>
                ${allDBusers.map(user => `<li>${user.firstName} ${user.lastName}</li>`).join("")}
            </ul>`;
        res.send(data);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/api/users', async (req, res) => {
    const DBusers = await User.find({});
    res.setHeader('X-myName', 'Yuvraj Singh');
    res.status(200).json(DBusers);
});

app.route('/api/users/:id').get(async (req, res) => {
    const user = await User.findById(req.params.id);

    if(!user){
        return res.status(404).json({status : "user not found!"});
    }else{
        return res.status(200).json(user);
    }

}).patch(async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true, 
            runValidators: true
        });
        if (!updatedUser) {
            return res.status(404).json({ status: "user not found!" });
        }
        return res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }

}).delete(async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ status: "user not found!" });
        }
        return res.status(200).json({ status: "success" });
    } catch (err) {
        console.log("Error ", err);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
});

app.post('/api/users', async (req, res) => {
    const body = req.body;
    if(!body.first_name || !body.email || !body.country || !body.gender)
        return res.status(400).json({msg : 'all fields are required...'});

    const result = await User.create({
        firstName : body.first_name,
        lastName : body.last_name,
        email : body.email, 
        country : body.country,
        gender : body.gender
    });

    console.log(result);
    return res.status(201).json({msg : 'success'});
});


app.listen(port, ()=>{
    console.log(`server is listening on http://localhost:${port}`);
});
