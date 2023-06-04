### 💡 Accessor Decorator

- Class 접근자(get, set) 앞에 선언
- 접근자 속성을 정의하거나 수정

#### 📌 전달받는 인자

1. 클래스의 생성자 함수 또는 클래스의 prototype 객체
2. method 이름
3. get, set method의 property descriptor

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

#### 📌 리턴값

- Property Descriptor
- void

---

#### 📌 예시

```js
function Enumerable(enumerable: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = enumerable;
  };
}

class Person {
  name: string;

  constructor(private name: string) {}

  @Enumberable(true)
  get getName() {
    return this.name;
  }

  @Enumberable(false)
  set setName() {
    this.name = name;
  }
}

const person = new Person('hello');
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

결과값
-> getter의 경우 enumerable(: true)인 메서드이기 때문에 class 내부 값을 반환하지만 setter는 enurable하지 않기 때문에 값을 반환하지 못한다

```js
name: hello;
getName: hello;
```
