1.// find the sum of all the array element


const arrayOfNumber = [1,3,4,3,43,54,53]

function myArr(arr){
    let total =0
    for(let arrs of arr){
        let element = arrs
        total += element
    }

    return total
}

console.log(myArr(arrayOfNumber))

2.// square the each of the array element

const squareArray = [1,2,3,4,5,6]

function square(arr){

    const result = arr.map(index => index*index)
    return result
}

console.log(square(squareArray))

3.// multiply the each of the array element by two

const multiply = [1,3,4,5,6,8]

function multiplyTwo(arr){
    const mul = arr.map(gun => gun*2)
    return mul
}

console.log(multiplyTwo(multiply))

4.// write a arrow function that take 3 parameters now multiply them

const multiplythree = (a,b,c) => {
    return a * b * c
}
console.log(multiplythree(3,3,2))

5.// declare a three sentence and print them in one line

const first = "I am a web developer"
const second = "I love to code"
const third = "I love to eat pizza"

const result = `${first}. ${second}. ${third}.`
console.log(result)

6.// write a arrow function which has two parameter one you will give and another will be by default then add these two number

const addition = (a,b=10) => {
    return a +b
}

console.log(addition(40))

// 7.if the length of the array element is even push them in the new array

const nameOfFriends = ["wasdi","safin","hasibur rahman safin","mahi"]

const evenLength = (arr) => {
    let newArray = []
    for(let i=0; i<arr.length; i++ ){
        if(arr[i].length %2 ===0){
          newArray.push(arr[i])
        }
    }

    return newArray
}

console.log(evenLength(nameOfFriends))

8// sqaured array element then sum of squared element then average of squared element

const simpleArray = [1,2,3,4,5]

const lets = (arr) => {
    const newArray =[]
    for(let i=0; i<arr.length; i++){
       let sq = arr[i]*arr[i]
       newArray.push(sq)

    }
    
    let sum =0
    for(let i=0; i<newArray.length; i++){
      sum +=newArray[i]
    }
    
    return [newArray,sum,sum/newArray.length]
}

console.log(lets(simpleArray))

// 8 combine two array then from that array find the maximum number

const combineArray = (arr1,arr2) => {
    const newArr = arr1.concat(arr2)
    const max = Math.max(...newArr)
    return {newArr, max}
}

const arr1 = [1,2,3,4,5,55]
const arr2 = [33,43,56]

console.log(combineArray(arr1,arr2))

// 9.8 combine two array then from that array find the maximum number

const maximumFind = (arr1,arr2) => {
    const newArr = arr1.concat(arr2)

    let maximum = newArr[0]

    for(let i=0; i<newArr.length; i++){
        if(newArr[i] > maximum ){
            maximum = newArr[i]
        }
    }

    return {newArr,maximum}
}

console.log(maximumFind(arr1,arr2))

// 10.print all the array element

const allArray = [1,2,4,44]

const mapping = allArray.map(n => {
    return n
})

console.log(mapping)

// 11. object chaining find product2 from array of object

// const productList = [
//     {
//         name : "hasibur rahman safim",
//         id:1,
//         age : 34,

//         study : {
//           sub : "cse",
//           dream : {
//              firstOne : "full stack development",
//              secondOne : "digital marketer",
//              homeDream : {
//                 usa : 2030,
//                 dubai : 2050,
//                 car : {
//                    first : "lamborgini",
//                    second : "ferarri"

//                 }
//              }
//           }
//         }
//     }
// ]

// console.log(productList.study.dream.homeDream.car.second)

// 12. check two array element same or not?

const arre1 = [1,2,3,34]
const arre2 = [1,2,3]

const compare = (arr1,arr2) => {
    let text
    for(let i=0; i<arr1.length && arr2.length; i++){
        if(arr1[i] === arr2[i]){
             text = "they are same"
        }else{
            text = "they are not same"
        }
    }

    return text
}

console.log(compare(arre1,arre2))

// 13. write a arrow function converts odd array to an even array (array.map()) 

const oddArray = [1,3,5,7,9]

const evenArray = (arr) => {
    const even = arr.map(add => add +1)
    return even
}

console.log(evenArray(oddArray))

// 14. write a arrow function to convert even array array to odd array

const even =[2,4,6,8]

const oddFunc = (arr) => {
    const odd =[]

    for(let arrs of arr){
    
        odd.push(arrs+1)
    }

    return odd
}

console.log(oddFunc(even))

// 15. if an array element is divisible by 10 return them in new array

const filterArray = [20,30,45,65,78,80]

const divFunc = (arr) => {
    const fileterElem = arr.filter( el => el%10 ===0)
    return fileterElem
}

console.log(divFunc(filterArray))


16.// count all the occurence in the array of element using forEach()

const occArray = ["a","b","c","d","a","d","b","c"]

const count = {}

const countOcc = occArray.forEach(item => {
    if(count[item]){
        count[item]++
    }else{
        count[item] =1
    }
})

console.log(count)


// 17 find the sum of the array element only you can use forEach method


const sumArray = [1,2,3,4,5]

let total =0

const sumOfArray = sumArray.forEach(item => {
    total+=item
})

console.log(total)

// 18. remove duplicate element from an array

const duplicateArray = [1,2,3,4,43,4,2,1,4,5,5,6,6,6,7,8,8,9]

const removeDuplicate = duplicateArray.filter((value,index,arr) => {
    return arr.indexOf(value) === index
    // return arr.indexOf(value) === index
})

console.log(removeDuplicate)

//19. find element from an array

const findElem = ["safin","safin","wasif","akram"]

const findName = findElem.find(item => item === "safin")

console.log(findName)