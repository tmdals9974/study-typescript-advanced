import { expect, it } from "vitest";
import { Equal, Expect } from "../helper";

// const typedObjectKeys = (obj: unknown) => {
//   return Object.keys(obj);
// };
const typedObjectKeys = <TKey extends string>(obj: Record<TKey, any>) => {
  return Object.keys(obj) as Array<TKey>; //Array<TKey>를 쓰지 않는다면 string[] 이 반환됨.
};

it("Should return the keys of the object", () => {
  const result1 = typedObjectKeys({
    a: 1,
    b: 2,
  });

  expect(result1).toEqual(["a", "b"]);

  type test = Expect<Equal<typeof result1, Array<"a" | "b">>>;
});
