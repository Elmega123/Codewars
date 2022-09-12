function countPositivesSumNegatives(input) {
    // your code here

    if (input == null || input.length == 0){
    return [];
    }

    let result = []
    let sumofnegatives = 0
    let numberofpositives = 0

    for (let index = 0; index < input.length; index++) {
        if (input[index]>0){
             ++ numberofpositives
        }else if(input[index]<0){

            sumofnegatives += input[index]
        }
    }
    result.push(numberofpositives)
    result.push(sumofnegatives)
    
    return result

  }

  countPositivesSumNegatives([0,0])

