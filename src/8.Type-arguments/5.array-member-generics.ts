import { Equal, Expect } from "../helper";

// const makeStatus = <TStatuses extends string[]>(statuses: TStatuses) => {
//   return statuses;
// };
const makeStatus = <TStatus extends string>(statuses: TStatus[]) => {
  return statuses;
};

const statuses = makeStatus(["INFO", "DEBUG", "ERROR", "WARNING"]);

type tests = [Expect<Equal<typeof statuses, Array<"INFO" | "DEBUG" | "ERROR" | "WARNING">>>];
