axios.get('https://api.example.com/data')
	.then(function (response) {
	console.log(response.data)
})

// 동기 (Synchronous)
// 동기란 프로그램이 작성된 순서대로 실행되는 것이다.

// 비동기 (Asynchronous)
// 비동기란 작업을 시작한 후, 결과를 기다리지 않고 다음 작업을 처리하는 것(병렬적 수행)이다
// 그리고 응답이 빨리 오는 작업부터 처리하는 방식