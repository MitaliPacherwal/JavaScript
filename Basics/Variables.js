// let name = 'Mitali'
// //let name ='hello'
// let score = 45
// let bonus = 3898
// //don't use space in between var name , instead use _ or write without space.
// //don't use the same var name twice. specially if declared as const coz, it fixes value. but with var keyword you can declare var twice.

// console.log(name)
// console.log(score + bonus)
// //use brackets while writing long expressions.
// console.log((score-5)/5 + bonus)

// let marks = 5
// let marks1 
// let grade =(marks<10)
// let grade1 =(marks==10)

// console.log(grade)
// console.log(grade1)
// console.log(marks1)


//local var are not accesible from outside its scope.

let myglobal = "hello global"
if(true)
{ 
    //if I use var inplace of let, then I will be able to access this var outside the scope.
    // so avoid using var in place of let, use only when u wwnt to declare it a gobal
    //var mylocal ="hello local"
    let mylocal ="hello local"

   myglobal="globall hello"
   console.log(mylocal)
   console.log(myglobal)   
}

//console.log(mylocal)  //-- this gives an undefined error
console.log(myglobal)   


//Kings territory problem.

//if var, or let is not explixitly mentioned and a name is simply assigned a value, then it will be considered global.