{
  //   // Javascript
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }

  //   // TypeScript
  //   function add(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }

  //   // Javascript
  //   function jsFetchNum(id) {
  //     // code...
  //     // code...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //   function fetchNum(id: string): Promise<number> {
  //     // code...
  //     // code...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  // Optional Parameter : ?,  해당 인자 전달 해도 되고 안해도 됨
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "Jobs");
  printName("jaehyeon", "Park");
  printName("jaehyeon");

  // Default Parameter
  function printMessage(message: string = "default meesage") {
    console.log(message);
  }
  printMessage();

  // Rest Parameter : 숫자 타입의 배열로 인자 받아오기
  function addNumbers(...numbers: number[]): number {
    console.log(numbers);
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3));
  console.log(addNumbers(1, 2, 3, 4));
}
