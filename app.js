const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//Setting Port
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.status(200).send("Welcome to Open Innovation Services");
})

// Handle 404 - Keep this as a last route
app.use(function(req, res, next) {
    res.status(404).send('404: File Not Found');
});


app.listen(port,()=>{
	console.log('app now listening for request on port 3000');
});