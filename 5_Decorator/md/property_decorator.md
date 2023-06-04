### 💡 Property Decorator

- 클래스의 property 선언 전에 정의
- property Descriptor가 인자로 제공되지 않지만, 해당 Property Descriptor 형식 객체를 반환해서 프로퍼티 설정을 바꿀 수 있다.
  (Object.defineProperty)

#### 📌 전달받는 인자

1. 클래스의 생성자 함수 또는 클래스의 prototype 객체
2. property 이름

```js
function propertyDecorator(
  target: any, // static 프로퍼티라면 클래스의 생성자 함수, 인스턴스 프로퍼티라면 클래스의 prototype 객체
  propertyName: string, // 프로퍼티 이름
): any {
	...
}
```

#### 📌 리턴값

- Property Descriptor
- void

---

#### 📌 예시 (메서드 변경)

```js
function SetDefaultValue(numberA: number, numberB: number) {
	return (target: any, propertyKey: string) => {
		const addNumber = numberA * numberB;
		let value = 0;

		// 데코레이터DataDefaultType의 num 이라는 프로퍼티의 객체 getter / setter 설정을 추가한다.
		Object.defineProperty(target, propertyKey, {
			get() {
				return value + addNumber; // 조회 할때는 더하기 시킴
			},
			set(newValue: any) {
				value = newValue - 30; // 설정 할때는 30을 뺌
			},
		});
	};
}

class DataDefaultType {
	@SetDefaultValue(10, 20)
	num: number = 0;
}

const test = new DataDefaultType();

test.num = 30; // => set(value: 30 - 30 = 0), get(value(0) + addNumber(200) = 200)
console.log(`num is 30, 결과 : ${test.num}`); // num is 30, 결과 : 200

test.num = 130; // => set(value: 130 - 30 = 100), get(value(100) + addNumber(200) = 300)
console.log(`num is 130, 결과 : ${test.num}`); // num is 130, 결과 : 300
```
