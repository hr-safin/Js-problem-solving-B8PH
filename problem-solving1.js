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
    {name: "pant",price: 3000, quantity: 3},
    {name: "t-shirt",price: 1000, quantity: 4},
    {name: "shirt",price: 2000, quantity: 3},
    {name: "belt",price: 1000, quantity: 1},
    {name: "polo-shirt",price: 1000, quantity: 7},
    {name: "sneakers",price: 11000, quantity: 2},
]

function calculatePrice(shoppingCart){
   
    let sum =0
    for(let i=0; i<shoppingCart.length; i++){
        
        let product = shoppingCart[i]

        const productTotal = product.price * product.quantity
        
        sum += productTotal
        

    }

    return sum
}

const productPrice = calculatePrice(shoppingCart)
console.log("Total Cost:",productPrice,"Taka")


//19. find the largest string element from an array

function stringElements(ar){
    
    let largestString = ar[0]
    for(let i=0; i<ar.length; i++){
        let index = ar[i]
        if(index.length > largestString.length){
            largestString = index
        }
        
    }

    return largestString
}

const stringOfArrays = ["saifn","wasdi","hasibur rahman safin","rahman","rahman safin rahman hasib"]

const stringOutputs = stringElements(stringOfArrays)
console.log("Largest String:",stringOutputs)

//20. Finding All the Occurrences of an Element

function findAll(array, element){
    
    let occArray = []
    for(let i=0; i<array.length; i++){
        let index = array[i]
        if(index ===element){
            occArray.push(i)
        }

    }
    return occArray
}

const occurrenceArray = [1,2,3,10,20,10,22,10,22,5,6,7,8,20,20]
const elem = 10

const occurrenceOutput = findAll(occurrenceArray, elem)
console.log(occurrenceOutput)

//21. Finding If Element exists else Adding the Element

function findExit(array,element){
    if(array.indexOf(element) === -1){
    // simply you have to return the new array after pushing (array.push(element)) the new element to the array 
       array.push(element)
       return array
    }else{
       return array
    }
}

const element = "safin"

const extitArray = ["wasif","jon","hrs","sins"]

const exitOutput = findExit(extitArray, element)
console.log(exitOutput)

//22. 
//  তোমাকে একটা function দেওয়া হবে called findingBadData(). এটা ইনপুট হিসেবে একটা array নিবে। array তে যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”. কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. 
//  এখন তোমার task: array তে কতগুলো Bad data আছে সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।
//  Sample Input & Output:-
//  Input: [ 1,2,5 ]
//  Output: 0
//  Input: [ 2, -5, -7, -13 ]
//  Output: 3


function findingBadData(arr){

    if(!Array.isArray(arr)){
        if(arr.length ===0){
            return "Provide valid array or type"
        }
    }

    let badArray = []
    let count = 0

    for(let i=0; i<arr.length; i++){
        if(arr[i] <0){
            badArray.push(arr[i])
            count = badArray.length
        }
        
    }

    return count
    
}

const badDataArray = [1,2,3,-5,-6,-4,10,-20]
console.log("The number of bad element is:",findingBadData(badDataArray))

//23. fun task:// a function has 3 parameter singaraPrice, samosaPrice, jilapiPrice,
// where 1 singaraPrice = 10, 1 samosaPrice = 5, 1 jilapiPrice = 20 now find the total cost if you want 3 singara , 2 samosa , 4 jilapi from the shop

function expense(singara,samosa,jilapi){
    const singaraPrice = 10
    const samosaPrice = 5
    const jilapiPrice = 20
    const quantitySingara = singara * singaraPrice
    const quantitySamosa = samosa * samosaPrice
    const quantityJilapi = jilapi * jilapiPrice
    const totalCost = quantitySingara + quantitySamosa + quantityJilapi
    return totalCost
  }
  
  const singara = 3
  const samosa = 2
  const jilapi = 4
  console.log("Total Cost:",expense(singara,samosa,jilapi),"Taka")

//24.Convert your gems into diamond
// তোমাকে একটা function দেওয়া হবে called gemsToDiamond(). এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 
// ১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
// ২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
// ৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43
// [ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
// এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।
// Sample Input & Output:-
// Input: 1, 1, 1
// Output: 96
// Input: 20, 200, 50
// Output: 6970
// Input: 100, 5, 1
// Output: 303

function gemsToDiamond(first,second,third){
    if(typeof first !== "number" || typeof second !== "number" || typeof third !== "number" ){
        return "provide valid data type"
    }else if(first <0 || second <0 || third < 0){
        return "Number should be positive"
    }else if( first%1 !==0 || second%1 !==0  || second%1 !==0 ){
        return "Number should be integer"
    }

    else{
        const firstGems = 21
        const secondGems = 32
        const thirdGems = 43

        const firstGemsPower = first * firstGems
        const secondGemsPower = second * secondGems
        const thirdGemsPower = third * thirdGems
        const total = firstGemsPower + secondGemsPower + thirdGemsPower
        if(total >=2000){
            const cutOff = total -2000
            return cutOff
        }else{
          return total
        }

    }
}

const first = 20
const second =200
const third = 50

console.log(gemsToDiamond(first,second,third))

//25.আপনার কাছে একটি জাভাস্ক্রিপ্ট ফাংশন রয়েছে যার নাম হলো isValidPhotoName(photoName, imageExtensions)। এই ফাংশনটি দুটি প্যারামিটার গ্রহণ করে: photoName, যা একটি ছবির নাম প্রদর্শন করে, এবং imageExtensions Array, যা .jpg, .png, ইত্যাদি ছবির এক্সটেনশন গুলি ধারণ করে।আপনার কাজ হলো isValidPhotoName ফাংশনটি সম্পূর্ণ করা যাতে এই ফাংশনের মাধ্যমে পরীক্ষা করা যায় আপনি দেওয়া প্যারামিটার photoName সঠিক ছবির নাম কিনা তা। এই ফাংশনের কাজ হলো true রিটার্ন করা যদি photoName একটি বৈধ ছবির নামের শেষে বিদ্যমান ছবির এক্সটেনশন গুলির মধ্যে যেকোনটি শেষ হয়; অন্যথায়, ফাংশনটি false রিটার্ন করবে।
// .jpg .jpeg .png .gif .ico .JPEG

function isValidPhotoName(photoName,imageExtensions){

    if(typeof photoName !=="string" || !Array.isArray(imageExtensions)){
        return "provide valid photoname or image extension"
    }else{
        for(let i=0; i<imageExtensions.length; i++){
            if(photoName.toLowerCase().endsWith(imageExtensions[i].toLowerCase())){
                   return true
            }
    
            return false
          }
    }


      
}

const photoName = "safin.jpg"
const imageExtensions = [".jpg","jpeg",".png",".gif",".ico","JPEG"]
console.log(isValidPhotoName(photoName,imageExtensions))

//26. How to find the factorial with recursion:

function factorialRec(n){
    if(n ===0){
        return 1
    }

    const factorial = n * factorialRec(n-1)
    return factorial
}

console.log("The factorial is:",factorialRec(5))


// 27. /* function name sumOfN(). you will be provided a number n. you have to calculate the total of all numbers between 1 to n . use function recursion


// 3 => 3 + 2 + 1

// 3 + sumOfN(2)
// 3 + 2 + sumOfN(1)
// 3 + 2 + 1

function sumOfN(n){
     if(n ===1){
        return 1
    }else{
        let sum = n + sumOfN(n-1)
        return sum
    }
}

const n = 3;
console.log("The sum is:",sumOfN(n))

//28. Find the second largest number from an array

function secondLargest(sArr){
    if(sArr.length ===0){
        return "provide valid array"
    }
    let largest = -Infinity
    let second = - Infinity
    for(let i=0; i<sArr.length; i++){
        if(sArr[i]>largest){
            secondLargest = largest
            largest = sArr[i]
        }
    }

    return secondLargest
}

const sArr = [1,2,3,4,6,10,20,39]
const secondOutput = secondLargest(sArr)
console.log("The secondLargest number is:",secondLargest)

//29. Find the second smallest  number from an array

function secondSmallest(array){
      if(array.length ===0 || array.length < 2){
        return "there is no second smallest number in array"
      }
      let smallest = Infinity
      let secondSmallest = Infinity
      for(let i=0; i<array.length; i++){
         if(array[i] < smallest){
            secondSmallest = smallest
            smallest = array[i]
         }else if(array[i] < secondSmallest && array[i] !== smallest){
            secondSmallest = array[i]
         }
      }

      if(secondSmallest === Infinity){
        return "There is no second smallest  number"
      }else{
         return secondSmallest
      }
}

const smallestArray = [1,3,3,5,2,-1,-10,20,-90,30]

const smallestOutput = secondSmallest(smallestArray)
console.log("The second smallest number:",smallestOutput)


//30. how many vowels are in the string count them

function coutnVowel(arr,string){
    let iterable = Array.from(string)
    let count = 0

    for(let i=0; i<iterable.length; i++){
        if(arr.includes(iterable[i])){
            count++
        }
    }
    return count
}

const love = "i love BanglAdesH"

const vowelArray = ["a","o","u","e","i","A","O","U","","I"]

console.log("Total number vowel is:",coutnVowel(vowelArray,love))

//31. find how many consonant in the string

function consonant(arr,string){

    if(!Array.isArray(arr) || typeof string !=="string"){
        return "Please provide valid array or string"
    }

    let convert = Array.from(string)
    let count = 0
    for(let i=0; i<convert.length; i++){
        if(arr.includes(convert[i]) === false && convert[i] !== " "){
            count++
        }
    }

    return count
}

const blahBlah = "i want to become a full stack developer"
const arrayOfvowel =["a","o","u","e","i","A","O","U","I"]

console.log("Number of consonant is:",consonant(arrayOfvowel,blahBlah))

//32. Find the length of the longest word in a string.

function longest(string){
   const newArr = string.split(" ")
   let longestStr = newArr[0]
   for(let i=0; i<newArr.length; i++){
     if(newArr[i].length > longestStr.length){
        longestStr = newArr[i]
     }
   }
   return longestStr
}

const longestString = "i love bangladesh argentina unitedstateofamerica "
console.log("Longest word is:",longest(longestString))

//33. Find the length of the smallest word in a string.

function smallestWord(string){
   const words = string.split(" ")
   let smallest = words[0]
   for(let word of words){
      if(word.length < smallest.length){
        smallest = word
      }
   }
   return smallest
}

const wordSmallest = "mahi safin nur al rahman hrs"
console.log("Smallest word is:",smallestWord(wordSmallest))