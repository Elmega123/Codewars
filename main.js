
// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

// my solution

function nameShuffler(str){
    //Shuffle It

    let result = str.split(" ") // ['Paul', 'Steve', 'Panakkal']
    let one = result[0]
    let two = result[1]
    let cool = [two , one]
    let maybe =  cool.toString()
    let final = maybe.replace(/,/g," ")
   return final
  }
//   The best solution
  nameShuffler("john McClane")


  function nameShuffler2(str){

    return str.split(" ").reverse().join(" ")

  }

    console.log(nameShuffler2("pablo de la o"))



