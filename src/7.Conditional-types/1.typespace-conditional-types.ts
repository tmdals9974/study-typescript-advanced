import { Equal, Expect } from "../helper";

// type YouSayGoodbyeAndISayHello = unknown;

// * extends 키워드로 조건문 가능
type YouSayGoodbyeAndISayHello<T> = T extends "hello" ? "goodbye" : "hello";

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>
];
