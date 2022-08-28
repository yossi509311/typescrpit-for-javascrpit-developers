export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Ham',
  age: 43,
};

me.age++;

console.log({ me });

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Shigeru',
  age: 40,
};

// friend.age++;

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type MyReadonlyProfile = MyReadonly<Profile>;
