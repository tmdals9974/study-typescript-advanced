import { Equal, Expect } from "../helper";

export const Color = {
  Red: "red",
  Green: "green",
  Blue: "blue",
} as const;

// 아래와 같이 코드를 짤 경우 확장 불가
// type ColorValues = typeof Color["Red" | "Blue" | "Green"]; 
type ColorValues = (typeof Color)[keyof typeof Color];

type tests = [Expect<Equal<ColorValues, "red" | "blue" | "green">>];
