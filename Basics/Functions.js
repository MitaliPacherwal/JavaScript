let funName = function(){
    console.log("hello")
}
funName();

let fullName = function(name , lname){
    console.log(`hello ${name} ${lname}`)
}
fullName('mini','pini');

let addNum = function(a  , b){
    let sum = a + b
    return sum;
    // return a+b
}

console.log(addNum(2,3))

let multi = function(name ="name" , count= 0){
    return "hello " + name + " count is: " + count
}
console.log(multi('mini',5))



