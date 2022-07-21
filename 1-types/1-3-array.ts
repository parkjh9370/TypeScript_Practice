{
  // Array
  const fruits: string[] = ["tomato", "banana"];
  const scores: Array<number> = [1, 3, 4];

  function printArray(fruits: readonly string[]) {
    // fruits.push
    return fruits;
  }

  // Tuple -> interface, type alias, class
  // 서로 다른 타입의 데이터 담기
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
}
