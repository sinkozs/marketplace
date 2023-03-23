const express = require('express');
const app = express();

//use static middleware with the static library
app.use(express.static('static'));
app.listen(3000, function () {
    console.log('Started on port 3000');
});

