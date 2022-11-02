function stringTransformer(str) {
    // Your code here
    let reverseStr = str.split(' ').reverse().join(' ')
    let transformedStr = reverseStr.split('').map( l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase())

    return transformedStr.join('')

  }

  console.log(stringTransformer('Example Input'))
  console.log(stringTransformer('Leon Noel'))