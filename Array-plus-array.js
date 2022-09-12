function arrayPlusArray(arr1, arr2) {
    

    let array1 = 0
    let array2 = 0
    
    for (let index = 0; index < arr1.length; index++) {
        
         array1 += arr1[index]
    }

    for (let index = 0; index < arr2.length; index++) {
        
        array2 += arr2[index]
   }

    return array1 + array2 

  }

  arrayPlusArray([1, 2, 3], [4, 5, 6])