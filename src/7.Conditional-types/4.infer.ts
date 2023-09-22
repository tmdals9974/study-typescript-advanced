import { Equal, Expect } from "../helper";

// type GetDataValue<T> = unknown;

//1. object가 넘어가면 안에서 data를 추출
//2. object가 아니라면 never 반환

// type GetDataValue<T, T2> = T extends {data: infer T2} ? T2 : never; //이렇게할 경우, 내부 형태에 대해서 한번 더 제네릭을 던져줘야 하는 단점이 있음.
type GetDataValue<T> = T extends { data: infer T2 } ? T2 : never;
//infer는 extends(조건문) 와 함께 사용되어야함.
//infer는 object 데이터에서 value타입에 대해 추론하게 함.

type tests = [
  Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
  Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
  Expect<Equal<GetDataValue<{ data: { name: "hello"; age: 20 } }>, { name: "hello"; age: 20 }>>,
  // Expect that if you pass in string, it
  // should return never
  Expect<Equal<GetDataValue<string>, never>>
];
