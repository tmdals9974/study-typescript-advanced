import {Equal, Expect} from "../helper";

type Fruit =
    | {
    name: "apple";
    color: "red";
}
    | {
    name: "banana";
    color: "yellow";
}
    | {
    name: "orange";
    color: "orange";
};

// type TransformedFruit = unknown
type TransformedFruit = {
    [F in Fruit as F["name"]]: `${F["name"]}:${F["color"]}`;
}[Fruit['name']]

type tests = [
    Expect<
        Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
    >,
];
