### 💡 Parameter Decorator

- 생성자 또는 매개 변수에 선언되어 적용
- 매개변수 왼족 옆에 명시

#### 📌 전달받는 인자

1. 클래스의 생성자 함수 또는 클래스의 prototype 객체
2. method 이름
3. method 파라미터 목록의 index

```js
function parameterDecorator(
  target: any, // static 메서드의 파라미터 데코레이터라면 클래스의 생성자 함수, 인스턴스의 메서드라면 prototype 객체
  methodName: string, // 매개변수가 들어있는 메서드의 이름
  paramIndex: number // 매개변수의 순서 인덱스
) {
    ...
}
```

---

#### 📌 예시 (메서드 변경)

```js
import { BadRequestException } from '@nestjs/common';

// 매개 변수 데코레이터 함수
// target 클래스의 validators 속성에 유효성을 검사하는 함수 할당
function MinLength(min: number) {
  return function(target: any, propertyKey: string, parameterIndex: number) {
    target.validators = {
      minLength: function(args: string[]) {
        return args[parameterIndex].length >= min;
      }
    }
  }
}

// 메서드 데코레이터 함수
function Validate(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;

  // 설명자의 value에 유효성 검사 로직이 추가된 함수를 할당
  descriptor.value = function(...args) {
    // target에 저장해둔 validators를 모두 수행한다. 이때 원래 메서드에 전달된 인수들을 각 validator에 전달한다.
    Object.keys(target.validators).forEach(key => {
      if (!target.validators[key](args)) {
        throw new BadRequestException();
      }
    })
    // 기존 함수를 실행
    method.apply(this, args);
  }
}

class User {
  private name: string;

  @Validator
  setName(@MinLength(3) name: string) {
    this.name = name;
  }
}

const t = new User();
t.setName('hello');
console.log('---------------');
t.setName('hi');	// BadRequestException
```
