function sumMix(x){

    let summation = 0
    for (let index = 0; index < x.length; index++) {

       
         summation +=   Number(x[index])
        
    }

     return summation

}
function sumMix(x){

   return x.map(a => +a).reduce((a,b) => a+b)

}


console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))