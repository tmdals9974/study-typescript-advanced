import {Equal, Expect} from "../helper";

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

//* Discriminated Object에서 구분자들만 추출할 수 있음.
// type EventType = unknown;
type EventType = Event["type"];

type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];