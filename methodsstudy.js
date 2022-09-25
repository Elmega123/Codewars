const items = [

    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 1000},
    {name: 'Computer', price: 25},
    {name: 'Keyboard', price: 500},

]
// filter I got a new array with the filtered stuff
// const filtered = items.filter((item)=>{
//     return item.price <= 100
// })

// console.log(filtered)

//map I got a new arrray with only certain values 
// const itemsnames = items.map((item)=>{
//     return item.name
// })

// console.log(itemsnames)

//Returns first item it finds
// const founditem = items.find((item)=>{
//     return item.name === 'TV'
// })

// console.log(founditem)

// make something happen for everything inside the array
//    items.forEach((item)=>{

// console.log(item.price)
// })

// returns true or false if depneding if condition is met or not
// const hasinexpensive =  items.some((item)=>{

//    return item.price <= 1
//     })

//     console.log(hasinexpensive)

// check if everthing meets condition otherwise returns false
// const hasinexpensive =  items.every((item)=>{

// return item.price <= 100
//   })

//    console.log(hasinexpensive)

// const total = items.reduce((a,b)=>{
//     return a + b.price
// }, 0)

// console.log(total)

// const itemss = [1,2,3,4,5]

// const includestwo = itemss.includes(2)
// console.log(includestwo)