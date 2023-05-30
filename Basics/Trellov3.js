let myTodo = {
    day: "monday",
    meetings:0,
    meetDone:0,
    addMeeting: function(meet){
        this.meetings =this.meetings + meet
    },
    meetingDone : function(meet){
        this.meetDone = this.meetDone + meet
    },
    resetDay: function(){
        this.meetings =0
        this.meetDone =0

    },
    summary: function(){
        return `you have ${this.meetings - this.meetDone} meetings`
    }
}

//let myTodoTwo = {
 //   day: "tuesday",
   // meetings:0,
   // meetDone:0,
  //  addMeeting: function(meet){
  //      this.meetings =this.meetings + meet
        //console.log(this)  //here this means the whole object
 //   }   
   // }

myTodo.addMeeting(5)
myTodo.meetingDone(3)
console.log(myTodo.summary())
myTodo.resetDay()
console.log(myTodo.summary())


