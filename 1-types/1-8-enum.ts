{
  /**
   * Enum
   */

  // Javascript
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESSDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESSDAY: 2 });
  const dayofToday = DAYS_ENUM.MONDAY;

  // Typescript
  enum DAYS {
    Monday = 5,
    Tuesday,
    Wednessday,
    Thursday,
    Friday,
    SaturDay,
    Sunday,
  }

  console.log(DAYS.Thursday);
}
