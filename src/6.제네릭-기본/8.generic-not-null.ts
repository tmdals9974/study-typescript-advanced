export type Maybe<T extends {}> = T;
// ! 타입 스페이스에서 {} 가 들어올 떄에는, null과 undefined를 제외한 모든 타입이 들어올 수 있다는 의미.

type tests = [
    // @ts-expect-error
    Maybe<null>,
    // @ts-expect-error
    Maybe<undefined>,

    Maybe<string>,
    Maybe<false>,
    Maybe<0>,
    Maybe<"">,
];
