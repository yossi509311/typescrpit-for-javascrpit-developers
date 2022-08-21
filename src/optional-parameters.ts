export {};

let bmi: (height: number, weight: number, display?: boolean) => number = (
  height: number,
  weight: number,
  display?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (display) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(1.78, 86, true);
bmi(1.78, 86, false);
bmi(1.78, 86);
