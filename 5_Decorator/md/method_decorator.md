### 💡 Method Decorator

- class 내부 메서드 선언전에 사용됨

#### 📌 전달받는 인자

1. 클래스의 생성자 함수 또는 클래스의 prototype 객체
2. method 이름
3. method의 property descriptor

```js
function methodDecorator(
	target: any, // static 메서드라면 클래스의 생성자 함수, 인스턴스의 메서드라면 클래스의 prototype 객체
	propertyKey: string, // 메서드 이름
	descriptor: PropertyDescriptor // 메서드의 Property Descriptor
) {
	...
}
```

```js
interface PropertyDescriptor {
 configurable?: boolean;	// 속성의 정의를 수정할 수 있는지 여부
 enumerable?: boolean;	// 열거형인지 여부
 value?: any;				// 속성 값
 writable?: boolean;		// 수정 가능 여부
 get?(): any;				// getter
 set?(v: any): void;		// setter
}
```

---

사용 예시 (메서드 변경)

```js
function methodDecorator() {
	return function (
		target: any,
		property: string,
		descriptor: PropertyDescriptor,
	) {
		// descriptor.value는 test() 함수 자체를 가리킨다. 이 함수를 변수에 할당
		let originMethod = descriptor.value;

		// 그리고 기존의 test() 함수의 내용을 다음과 같이 바꾼다.
		descriptor.value = function (...args: any) {
			console.log('before');
			originMethod.apply(this, args); // 위에서 변수에 피신한 함수를 call, apply, bind 를 통해 호출
			console.log('after');
		};
	};
}

class Test {
	property = 'property';
	hello: string;

	constructor(m: string) {
		this.hello = m;
	}

	@methodDecorator()
	test() {
		console.log('test');
	}
}

let test = new Test('world');
test.test();
```
