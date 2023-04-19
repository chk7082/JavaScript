function add(num1, num2) {
  return num1 + num2
}

console.log(add(2, 7))


const sub = function (num1 = 7, num2 = 3) {
  return num1 - num2
}

console.log(sub())


const noArgs = function () {
  return 0
}

noArgs(1, 2, 3)


const twoArgs = function (arg1, arg2) {
  return [arg1, arg2]
}

twoArgs(1, 2, 3)


const threeArgs = function (arg1, arg2, arg3) {
  return [arg1, arg2, arg3]
}

threeArgs()
threeArgs(1)
threeArgs(2, 3)


let parts = ['어깨', '무릎']
let lyrics = ['머리', ...parts, '발']
console.log(lyrics)



const restOpr = function (...restArgs){
  return restArgs
}

restOpr(1, 2,)


const sum = function (args) {}
function sub(args) {}

console.log(typeof sum)
console.log(typeof sub)


sum(2, 7)
function sum (num1, num2) {
  return num1 + num2
}

sub(7, 2)
const sub = function (num1, num2) {
  return num1 - num2
}


const myObj = {
  numbers: [1],
  myFunc() {
    console.log(this)
    console.log(this.numbers)
    this.numbers.forEach(function (num) {
      console.log(num)
      console.log(this)
    })
  }
}

myObj.myFunc()


const myObj = {
  numbers: [1],
  myFunc() {
    console.log(this)
    console.log(this.numbers)
    this.numbers.forEach((num) => {
      console.log(num)
      console.log(this)
      console.log(this.numbers)
    })
  }
}

myObj.myFunc()


let x = 1

function first() {
  let x = 10
  second()
}

function second() {
  console.log(x)
}

first()
second()


const numbers = [1, 2, 3, 4, 5]
numbers.reverse()
console.log(numbers)


const numbers = [1, 2, 3, 4, 5]
numbers.push(100)
console.log(numbers)

popped = console.log(numbers.pop())
console.log(numbers)
console.log(popped)


const numbers = [1, 2, 3, 4, 5]
console.log(numbers.includes(1))
console.log(numbers.includes(100))


const numbers = [1, 2, 3, 4, 5]
console.log(numbers.indexOf(3))
console.log(numbers.indexOf(100))



const numbers = [1, 2, 3]
numbers.forEach(function (num) {
  console.log(num ** 2)
})


const callBackFunction = function (num) {
  console.log(num ** 2)
}

const numbers = [1, 2, 3]
numbers.forEach(callBackFunction)


const numbers = [1, 2, 3]
const doubleNumbers = numbers.map((number) => {
  return number * 2
})
console.log(doubleNumbers)

const numbers = [1, 2, 3, 4, 5, 6]
const odd_numbers = numbers.filter((num) => {
  return num % 2
})
console.log(odd_numbers)


const products = [
  {name: 'cucumber', type: 'vegetable'},
  {name: 'banana', type: 'fruit'},
  {name: 'carrot', type: 'vegetable'},
  {name: 'apple', type: 'fruit'},
]

const fruitFilter = function (product) {
  return product.type === 'fruit'
}

const fruits = products.filter(fruitFilter)
console.log(fruits)


const tests = [90, 90, 80, 77]
const sum = tests.reduce(function (total, x) {
  return total + x
}, 0)
console.log(sum)


const avengers = [
  {name: 'Tony Stark', age: 45},
  {name: 'Steve Rogers', age: 32},
  {name: 'Thor', age: 40},
]

const avenger = avengers.find(function (avenger) {
  return avenger.name == 'Tony Stark'
})

console.log(avenger)


const arr = [1, 2, 3, 4, 5]

const result = arr.some((elem) => {
  return elem % 2 === 0
})
console.log(result)

const arr = [1, 2, 3, 4, 5]

const result = arr.every((elem) => {
  return elem % 2 === 0
})
console.log(result)


const person = {
  name: 'Viktor',
  age: 30,
  greeting: function() {
    console.log(`Hello, my name is ${this.name}.`)
  }
};

person.greeting();


function Member(name, age, sId) {
  this.name = name
  this.age = age
  this.sId = sId
}

const member3 = new Member('issac', 21, 2022654321)
console.log(member3)


const books = ['Learning JavaScript', 'Learning Python']
const magazines = ['Vogue', 'Science']

const bookShop = {
  books,
  magazines,
}


const obj = {
  greeting() {
    console.log('Hi!')
  }
}

obj.greeting()


const key = 'country'
const value = ['한국', '미국', '일본', '중국']

const myObj = {
  [key]: value,
}

console.log(myObj)
console.log(myObj.country)


const key = '나라'
const value = ['한국', '미국', '일본', '중국']

const myObj = {
  [key]: value,
}

console.log(myObj)
console.log(myObj.나라)


const userInformation = {
  name: 'ssafy kim',
  userId: 'ssafyStudent1234',
  email: 'ssafy@ssafy.com',
}

const {name} = userInformation
const {userId, email} = userInformation

console.log(name)
console.log(userId)
console.log(email)


const obj = {b:2, c:3, d:4}
const newObj = {a:1, ...obj, e:5}

console.log(newObj)


const jsObject = {
  coffee: 'Americano',
  iceCream: 'Cookie and cream',
}

const objToJson = JSON.stringify(jsObject)

console.log(objToJson)
console.log(typeof objToJson)

const jsonToObj = JSON.parse(objToJson)

console.log(jsonToObj)
console.log(typeof jsonToObj)



Object.getOwnPropertyDescriptors([1, 2, 3])


let numOfRows = 5
for (let i=0; i<numOfRows; i++){
  console.log(' '.repeat(numOfRows-1-i) + '*'.repeat(2*i+1))
}