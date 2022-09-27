function removeEveryOther(arr){
    //your code here

    let wowarr = []

    for (let index = 0; index < arr.length; index++) {
        
        if(index % 2 == 0){

             wowarr.push(arr[index])

        }
        
    }
  console.log(wowarr)
  }
  removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep","Remove", "Keep"])