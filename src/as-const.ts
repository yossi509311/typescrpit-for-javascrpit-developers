export {};

let name = 'Ham';
name = 'foo';

let nickname = 'Ham' as const;
nickname = 'Ham';

let profile = {
  name: 'Atsushi',
  height: 128,
} as const;

// profile.name = 'Ham';
// profile.height = 170;
