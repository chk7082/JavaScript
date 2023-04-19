console.log('안녕하세요. 반가워요.')


// func1();
// hois()

// // 함수 선언식 사용시 얘가 호이스팅이 되어서 위로 올라감
// function func1(){
//   console.log('Hello');
// }

// // 근데 이렇게 묶으면 얘는 또 호이스팅이 안됨
// var hois = function func1(){
//   console.log('Hello');
// }

const numbers = [1, 3, 5, 8]

// function temp(num) {
//   console.log(`원소 : ${num} !`)
// }

// numbers.forEach(temp)

// console.log(numbers)

const initialValue = 0

function customSum(a, b){
  return a+b
}

const sumWithInitial = numbers.reduce(customSum, initialValue)

console.log(`summation : ${sumWithInitial}`)