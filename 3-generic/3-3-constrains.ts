{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log("full time!!");
    }
    workFulltime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log("part time!!");
    }
    workPartTime() {}
  }

  const jaehyeon = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  // console.log(jaehyeon);
  // console.log(bob);

  // Bad, 세부적인 타입을 인자로 전달받아 추상적인 타입으로 리턴하는 함수
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  // Generic + interface Employee 타입
  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const jaehyeoAfterPay = pay(jaehyeon);
  const bobAfterPay = pay(bob);

  // 객체를 전달받아 value값 리턴
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const obj = {
    name: "jaehyeon",
    age: 27,
  };

  console.log(getValue(obj, "name"));
  console.log(getValue(obj, "age"));
}
