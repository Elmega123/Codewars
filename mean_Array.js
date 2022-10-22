function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array

    let summation = marks.reduce((a,b) => a+b)
    return  Math.floor(summation / marks.length )


  }

  console.log(getAverage([1,2,3,4,5,]))
  console.log(getAverage([1,1,1,1,1,1,1,2]))