//first and last  dish must be same as beggining and end of beast. 

function feast(beast, dish) {


    let beastFirst = beast[0]
    let beastLast = beast[beast.length -1]

    let dishFrist = dish[0]
    let dishLast = dish[dish.length -1]

    if(beastFirst == dishFrist && beastLast == dishLast){
        return true
    }else{
        return false
    }
    // console.log(beast.split('')[beast.length - 1])
    }


feast('great blue heron',"garlic naan")

  console.log(feast("great blue heron","garlic naan"),true)
   console.log(feast("brown bear", "bear claw"), false)