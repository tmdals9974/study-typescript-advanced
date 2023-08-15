import { Expect, Equal } from "../helper";

//! 일반함수 리턴타입 추론
const myFunc = (): string => {
  return "hello";
};

type MyFuncReturn = ReturnType<typeof myFunc>; //myFunc의 리턴타입 유추 가능
type tests = [Expect<Equal<MyFuncReturn, string>>];

//* =======================================================================================

//! Promise함수 리턴타입 추론
const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

type ReturnValue = ReturnType<typeof getUser>;
//Promise<{id:string; name:string; email:string;}>으로 추론됨. Promise가 포함되어있지 않은 타입으로 추론하는 방법은 아래와 같다.

type ReturnValue2 = Awaited<ReturnType<typeof getUser>>;
//{id:string; name:string; email:string;} 으로 추론됨.
type tests2 = [Expect<Equal<ReturnValue2, { id: string; name: string; email: string }>>];
