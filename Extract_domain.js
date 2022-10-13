// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

//params
// what we want words after the .com It will always have a url. 

// return https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript   => codewars


function domainName(url){

    // let domain = url.replace('https://www.', "")
    // let domain2 = domain.split('.')
    // console.log(domain2[0])
    // if (domain2[0].includes('http://')){
    //     let final = domain2[0].replace('http://', '')
    //     console.log(final)
    // }else{
    //     console.log(2)
    // return domain2[0]
    // }

    url =  url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');

    
    let final = url.split('.')
    console.log(final[0])

}
// console.log(domainName('https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript'),'codewars')
// console.log(domainName('https://www.linkedin.com/messaging/thread/2-'),"linkedin")
domainName('http://github.com/carbonfive/raygun')


// function test (url){
//     if (url.includes('http://')){
//         return true
//     }else {
//         return false
//     }
    
// }

// console.log(test('http://github.com/carbonfive/rayun'),'github')





// examples

// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript   => codewars
// https://www.linkedin.com/messaging/thread/2- => linkedin
// https://www.youtube.com/watch?v=ZlB4BockYNQ&ab_channel=LeonNoel => youtube

