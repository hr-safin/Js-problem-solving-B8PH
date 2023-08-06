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

//12. Create a function that returns the factorial of a given number.
 
function factorial(number){
  
    let product =1
    for(let i=number; i>0; i--){
       product *= i   
    }
    return product

}

const factorialNumber = 6
const factorialOutput = factorial(factorialNumber)
console.log(factorialOutput)


//13. Implement a function to find the maximum of two numbers.

function findMaxOfTwo(num1,num2){
   
    if(num1>num2){
        return "Number1 is the largest"
    }else if(num2>num1){
        return "Number2 is the largest"
    }else{
        return "They are equal"
    }
 
}

const number1 = 60
const number2 = 70

const printTheMax = findMaxOfTwo(number1,number2)
console.log(printTheMax)


//14. concat two array

function concatArray(arr1,arr2){
    const newArray = arr1.concat(arr2)
    return newArray;
}

const array1 = [1,2,3,4,5,6]
const array2 = [8,6,9,10]

console.log(concatArray(array1,array2))

//15. Add new element after deleting 5 element starting from index 2 then add 55,66,77,88,99

function splicing(arr){
   const deletedAndAdded = arr.splice(2,5,55,66,77,88,99)
   return deletedAndAdded;
}

const spliceArray = [1,2,3,4,5,6,7,8]
const newArray = splicing(spliceArray)
console.log("The new array:",spliceArray)

console.log("Removed:",newArray)

//16. Remove duplicate items from an array

function duplicate(num){
        
        let newArray = []
        for(let i=0; i<num.length; i++){
             if(newArray.includes(num[i]) ===false){
                newArray.push(num[i])
             }
            
        }

        return newArray
}

const removeArray = [1,2,3,3,2,1,"safin","wasif","nur","wasif"]
const outputOfRemove = duplicate(removeArray)
console.log("Old Array:",removeArray)
console.log("New Array:",outputOfRemove)

//17. Find the largest mega pixel camera phone from an array of phone objects

const phoneDetails = [
    {name : "Samsung",Camera : 15,Storage: "62gb", Price: 22000},
    {name : "RealMe",Camera : 5,Storage: "32gb", Price: 10000},
    {name : "Iphone",Camera : 17,Storage: "132gb", Price: 122000},
    {name : "Pixel",Camera : 14,Storage: "32gb", Price: 88000},
    {name : "Huawai",Camera : 25,Storage: "232gb", Price: 222000}


]


function largestCamera(phoneDetails){
     
    let largest = phoneDetails[0]
    for(let i=0; i<phoneDetails.length; i++){
        let item = phoneDetails[i]
        if(item.Camera > largest.Camera){
            largest = item
        }
       
    }

    return largest  
}

const largerPixel = largestCamera(phoneDetails)
console.log(largerPixel)

//18. Calculate the total cost of the products in a shopping cart

const shoppingCart = [
    {name: "pant",price: 3000},
    {name: "t-shirt",price: 1000},
    {name: "shirt",price: 2000},
    {name: "belt",price: 1000},
    {name: "polo-shirt",price: 1000},
    {name: "sneakers",price: 11000},
]

function calculatePrice(shoppingCart){
   
    let sum =0
    for(let i=0; i<shoppingCart.length; i++){
        
        let product = shoppingCart[i]
        
        sum += product.price

    }

    return sum
}

const productPrice = calculatePrice(shoppingCart)
console.log("Total Cost:",productPrice,"Taka")
