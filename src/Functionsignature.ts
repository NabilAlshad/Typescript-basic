let add: (x: number, y: number, z: string) => number;
//once function is declared it doesnot takes any parameter
add = (a: number, b: number, c: string) => {
  if (c === "add") {
    return a + b;
  } else {
    return a - b;
  }
};

console.log(add(5, 6, "minus"));
