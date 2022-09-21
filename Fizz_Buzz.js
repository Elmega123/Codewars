

// if the number is multiple of 3 return fizz

// If the value is a multiple of 5: use the value "Buzz" instead

// fizzbuzz  goes first

// to use multiples 3 we will use things like 3 % == 0


function fizzbuzz(n)
{
    let arr = []
 
    for (let index = 1; index <= n; index++) {

        if(index % 3 == 0 && index % 5 == 0){

            console.log('fizzbuzz')
            arr.push("FizzBuzz")
        }else if(index % 3 == 0){
            console.log('fizz')
            arr.push("Fizz")
        }else if(index % 5 == 0){
            console.log('buzz')
            arr.push("Buzz")
        }else{
            arr.push(index)
            console.log(index)
        }
        

        
    }
 
 console.log(arr)
    
}

fizzbuzz(10)