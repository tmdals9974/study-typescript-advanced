import {Equal, Expect} from "../helper";

type Route =
    | {
    route: "/";
    search: {
        page: string;
        perPage: string;
    };
}
    | { route: "/about"; search: {} }
    | { route: "/admin"; search: {} }
    | { route: "/admin/users"; search: {} };

// type RoutesObject = unknown;
// type RoutesObject = { //내 풀이, 결과는 같음
//   [R in Route["route"]]: Extract<Route, { route: R }>["search"]
// };
type RoutesObject = { //정답
  [R in Route as R['route']]: R["search"];
}

type tests = [
    Expect<
        Equal<
            RoutesObject,
            {
                "/": {
                    page: string;
                    perPage: string;
                };
                "/about": {};
                "/admin": {};
                "/admin/users": {};
            }
        >
    >,
];
