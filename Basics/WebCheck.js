let userMail = 'tef@gmail.com'
let password = '5678@'

let userCheck = function(myString){
    if((myString.includes('@gmail.com')) &&(myString.length >12)){
        return console.log("true")
    }else{
    return console.log("false");  
    }  
}
userCheck(userMail)

let passCheck = function(myString){
    if((myString.includes('@')) &&(myString.length >3)){
        return console.log("true")
    }
    return console.log("false"); 
}

passCheck(password)