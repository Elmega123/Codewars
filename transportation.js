function rentalCarCost(d) {
    // Your solution here
    let cost = d * 40

    if(d >= 7 ){
       let actual = cost - 50
        return actual
    } else if(d >=3){
       let actual = cost - 20
        return actual
    }else{
        return cost
    }
    
  }

  console.log(rentalCarCost(3))