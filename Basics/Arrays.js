// array declared using const.
//we can keep different datatype var in array[]


const heros =["sam","ram","bam","lam"]
console.log(heros[0])
console.log(heros[2])
//changing values
heros[3] = 'yam'
console.log(`last hero is ${ heros[heros.length-1]}`)

console.log(`WE HAVE ${ heros.length} heros`)

//start of array
heros.shift() //it shifts index 0 to index 1, i.e removes 1st element.
console.log(heros)

heros.unshift('mam') //it puts new value in the beginning of the array
console.log(heros)


// end of array
heros.pop()  //deletes last item
console.log(heros)
heros.push('tam') //addes at the end
console.log(heros)

//middle of array

console.log(heros.splice(2,1,'fam')) //position2, element 1, to be replaced with. also prinitng the element removed.

console.log(heros)


