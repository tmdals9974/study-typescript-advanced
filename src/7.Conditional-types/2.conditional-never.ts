import { Equal, Expect } from "../helper";

// type YouSayGoodbyeAndISayHello<T> = unknown;
type YouSayGoodbyeAndISayHello<T> = T extends "hello" | "goodbye" ? (T extends "hello" ? "goodbye" : "hello") : never;

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"alright pal">, never>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<1>, never>>
];
