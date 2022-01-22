//extends method
const addId = <
  T extends {
    name: string;
    id: number;
  }
>(
  obj: T
) => {
  const id = Math.floor(Math.random() * 1000);
  return { ...obj, id };
};

// let user = addId({
//   name: "john",
//   age: 30,
//   country: "United States",
// });
interface apiResponse<T> {
  name: string;
  age: number;
  data: T;
}

const response: apiResponse<String> = {
  name: "john",
  age: 30,
  data: "text",
};

const makeArr = <T>(x: T) => {
  return [x];
};
const n1 = makeArr(5);
const n2 = makeArr("hello");

//extends methods
const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + obj.lastName,
  };
};

const A1 = makeFullName({ firstName: "john", lastName: "hello", age: 5 });

//interaces generics

interface Tab<T> {
  position: number;
  id: number;
  data: T;
}

type tabNumber = Tab<number>;
type tabString = Tab<string>;

const userTab1: tabNumber = {
  position: 0,
  id: 1,
  data: 45,
};
const userString: tabString = {
  id: 2,
  position: 0,
  data: "hello",
};

//generic with constrains
