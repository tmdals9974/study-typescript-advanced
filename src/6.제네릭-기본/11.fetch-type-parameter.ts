import { expect, it } from "vitest";
import { Equal, Expect } from "../helper";

//fetch 함수에 타입을 넘기는 것이 아니라, 함수로 한번더 래핑해서 타입반환
const fetchData = async <T>(url: string) => {
  const data: T = await fetch(url).then((response) => response.json());
  return data;
};

it("Should fetch data from an API", async () => {
  const data = await fetchData<{ name: string }>("https://swapi.dev/api/people/1");
  expect(data.name).toEqual("Luke Skywalker");

  type tests = [Expect<Equal<typeof data, { name: string }>>];
});
