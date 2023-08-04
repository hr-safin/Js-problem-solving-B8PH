//1.sum of all the array element

function sumOfArray(array){
    let sum = 0
    for(let i=0; i<array.length; i++){
     let arrays = array[i]
     sum += arrays

    }

    return sum;
}

const arrayOfNumber = [1,3,5,3,52]
const sumResult = sumOfArray(arrayOfNumber)
console.log(sumResult)

//2. sum of all the array element(for of loop)

function sum(arr){
   let sum = 0
   for(let i of arr){
    sum = sum + i
   }

   return sum
}

const nums = [1,2,3,4,5]

const sumArray = sum(nums)
console.log(sumArray)

//3. sum of all odd number from an array

function oddSum(array){
    let sumOfOdd =0
    for(let i of array){
        if(i%2 !==0){
            sumOfOdd += i
        }
    }

    return sumOfOdd
}

const oddArray = [1,3,4,54,31,73,84]
const resultOdd = oddSum(oddArray)
console.log("Sum of Odd number:",resultOdd)

//4. sum of all the even number from an array

function evenSum(array){
    let sumOfEven =0
    for(let i of array){
        if(i%2 ===0){
            sumOfEven += i
        }
    }

    return sumOfEven
}

const evenArray = [1,3,4,54,31,73,84]
const resultEven = evenSum(evenArray)
console.log("Sum of Even number:",resultEven)

//5 Find the maximum number from an array

function maximum(numbers){
   if(numbers.length ===0){
    return "Array has no element"
   }
  
   let max = numbers[0]
   for(let item of numbers){
     if(item > max)
      max = item
   }

   return max
}

const height = [167,34,22,222,190]
const maximumOutput = maximum(height)
console.log("Maximum height is:",maximumOutput)

//6. Find the minimum number from an array

function min(numbers){
   if(numbers.length ===0){
    return "Array has not any element"
   }
  
   let min = numbers[0]
   for(let i =0; i<numbers.length;i++){
      
      if(numbers[i]<min){
        min = numbers[i]
      }
   }

   return min
}

const number = [13,33,3,52,534,2,5,1,0,-22]
const minNumber = min(number)
console.log("The minimum number is:",minNumber)

//7. reverse a string

function reverseString(str){
   if(str.length ===0){
    return "Empty String"
   }
   
   let reverseString = ""
   for(let i=str.length-1; i>=0; i--){
      reverseString += str[i]
      
   }

   return reverseString
}

const strInput = "Hello Safin"
const strOutput = reverseString(strInput)
console.log("Reverse String is:",strOutput)

//8. Reverse a word

function reverseWord(words){
      const word = words.split(" ")
    //   const reverese = word.reverse()
    //   return reverese
    
    let arr =[]
    for(let i=word.length-1; i>=0; i--){
      

      arr.push(word[i])
      
    }
    const arr2 = arr.join(" ")

    return arr2
}

const wordInput = "hello rahman safin nur al"
const wordOutput = reverseWord(wordInput)
console.log("The reverse word is:",wordOutput)

//9. Write a function that calculates the average of numbers in an array.

function arrayOfAverage(array){
    
    let sum =0
    for(let i=0; i<array.length; i++){
      sum +=array[i]
    }

    const average = sum/array.length
    return average
}

const averageArray = [1,2,3,4,5,6,7,8,9,10]

const averageOutput = arrayOfAverage(averageArray)
console.log(averageOutput)

//10. reverse a character from string using split,reverse,join

function reverseString(string){
   const word = string.split("")
   const reverse = word.reverse()
   const join = reverse.join("")
   return join
}
const strr = "reverse string"
const outputReverse = reverseString(strr)
console.log(outputReverse)

//10. Write a function that sorts an array in ascending order.

function sortAscendingWay(arr){
   
    let ascending =arr.sort(
    function(a,b){
        return a - b
    }
   )

   return ascending
}
const ascenArr = [1,23,52,13,131,51,234,122,13,3,53,2,5,3]
const outputAscending = sortAscendingWay(ascenArr)
console.log(outputAscending)

//11. Swap two variables without using a temporary variable.

function swap(a,b){
    return [a,b] = [b,a]
}

const swapVariable = swap(10,20)
console.log(swapVariable)