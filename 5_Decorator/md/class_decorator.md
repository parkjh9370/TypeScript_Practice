### 💡 Class Decorator

- 클래스 선언 직전에 선언되는 데코레이터로 Class의 `Constructor`를 읽거나 수정할 수 있다
- 타입스크립트가 constructor 인자를 자동으로 전달하기 때문에 생성자를 명시적으로 전달하지 않아도 된다
- `class` or `void` 타입을 return

---

#### 📌 예시 (메서드 변경)

```js
// 데코레이터 팩토리
function classDecorator(param1: string, param2: string) {
  // 데코레이터 함수
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      new_prop = param1;
      first_prop = param2;
    };
  };
}

@classDecorator('안녕하세요', '반갑습니다')
class Test {
  first_prop: string;

  constructor(m: string) {
    this.first_prop = m;
  }
}

let t = new Test('world');
console.log(t);
```

결과값

```js
Test {
  first_prop: '반갑습니다',
  new_prop: '안녕하세요'
}
```
