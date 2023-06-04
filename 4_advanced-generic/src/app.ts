// const names: string[] = [];
const names: Array<string> = ['map'];
// const names: Array<number> = [];
names[0].split(' ');

/**
 * Generic을 통해 Promise 결과 값에 대한 타입을 지정할 수 잇다.
 * 배열 및 Promise 함수의 결과 데이터 타입을 예측할 수 있어
 * 해당 결과값 마탕으로 메서드를 활용하는 것과 같이 프로그래밍이 수월해진다
 */
// Rromise<number> 불가
const promise: Promise<string> = new Promise((resolve) => {
	setTimeout(() => {
		resolve('This is done!');
	}, 2000);
});

promise.then((data) => {
	data.split(' ');
});

//---------//---------//---------//---------//---------

/**
 * 함수 Generic
 */

// 단순 타입 활용
function merge(objA: object, objB: object) {
	return Object.assign(objA, objB);
}

console.log(merge({ name: 'Max' }, { age: 30 }));
// { name: 'Max', age: 30 }

// 이 경우 Typescript는 내부 object의 타입을 결정할 수 없다
// 물론 이 경우 타입 assertion이나 Record 타입, interface를 활용하면 해결되긴 한다
const mergeObj = merge({ name: 'Max' }, { age: 30 });
// mergeObj.age;

//----------//----------//----------//----------//----------

// generic 할용
// 함수 input, output에 대한 결과 타입을 함수 호출시 동적으로 지정할 수 있게 해준다
function gMerge<T, U>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const mergeGobj = gMerge({ name: 'Max' }, { age: 30 });
mergeGobj.age;
mergeGobj.name;

//----------//----------//----------//----------//----------

function gMerge2<T, U>(obj1: T, obj2: U) {
	return Object.assign(obj1, obj2);
}

const mergeObj2 = gMerge2<
	{
		name: string;
	},
	{
		age: number;
	}
>({ name: 'bob' }, { age: 30 });
