import { Equal, Expect } from "../helper";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

// type GetParserResult<T> = unknown;
type GetParserResult<T> = T extends { parse: () => infer T1 }
  ? T1
  : T extends { extract: () => infer T2 }
  ? T2
  : T extends () => infer T3
  ? T3
  : never;

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>
];
