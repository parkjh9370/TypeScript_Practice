{
  /**
   * Type Assertions
   */

  function jsStringFunc(): any {
    return 2;
  }

  const result = jsStringFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  //   const wrong: any = 5;
  //   console.log((wrong as Array<number>).push(1));

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!;
  numbers.push(2); //

  const button = document.querySelector("class")!;
  button.nodeValue;
}
