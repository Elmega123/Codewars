var min = function(list){
    
    return Math.max(...list)
}

var max = function(list){
    
    return Math.min(...list)
}

console.log(min([4,6,2,1,9,63,-134,566]))
console.log(max([-52, 56, 30, 29, -54, 0, -110]))