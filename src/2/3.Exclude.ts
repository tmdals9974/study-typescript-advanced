import { Equal, Expect } from "../helper";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

//* Discriminated Union에서 특정 type을 제거하고 추출하는 방법
type NonKeyDownEvents = Exclude<Event, { type: "keydown" }>;

type tests = [
  Expect<Equal<NonKeyDownEvents, { type: "click"; event: MouseEvent } | { type: "focus"; event: FocusEvent }>>
];
