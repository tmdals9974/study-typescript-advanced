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


//* Discriminated Union에서 원하는 type만 추출하는 방법
type ClickEvent = Extract<Event, { type: "click" }>; 

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
