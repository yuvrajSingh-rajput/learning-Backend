const express = require('express');
const port = 4000;
const users = require('./MOCK_DATA.json');
const app = express();

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
    const user = users.find((user) => user.id === id);
    return res.json(user);

}).patch((req, res) => {

    //TODO: Edit new USER
    return res.json({staus:"pending"});
}).delete((req, res) => {

    //TODO: Delete a user with its id
    return res.json({staus:"pending"});
});

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}.`);
});
