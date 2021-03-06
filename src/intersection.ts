export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Battery1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const OchiaiHiromitsu: Battery1 = {
  battingAverage: 0.367,
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

type TwoWayPlayer = Pitcher1 & Battery1;
const OtaniShohei: TwoWayPlayer = {
  throwingSpeed: 156,
  battingAverage: 0.286,
};
