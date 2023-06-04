{
  /**
   * Intersection Types : and(&)
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.score, person.work());
  }

  internWork({
    name: "jaehyeon",
    score: 1,
    employeeId: 123,
    work: () => {},
  });
}
