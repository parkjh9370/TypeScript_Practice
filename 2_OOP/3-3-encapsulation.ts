{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public : 기본값 (외부에서 볼 수 있고, 접근 가능)
  // private : 외부에서 볼 수 없고, 접근 불가
  // protected : 상속 후 자식 클래스에서만 접근 할 수 있도록 설정

  class CoffeeMaker {
    // class Level (CoffeeMaker.BEANS_GRAMM_PER_SHOT)
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    // instance(object) Level (this로 접근)
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 생성자 함수
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee benas!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);

  class User {
    constructor(private firstName: string, private lastName: string) {}

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("invalid age");
      }
      this.internalAge = num;
    }
  }

  const user = new User("Steve", "Jobs");
  user.age = 6;
  console.log(user.age);
}
