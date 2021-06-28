$(document).ready( onReady );

function onReady(){
    console.log('hi');
    
    renderCalculations();
    
    $('#Submit').on('click', postCalculationToServer);
    $('.operator').on('click', assignOperator);
    $('#clear').on('click', clearInputs);
}

let operator;

function assignOperator(){
  return  operator= $(this).data('id');
}
// let operator = $(this).data('id');

function clearInputs(){
  $('input').val('');
};
function postCalculationToServer(){
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
    .then(function(response){
      returnServerCalc();
    })
    .catch(function(err){
      console.log('Error,', err);
    })
    $('#numberA').val('');
    $('#numberB').val('');
}

function returnServerCalc(response){
    $.ajax({
        method: 'GET',
        url: '/calculations'
    })
        .then(function (response) { // The `response` is the result of AJAX request
            console.log('GET Response:', response);
            // #TODO - append to the DOM
           renderCalculations(response);
          })
          .catch(function (error) { // The error is a response from the server from our AJAX request
            console.log('Error!', error)
          });
        };



function renderCalculations(calculationArray){
  // $('#history').empty();
console.log('in renderCalculations');
  for (let calculation of calculationArray){
    $('#currentAnswer').empty();
    $('#currentAnswer').append(`Answer: ${calculationArray[calculationArray.length-1].answer}`);
    $('#history').append(`
    <li>
    ${calculation.number1}<span></span>
    ${calculation.operator}<span></span>
    ${calculation.number2}<span></span>
    =
    ${calculation.answer}<span></span>
    </li>
    `)
    
  }
};