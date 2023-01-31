function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    if(dadYearsOld< sonYearsOld *2){
        return sonYearsOld *2 - dadYearsOld
    }else{
        return dadYearsOld - sonYearsOld *2
    }


  }

    // console.log(twiceAsOld(55,30))

    function twiceAsOldd(dadYearsOld, sonYearsOld) {
   
        return Math.abs(dadYearsOld - sonYearsOld *2)
    
      }
    
      console.log(twiceAsOldd(65,30))