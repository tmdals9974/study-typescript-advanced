import { Equal, Expect } from "../helper";

enum ColorEnum {
  Red,
  Green,
  Blue,
}

// ! Object 뒤에 as const 를 붙이게 되면 Color의 property를 수정할 수 없고 읽기만 가능하다. 더 이상 string으로 추론되는 것이 아니라 String literal type으로 추론이 된다.
// * 그렇다면 이것은 언제 유용할까? 다른 언어에 존재하는 기능인 enum처럼 값이 항상 고정된 값을 갖는 case에서 사용할 수 있는데 아래의 예제에서, color 함수에서 넘어오는 인자의 타입을 특정 String literal type, "red", "blue", "green" 으로 고정시킬 수 있고 실수로 다른 string을 입력했을 때 에러가 발생한다.

const Color = {
  Red: "Red",
  Green: "Green",
  Blue: "Blue",
} as const;

type Red = (typeof Color)["Red"];
type Green = (typeof Color)["Green"];
type Blue = (typeof Color)["Blue"];

type tests = [Expect<Equal<Red, "Red">>, Expect<Equal<Green, "Green">>, Expect<Equal<Blue, "Blue">>];

//* =========================
//* as Const와 enum의 차이

type ColorType = keyof typeof Color;

function color(c: ColorType) {
  // do something
}

function enumColor(c: ColorEnum) {
  // do something
}

color(Color.Red); //키와 값이 동일할 때만 가능.
color("Red");
//enumColor("Red") // 💣 error!!

type RedAndBlue = typeof Color["Red" | "Blue"];

/**
 ** https://wiki.after-camp.com/Typescript/enum+vs+as+const
 ** as const와 enum의 사용 목적은 값의 범위를 좁혀서 제한된 값들만 입력하거나 출력하는 것에 있다.
 ** 예를 들어 위의 예제에서 ColorType, ColorEnum에 입력할 수 있는 값은 3개로 제한되어있다.
 ** 그런데 문법적 기능은 비슷하지만 미묘하게 다른 부분이 있는데, enumColor 의 경우 String literal type을 넣게 되면 에러가 발생하고 반드시 ColorEnum.Red 같은 값을 넘겨야 한다.
 ** 프로그래머마다 각자 선호하는 문법이 있지만 되도록 as const를 사용하는 이유를 든다면 다음의 예제에서 명확할 것이다.
 ** hasAccess 함수에 어떤 number 값을 넣어도 타입 에러가 발생하지 않기 때문에 이런 경우엔 잠재적인 버그를 갖게 된다.
 **/

enum Roles {
  Admin,
  Writer,
  Reader,
}
declare function hasAccess(role: Roles): void;

// hasAccess(10);
// ! 이후 typescript 버전에선 고쳐진듯함. 결론!! as const와 enum은 string literal을 쓸 것이냐, enum의 property를 쓸 것이냐 라고 봐도 무방할 듯