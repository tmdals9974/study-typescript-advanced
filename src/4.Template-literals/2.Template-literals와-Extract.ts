import { Equal, Expect } from "../helper";

type Routes = "/users" | "/users/:id" | "/products" | "/products/:id";

//Extract를 이용하여 원하는 조건의 타입만 추출할 수 있음
type DynamicRoutes = Extract<Routes, `/${string}/:id`>;

type tests = [Expect<Equal<DynamicRoutes, "/users/:id" | "/products/:id">>];
