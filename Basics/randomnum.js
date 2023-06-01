let a =45
let b=87

result = a/b
console.log(result.toFixed(3))  //it fixes number of decimal num allowed

//console.log(Math.random() * 5 ) //random num generation between 1 to 5.


//can play dice with this.
let upper =6
let lower = 1
let myRandom = Math.floor(Math.random() * (upper - lower +1)) + lower 
//+1 here states from 1 to 5 and not 0 to 5 and + lower means floor value of 1 
//console.log(myRandom)


//search from array of objects

const myTodo =["take bath","dance","eat healthy"]

console.log(myTodo.indexOf('take bath'))    //returns index of array element

const newTodos = [{
  title:'take bath',
  isDone:false,  
}, {
    title:'dance',
    isDone:false, 
},{
    title:'eat healthy',
  isDone:true,
}]

const index= newTodos.findIndex(function(todo, index){
    console.log(todo);
    return todo.title === 'dance'
})


console.log(index);

//mthod 1
const findTodo = function(myTodos ,title){
const index = myTodos.findIndex(function(todo,index){
    return todo.title.toLowerCase() === title.toLowerCase()
})
return myTodos[index]
}

let printMe = findTodo(newTodos , 'dance')
console.log(printMe)


//method2

const findTodo2 = function(myTodos ,title){
    const titleReturned = myTodos.find(function(todo,index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
    }
    
    let printMe2 = findTodo(newTodos , 'dance')
    console.log(printMe)