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
let calculationArray = [];//history
//within POST got req.body
//before pushing to array do a conditional
//assess operator
//based on operator cal assign result to req.body.answer
//then pushed to the array
// let calcOutputArray = [];

// let operatorAnswer;

app.post('/calculations', (req, res) => {
    console.log('in post for calculations', req.body);
    let inputValues= req.body;
   calculateAnswer(inputValues);
   //add it to our history array
   
    
    // performOperation();
    // console.log(operatorAnswer);
    console.log('all of the inputs', calculationArray);
    //always respond
    res.sendStatus(201); //ok!
   
        
    });



function calculateAnswer(inputValues){//name function

    if(inputValues.operator == "plusBtn"){
   inputValues.answer= Number(inputValues.number1) + Number(inputValues.number2)
    }else if (inputValues.operator == minusBtn){
        operatorAnswer= inputValues.number1 - inputValues.number2;
    }else console.log('other')
    //division 
    //multiplication
    
    operatorAnswer = inputValues.answer
    console.log(operatorAnswer);
    return calculationArray.push(inputValues);

    
};

//GET it back
//loop through history on client side
// performOperation(calculationArray);


//Need to perform calculations on server side//instead of looping through array- right when I receive
//then send back (get) array
//server one app.post one app.get
//set up post- sets and answer- then throws in array
//send that whole array
//for history template literal $(`firstNumber) + $(`)

// function calculateAnswer(){//name function

//     if(req.body.operator == "plusBtn"){
//    operatorAnswer= Number(numberA) + Number(numberB)
//     }else if (req.body.operator == minusBtn){
//         operatorAnswer= Number(numberA) - Number(numberB)
//     }else if//division
//     //multiplication
//     return console.log(operatorAnswer)
// }push answer after flow control into array
//end function performOperation


//GET `/calculations` array of calc object info
app.get('/calculations', (req, res) => {
    console.log('Request method:', req.method);
    console.log('Request for /calculations was made!');
  
    //send response back
    res.send(calculationArray);//sends back array
})//GET function done


// function addNumbers(){
//     let additionOutput='';
// additionOutput= Number(calculationArray.number1) + Number(calculationArray.number2);
// calcOutputArray.push(additionOutput);
// console.log(additionOutput);
// };
// console.log(addNumbers);
// console.log(calcOutputArray);
