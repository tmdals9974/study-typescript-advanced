//? Discriminated Union: 구성요소를 구분하는 필드가 존재함
type A = { type: "a"; a: string } | { type: "b"; b: string } | { type: "c"; c: string; d: string };

//? 일반 Union
type B = "a" | "b" | "c";

//? enum, 값이 없을 경우 기본으로 0부터 값이 할당 됨
enum C {
  a,
  b,
  c,
}


//* =======================================================
//* Discriminated Union의 활용

interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Rectangle;

function area(shape: Shape): number {
  if (shape.kind === "square") {
    return shape.size * shape.size;
  } else {
    return shape.width * shape.width;
  }
}
