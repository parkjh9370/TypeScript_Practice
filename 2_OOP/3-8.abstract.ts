{
  // Abstraction
  // 외부에서 class를 봤을 때 인터페이스가 너무 복잡해 보일 때
  // 필요한 인터페이스만 노출시켜 class 사용에 편의성을 제공
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // static makeMachine(coffeeBeans: number): CoffeeMachine {
    //   return new CoffeeMachine(coffeeBeans);
    // }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine...");
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log("heating up...");
    }

    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }
  // const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  // maker.fillCoffeeBeans(32)
  // maker.makeCoffee(2)

  //   const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  //   maker2.fillCoffeeBeans(32)
  //   maker2.makeCoffee(2)
  //   maker2.clean()

  class CaffeeLatteeMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk...🥛");
    }
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeeLatteeMachine(16, "111"),
    new SweetCoffeeMaker(16),
    new CaffeeLatteeMachine(16, "111"),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log("-------------------");
    machine.makeCoffee(1);
  });
}
