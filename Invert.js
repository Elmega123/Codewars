function invert(array) {

    let neww = []
   
    for (let index = 0; index < array.length; index++) {
       neww.push(array[index] * -1)
        
    }
    return neww

    // console.log( array.map(x => -x))
 }


 invert([1,2,3,-4,5])