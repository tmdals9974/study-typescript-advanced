import { Equal, Expect } from "../helper";

// export const inferItemLiteral = <T>(t: T) => {
//   return {
//     output: t,
//   };
// };
export const inferItemLiteral = <T extends string | number>(t: T) => {
  return {
    output: t,
  };
};

const result1 = inferItemLiteral("a"); // 타입제한을 하지 않을 경우 output: string으로 추론되나, 타입제한을 할 경우 output: "a"로 추론됨.
const result2 = inferItemLiteral(123);

type tests = [Expect<Equal<typeof result1, { output: "a" }>>, Expect<Equal<typeof result2, { output: 123 }>>];

// @ts-expect-error
const error1 = inferItemLiteral({
  a: 1,
});

// @ts-expect-error
const error2 = inferItemLiteral([1, 2]);
