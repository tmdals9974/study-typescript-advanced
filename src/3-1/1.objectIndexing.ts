import { Equal, Expect } from "../helper";

export const fakeDataDefaults = {
  foo: "bar",
  bar: 123,
  baz: true,
};

type fakeDataType = typeof fakeDataDefaults;

//object indexing을 이용하여 특정 필드의 타입을 받아올 수 있음.
export type FooType = fakeDataType["foo"];
export type BarType = fakeDataType["bar"];
export type BazType = fakeDataType["baz"];

type tests = [Expect<Equal<FooType, string>>, Expect<Equal<BarType, number>>, Expect<Equal<BazType, boolean>>];
