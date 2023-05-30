const todo= []

todo.push('can')
todo.push('man')
todo.push('van')
todo.push('tan')

todo.forEach(function(todos , index){
    console.log(`do at ${index+1} - ${todos}`)
})
//pushing from top
todo.unshift('tan','van','man','can')
for(let i=0;i<todo.length;i++){
    console.log(todo[i])
}


let grades = function(marks , totalmarks){
    let percent = (marks/totalmarks)*100

    let grade= ""
    if(percent >=80){
        grade = "A+"
    }
    else if(percent >=60){
    grade="A"
    }
    else if(percent>=40){
            grade="B"
    }
    else{
    grade="C"
    }
    return `your grade is ${grade} and percentage is ${percent}`


}

let result = grades(96 ,100)
console.log(result)
