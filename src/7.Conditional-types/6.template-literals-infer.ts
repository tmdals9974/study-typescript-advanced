import { Equal, Expect } from "../helper";

type Names = ["Junsuk Park", "Bill Evans", "Stan Getz"];

// type GetSurname<T> = unknown;
type GetSurname<T> = T extends `${infer First} ${infer Last}` ? Last : never;

type tests = [
  Expect<Equal<GetSurname<Names[0]>, "Park">>,
  Expect<Equal<GetSurname<Names[1]>, "Evans">>,
  Expect<Equal<GetSurname<Names[2]>, "Getz">>
];
