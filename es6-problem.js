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