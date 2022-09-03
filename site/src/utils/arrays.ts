const range = (a: number, b: number): number[] =>
  Array.from({ length: b - a + 1 }, (_, k) => a + k);

export { range };
