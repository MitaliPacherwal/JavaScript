let myTodo = {
    day: "monday",
    meetings:0,
    meetDone:0,
}


//object passed here is the same declared above, anychanges will reflect in original also.
let addMeeting = function(todo , meet=0){
    todo.meetings = todo.meetings + meet;
}

let meetingDone = function(todo , meet=0){
    todo.meetDone = todo.meetDone + meet;
}

let resetDay = function(todo){
    todo.meetings = 0
    todo.meetDone =0
}

let getSummary = function(todo){
    let meetLeft = todo.meetings - todo.meetDone;
    return `you have ${meetLeft} meetings left to attend`
}


addMeeting(myTodo ,5)
addMeeting(myTodo,8)
meetingDone(myTodo,10)
console.log(myTodo)
console.log(getSummary(myTodo))

resetDay(myTodo)


