import { Expect, Equal } from "../helper";

function func(
  foo: string,
  obj: {
    bar: number;
    bas: boolean;
  }
): void {}

type FuncParameters = Parameters<typeof func>;
// FuncParameters는 배열이 아니라 튜플임 [foo:string, obj: { bar: number; bas: boolean }]
// 배열과 튜플의 차이: 길이가 정해져있음.     * 배열-string[], 튜플-[string, string]

type tests = [
  Expect<
    Equal<
      FuncParameters,
      [
        string,
        {
          bar: number;
          bas: boolean;
        }
      ]
    >
  >
];