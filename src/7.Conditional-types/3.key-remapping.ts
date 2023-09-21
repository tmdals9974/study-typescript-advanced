import { Equal, Expect } from "../helper";

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

// type OnlyIdKeys<T> = unknown;
type OnlyIdKeys<T> = {
  //object에서 key에 ~~id/~~Id인 것들만 추출
  [K in keyof T as K extends `${string}${"id" | "Id"}` ? K : never]: T[K];
  //K in keyof T => 제네릭 타입의 모든 키를 추출
  // as K => 키를 변형하겠다
  // K extends `${string}${"id" | "Id"}` ? K : never => K가 ~~id/~~Id 라면 K를 반환, 그게 아니라면 never를 반환
  // object에서 never가 들어올 경우 필드가 제거됨
};

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
];
