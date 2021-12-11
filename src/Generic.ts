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
