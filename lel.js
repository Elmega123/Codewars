function repeatStr (n, s) {
    let result = s.repeat(n)
    console.log(result)
    return result;
  }

  repeatStr(4,"fef")


//   repeat very useful 


  function repeatStr1 (n, s) {
    let result = ""
    for (let i = 1; i <= n; i++) {
        result += s
      }
      console.log(result)
    return result;
  }

  repeatStr1(8,"lol")

  console.log("haha")