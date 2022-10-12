//funtion that when number is divisible by 3 print out 'fizz', when it's divisible by 5 print out 'buzz'
// when it's divisible by both print out 'fizzbuzz'

//params

// number will always be postitive
//always gtting a number
//no special characters , no funny business

//return  3 outcomes 'Fizz" ||'Buzz" || 'Fizz Buzz"

//Examples
// 9 => would be Fizz
// 10 => would be Buzz
// 15 => FizzBuzz

function fizz (num){
    //usign a for loop and usign if statement doing the fizzbuzz first. 
    // does that sound like a good plan of attack?
    for (let index = 1; index < num; index++) {
        if (index % 3 == 0 && index % 5 == 0){
           console.log( index, 'Fizz Buzz ' )
        }else if (index % 3 == 0 ){
            console.log(index ,'Fizz ' )
        }else if (index % 5 == 0 ){
            console.log(index ,'Buzz ' )
        }else{
            console.log(index)
        }
    }
     

}

fizz(50)
// console.log(fizz(10), "10 = fizz")

// if these work would you agree that I solved the challenge