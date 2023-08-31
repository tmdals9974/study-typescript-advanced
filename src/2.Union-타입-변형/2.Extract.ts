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


//* Extract를 이용하여 특정 조건에 해당하는 타입을 추출할 수 있음.
type ClickEvent = Extract<Event, { type: "click" }>; 

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
