export {};

const nextYearSalary = (currentSarary: number, rate: number = 1.1) => {
  return currentSarary * rate;
};

console.log(nextYearSalary(1000, 1.05));
console.log(nextYearSalary(1000));
