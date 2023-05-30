let youtube ={
    title:'learning JS',
    creator:'Mini',
    description:'wants to explore the tech world',
    motivation:'meeeeeeeeeeee'
}

console.log(youtube)
console.log(`the name of the video is ${youtube.title} and is created by ${youtube.creator}`)


let course ={
    name:'Javascript',
    description:'fun ',
    price:800,
    creator:'hitesh'
}


console.log(course)
console.log(`the name of the course is ${course.name} and is created by ${course.creator} and price is ${course.price}`)
//it changes whole object
course.name ="JavaScripts"
console.log(`the name of the course is ${course.name} and is created by ${course.creator} and price is ${course.price}`)
console.log(course)

let course1 ={
    name:'Java',
    description:'funny ',
    price:560,
    creator:'hitesh'
}

let course2 ={
    name:'Javascript',
    description:'fun ',
    price:800,
    creator:'hitesh'
}

let runningcources = function(myObj){
   // console.log(`price of course is ${myObj.price}`)
    //return `price of course is ${myObj.price}`
    return{
        format1: `price of course is ${myObj.price}`,
        format2:`name of course is ${myObj.name}`
    }
}

//console.log(runningcources(course1))
let res = runningcources(course1)
console.log(res.format1)
console.log(res)


