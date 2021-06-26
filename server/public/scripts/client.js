$(document).ready( onReady );

function onReady(){
    console.log('hi');

    $('#submit').on('click', getCalculationToServer);
    $('.operator').on('click', assignOperator);
}

let operator;

function assignOperator(){
  return  operator= $(this).data('id');
}
// let operator = $(this).data('id');

function getCalculationToServer(){
    //get input values
    let numberA = $('#numberA').val();
    let numberB = $('#numberB').val();
    // let operator = $(this).data('id');
    let answer = '';
    console.log('Inputs were:', numberA, numberB, operator, answer);

    //send to server
    //$.ajax()
    $.ajax({
        //type
        method: 'POST',
        url: '/calculations',
        //data needs to be an object
        data:{
            number1: numberA,
            number2: numberB,
            operator: operator,
            answer: answer,
        }//becomes req.body on the server
    })
    returnServerCalc();
}

function returnServerCalc(){
    $.ajax({
        method: 'GET',
        url: '/calculations',
    })
        .then(function (response) { // The `response` is the result of AJAX request
            console.log('Response:', response);
            // #TODO - append to the DOM
            //#TODO renderCalculations(response);
          })
          .catch(function (error) { // The error is a response from the server from our AJAX request
            console.log('Error!', error)
          });
        };
