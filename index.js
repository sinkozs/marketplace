const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// const session = require('express-session');

//  create res.render() on every res object
app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());


//use static middleware with the static library
app.use(express.static('static'));


require('./route/index')(app);

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
}); 

app.listen(3000, function () {
    console.log('Started on port 3000');
});

