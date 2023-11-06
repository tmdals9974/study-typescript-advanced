export type Expect<T extends true> = T;
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;

const pick = <TObj, TKey extends keyof TObj>(obj: TObj, picked: TKey[]) => {
  return picked.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {} as Pick<TObj, TKey>);
};

const result = pick(
  {
    a: 1,
    b: 2,
    c: 3,
  },
  ["a", "b"]
);
type test = Expect<Equal<typeof result, { a: number; b: number }>>;

pick(
  {
    a: 1,
    b: 2,
    c: 3,
  },
  [
    "a",
    "b",
    // @ts-expect-error
    "d",
  ]
);
