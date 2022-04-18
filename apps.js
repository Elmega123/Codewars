// Write a program that takes two numbers and prints the numbers. But for multiples of 
// three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
//  For numbers which are multiples of both three and five print “FizzBuzz”.

function FizzBuzz(start,end){
    for (let i = start; i<=end; i++){
    if(i % 5 == 0 && i % 3 == 0){
        console.log("FizzBuzz")
    }else if(i % 3 == 0){
        console.log("fizz")
    
    }else if(i % 5 == 0){
        console.log("buzz")
    }else{
        console.log(i)
    }
    }
}
console.log(FizzBuzz(93,100))

// Complete the function that takes two integers (a, b, where a < b)
//  and return an array of all integers between the input parameters, including them.

// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a,b){
    let array = []
    for(let i = a; i<=b; i++){

        array.push(i)

    }
    console.log(array)
    
    return array
}
between(4,20)