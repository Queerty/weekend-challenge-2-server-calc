const express = require('express');
const app = express();
const PORT = 5000;

//serve static files
app.use(express.static('server/public'));
//process the data
app.use(express.urlencoded( {extended: true}));
app.use(express.json());

app.listen( PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
//global array
let calculationArray = [];

//function to send back history array and answer?
app.post('/calculations', (req, res) => {
    console.log('in post for calculations', req.body);

    //add it to our history array
    calculationArray.push(req.body);

    console.log('all of the inputs', calculationArray);

    //always respond
    res.sendStatus(201); //ok!
});


//GET `/calculations` array of calc object info
app.get('/calculations', (req, res) => {
    console.log('Request method:', req.method);
    console.log('Request for /calculations was made!');
    //send response back
    res.send(calculationArray);//sends back array
})//GET function done
