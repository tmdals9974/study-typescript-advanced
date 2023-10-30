import { expect, it } from "vitest";
import { Equal, Expect } from "../helper";

// function youSayGoodbyeISayHello(greeting: unknown) {
//   return greeting === "goodbye" ? "hello" : "goodbye";
// }

type GreetingType<TGreeting> = TGreeting extends "goodbye" ? "hello" : "goodbye";
function youSayGoodbyeISayHello<TArg extends "hello" | "goodbye">(greeting: TArg) {
  return (greeting === "goodbye" ? "hello" : "goodbye") as GreetingType<TArg>;
}

it("Should return goodbye when hello is passed in", () => {
  const result = youSayGoodbyeISayHello("hello");

  type test = [Expect<Equal<typeof result, "goodbye">>];

  expect(result).toEqual("goodbye");
});

it("Should return hello when goodbye is passed in", () => {
  const result = youSayGoodbyeISayHello("goodbye");

  type test = [Expect<Equal<typeof result, "hello">>];

  expect(result).toEqual("hello");
});
