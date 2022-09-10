function grow(x){

    let multi = 1

    for (let index = 0; index < x.length; index++) {    

        multi *= x[index]
        
    }

   return multi

}

grow([4, 1, 1, 1, 4])

