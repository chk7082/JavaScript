// 1번
const nums = [1,2,3,4,5,6,7,8]

// for 문에서는 증감조건을 처리할때 정한 변수를 재할당하면서 진행하는데
// 이를 처음에 재할당할 수 없는 const로 설정해버려서 발생한 문제이다
// 이를 let으로 바꿔주자
console.log('1번 출력 결과')
for (let i = 0; i < nums.length; i++) {
  console.log('nums[' + i + ']: ' + nums[i])
}
console.log()
// for (const i = 0; i < nums.length; i++) {
//                                     ^

// TypeError: Assignment to constant variable.

// 2번
console.log('2번 출력 결과')
for (num of nums) {
  // for in은 key에 해당하는 값을 문자열로 받아오기 때문에 발생하는 문제이다
  // iterable한 배열의 실제 원소들에 순차적으로 접근하고 싶다면 for of를 사용하자
  console.log(num, typeof num)
  // 출력 결과
  // 0 string
  // 1 string
  // 2 string
  // 3 string
  // 4 string
  // 5 string
  // 6 string
  // 7 string
}
