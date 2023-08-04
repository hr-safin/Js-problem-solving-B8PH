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