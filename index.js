// instantiate express module
const express = require("express");

const router = require('./src/routes');

// Use express in app variabel
const app = express();

// define the server port
const port = 5000;

// create routing for index or home page
// app.get("/", (req, res) => {
//     // res means, response, and it send string "Hello Express!" to the API
//     const greetings = "Muhammad Nurilham";
//     res.send("Hello " + greetings);
// });

app.use(express.json());

// create endpoint grouping and router here
app.use('/api/v1/', router);

// When this nodejs app executed, it will listen to defined port
app.listen(port, () =>
    console.log(`Server running on port ${port}!! and Happy Hacking!`));