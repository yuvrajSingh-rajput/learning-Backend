const express = require('express');
const fs = require('fs');
const port = 4000;
const users = require('./MOCK_DATA.json');
const app = express();
app.use(express.urlencoded({extended: false})); // middleware : express dont know the type of body generated.
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Welcome to the Homepage!");
});

// when the app is running on the browser we will send the HTML data becuase it is fast also a good practice.
app.get('/users', (req, res) => {
    const data = `
        <ul>
            ${users.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join("")}
        </ul>`;
    res.send(data);
});

// when the app is running on both app and mobile or any other device then we will the send the JSON data and our frontend guy will handle it .
app.get('/api/users', (req, res) => {
    res.send(users);
});

// now suppose we want to access the user by its :id, let's see how to handle it;
app.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);
    if(userIndex === -1){
        return res.status(404).json({status : "user not found!"});
    }else{
        return res.json(users[userIndex]);
    }

}).patch((req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    let userIndex = users.findIndex((user) => user.id === id);
    if(userIndex !== -1){
        users[userIndex] = {...users[userIndex], ...body};
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
            if(err){
                return res.json({status : "pending"});
            }else{
                return res.json({status : "success", id : id});
            }
        })
    }else{
        return res.status(404).json({status : "user not found!"});
    }
}).delete((req, res) => {
    const id = Number(req.params.id);
    let userIndex = users.findIndex((user) => user.id === id);
    if(userIndex !== -1){
        users.splice(userIndex, 1);
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.json({ status: "pending" });
            } else {
                return res.json({ status: "success", id: id });
            }
        });
    }else{
        return res.status(404).json({status: "user not found!"});
    }
});

app.post('/api/users', (req, res) => {
    const body = req.body;
    const newUser = {...body, id: users.length + 1};
    users.push(newUser);

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.json({status: "pending"});
        } else {
            return res.json({status: "success", id: newUser.id});
        }
    });
});


app.listen(port, ()=>{
    console.log(`server is listening on port ${port}.`);
});
