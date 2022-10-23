function evenNumbers(array, number) {
    // good luck

    
//     let arrr1 = []
//    for (let index = 0; index < array.length; index++) {
    
//     if(array[index] % 2 == 0){
//         arrr1.push(array[index])
//     } 
   
//    }
//    console.log(arrr1)

//    const final = arrr1.slice(-number)

//    return final

          return array.filter(x => x % 2 == 0).slice(-number)


  }

  console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9],3))