import {Equal, Expect } from "../helper";

interface Values {
    email: string;
    firstName: string;
    lastName: string;
}

// type ValuesAsUnionOfTuples = unknown;
type ValuesAsUnionOfTuples = {
  [K in keyof Values]: [K, Values[K]]
}[keyof Values];

// type Tuple = ["email", string] | ["firstName", string] | ["lastName", string];
// const a:Tuple = ["email", "tmdals9974@naver.com"];

type tests = [
    Expect<
        Equal<
            ValuesAsUnionOfTuples,
            ["email", string] | ["firstName", string] | ["lastName", string]
        >
    >
];
