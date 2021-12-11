type stringOrNumber = string | number;
type userType = { name: string; age: number };
const userDetails = (id: stringOrNumber, user: userType) => {
  console.log(`user has ${id} and name is ${user.name} and age is ${user.age}`);
};
//type aliasing
