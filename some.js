function logResponeBody(jsonBody){
    console.log(jsonBody);
}

function callbackFn(result){
    result.json().then(logResponeBody)
}

var sendObj = {
    method : "GET"
};

fetch("http://localhost:3000/handlesum?counter=10",sendObj).then(callbackFn)