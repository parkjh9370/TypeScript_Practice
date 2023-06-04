{
  /**
   * Javascript
   * Primitive : number, string, boolean, bigint, symbol, null, undefined
   * Object : function, array...
   */

  // number
  const num: number = 123;

  // string
  const str: string = "hello";

  //boolean
  const boal: boolean = true;

  // undefined
  //   let name: undefined;
  //   name = 'hello';
  let age: number | undefined;
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null;
  //   person = null;
  //   person = 1;
  let person2: string | null;

  // unknown : 지양해야 할 타입
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any : 지양해야 할 타입
  let anything: any = 0;
  anything = "hello";

  // void : 아무런 값도 리턴하지 않는 것, 생략 가능
  function print(): void {
    console.log("hello");
    return;
  }

  // never : 아무런 것도 리턴하지 않는 것, 에러 핸들링할 때 주로 사용 됨.
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
  }

  // object : 지양되야 할 타입
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "jaehyeon" });
  acceptSomeObject({ animal: "dog" });
}
