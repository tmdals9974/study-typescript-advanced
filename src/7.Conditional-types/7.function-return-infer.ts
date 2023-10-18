import { Equal, Expect } from "../helper";

const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json: { title: string } = await data.json();
  return {
    props: {
      json,
    },
  };
};

// type InferPropsFromServerSideFunction = unknown;
type InferPropsFromServerSideFunction<T> = T extends () => Promise<{ props: infer TData }> ? TData : never;

type tests = [Expect<Equal<InferPropsFromServerSideFunction<typeof getServerSideProps>, { json: { title: string } }>>];
