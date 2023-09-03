import {Equal, Expect } from "../helper";

interface Attributes {
    firstName: string;
    lastName: string;
    age: number;
}



// ! as를 이용하여 keyof를 변형할 수 있음
// ! Capitalize 유틸리티 타입을 이용하여 앞글자만 대문자로 변경 할 수 있음

// type AttributeGetters = unknown;
type AttributeGetters = {
  [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K];
}

type tests = [
    Expect<
        Equal<
            AttributeGetters,
            {
                getFirstName: () => string;
                getLastName: () => string;
                getAge: () => number;
            }
        >
    >
];
