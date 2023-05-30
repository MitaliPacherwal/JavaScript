const days =["mon", "tue","wed","thr","fri","sat"]

let hello = function(){
    console.log("hello function")
}

days.forEach(hello) //foreach can also take functions as arguments

//or

days.forEach(function(){
    console.log("in foreach")
})

days.forEach(function(day){  //any parameter name can be passed in the function
    console.log(day)
})

days.forEach(function(day , index){  //remember to always pass 1st param as the element in array and second param will be index.
    console.log(`day ${day} starts at -- ${index+1}`)
})

//for loop

for (let i=0; i<days.length;i++){
    console.log(days[i])
    }

    console.log("\n")
for (let i=days.length-1 ; i>=0 ;i--){
    console.log(days[i])

}


