//Question-1
//The Function which does not have function name and function keyword and denoted by arrow is known as arrow function.Comparing with tradition function expression it does not have function key word and function name
//Question-2
var add=(a,b)=>
{
    return a+b
}
//Question-3
var square=n=>
    n*n
console.log(square(2))
//Question-4
// here in arrow function when we take only one paraemeter no need of () lets see an example
var str=a=>
{
    console.log("Deepthi")
}
str()
//Question-5
//implicit return
var cube=n=>
    n*n*n
console.log(cube(3))
//explicit return
var cube=n=>
{
    return n*n*n
}
console.log(cube(3))
//Question-6
var subtract=(a,b)=>
     a-b
console.log(subtract(5,3))
//Question-7
var demo=()=>
    "Hello,World!"
console.log(demo())