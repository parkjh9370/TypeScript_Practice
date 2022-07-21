{
  /**
   * Type Aliases : 타입을 미리 결정
   */
  type Text = string;
  const name: Text = "jaehyeon";
  const adress: Text = "korea";

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "jaehyeon",
    age: 31,
  };

  /**
   * String Literal Types : 값을 미리 결정
   */
  type Name = "name";
  let jaehyeonName: Name;
  jaehyeonName = "name";

  type Boal = true;
  const isCat: Boal = true;
}
