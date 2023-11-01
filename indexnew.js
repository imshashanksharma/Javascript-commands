const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 3000
app.use(bodyParser.json())

// function middleware1(req,res,next){
//   console.log("From inside of middleware" + req.headers.counter);
//   next();
// }
// app.use(middleware1);

function calculatesum(counter){
  var sum = 0;
  for(var i = 0;i<=counter;i++){
    sum = sum + i;
  }
  return sum;
}

function calculatemul(counter){
  var mul = 1;
  for(var i = 1;i<=counter;i++){
    mul = mul * i;
  }
  return mul;
}


function handleFirstRequest(req,res){
  var counter = req.query.counter;
  var calculatedsum = calculatesum(counter);
  var calculatedmul = calculatemul(counter);
  var answerObject = {
    sum: calculatedsum,
    multiply: calculatedmul,
  };
  res.send(answerObject);
}


app.get('/handlesum',handleFirstRequest)

function started(){
  console.log(`Example app listening on port ${port}`)
}

app.listen(port,started)

 