# Section 1. 함수 타입 변형

## 1강 - 함수 리턴 타입, 파라미터, Awaited의 활용

- 함수 리턴타입 추론 방법 강의 (Promise 반환 시 Awaited 활용 포함)
- 함수 파라미터타입 추론 방법 강의

# Section 2. Union, Discriminated Union 타입 변형

## 1강 - Union 소개

- Union, Discriminated Union, enum에 대한 차이점 소개

## 2강 - Extract 소개

- Extract 타입을 이용하여 Discriminated Union에서 원하는 type만 추출하는 방법 소개

## 3강 - Exclude 소개

- Exclude 타입을 이용하여 Discriminated Union에서 특정 type을 제거하고 추출하는 방법 소개

# Section 3. Object Indexing

## 1강 - Object indexing 소개

- Object indexing이 무엇인지 소개

## 2강 - Discriminated Object Indexing 소개

- Discriminated Object에서 구분자들만 추출할 수 있는 방법 소개

## 3강 - enum을 대체하는 as const의 활용

- enum과 유사한 역할을 하는 as const를 소개 및 활용방안 안내

## 4강 - Object value들의 타입을 Union으로 변형

- as const로 만들어진 object values를 union으로 변형하는 방법 소개

## 5강 - Array indexing

- Array 객체를 일부/전체 indexing 하는 방법 소개

# Section 4. Template literals

## 1강 - Template literals 기초

- Template literals 기초 설명

## 2강 - Template literals와 Extract

- Extract를 이용하여 Template literals에서 원하는 값만 추출하기

## 3강 - Combination (조합)

- Template literals들을 조합하는 방법

## 4강 - 패턴을 갖고 있는 Object를 손쉽게 만들기

- object의 key가 특정한 패턴을 가지고 있을 경우 손쉽게 만들 수 있는 방법 안내

## 5강 - Uppercase 유틸리티 타입 소개

- Uppercase 유틸리티 타입 소개

# Section 5. Object 타입 변형

## 1강 - Union을 Object로 변형

- Union을 Object로 변형하는 방법 소개

## 2강 - Object value의 타입 변형

- interface를 Object로 변형하는 방법 소개

## 3강 - Object key의 타입 변형

- interface를 Object로 변형하는 방법 소개
- as를 이용하여 keyof를 변형하는 방법 소개
- Capitalize 유틸리티 타입을 이용하여 앞글자만 대문자로 변경하는 방법 소개

## 4강 - Object union type을 object로 타입 변형

- Discriminated Union을 Object로 타입 변형하는 방법 소개

## 5강 - Object를 Tuple로 변형

- Object를 Tuple로 변형하는 방법 소개

## 6강 - Object key, value를 string union으로 변형

- Object를 template literals로 변형하는 방법 소개

## 7강 - Object union을 string union으로 변형

- Discriminated Union을 String Union으로 변형하는 방법 소개
- **중요한 강의임. Section 5에서 주료 사용된 문법들을 설명해줌**

# Section 6. 제네릭 기본

## 1강 - 제네릭 기초

- 제네릭 소개

## 2강 - 제네릭 타입 제한

- 제네릭 타입 제한 방법 소개 (T extends string)

## 3강 - 다수의 타입인자

- 다수의 제네릭을 받는 방법 소개
-

## 4강 - 다수의 타입인자 2

- 다수의 제네릭 선언 방법 소개

## 5강 - 기본 타입 인자

- 제네릭 디폴트값 설정 방법 소개

## 6강 - 제네릭 클래스

- 클래스에서 제네릭 사용 방법 소개

## 7강 - 타입스페이스에서의 rest parameter

- 제네릭을 함수로 제한, rest parameter 사용 방법 소개

## 8강 - 타입스페이스에서의 empty object

- null과 undefined가 들어오지 못하는 제네릭 선언 방법 소개 (type Maybe<T extends {}> = T;)
- 타입 스페이스에서 {} 가 들어올 떄에는, null과 undefined를 제외한 모든 타입이 들어올 수 있다는 의미

## 9강 - NonEmptyArray 타입 만들기

- length가 1 이상인 Array 타입 만드는 방법 소개

## 10강 - Reduce 타입 파라미터

- reduce에 type을 넘겨주어서 반환값 추론이 가능하게 할 수 있음 소개

## 11강 - Fetch 함수 타입

- fetch 함수를 사용 할 때, 타입 추론이 되게 하는 방법 소개

# Section 7. Conditional Types

## 1. 타입스페이스에서의 조건 타입 소개

- 타입스페이스에서 조건문 거는 방법 안내
