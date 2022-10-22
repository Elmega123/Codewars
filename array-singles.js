function repeats(arr){
    //..

   return arr.filter(v => arr.indexOf(v)== arr.lastIndexOf(v)).reduce((a,b) => a+b)
    



    };


    console.log(repeats([4,5,7,5,4,8],"15"))
    console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11],"12"))