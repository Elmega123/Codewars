// my solution
function check(a, x) {
    // your code here
    let result = false
    for (let index = 0; index < a.length; index++) {
       if(a[index] == x ){

        result = true
       }
    }
    return result
  }
  check([101, 45, 75, 105, 99, 107],108)

//   cool solution

function check(a, x) {
    // your code here

    if(a.includes(x)){
        console.log(true)
    }else{
        console.log(false)
    }
    
  }



    check([101, 45, 75, 105, 99, 107],107)