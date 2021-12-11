//in typescript function itself a type

const helloFunct = (a: string, b: string, c: string = "true") => {
  console.log(c);

  console.log(`hello ${a} ${b}`); //if any function is log it will return void

  //if we return it value will be undefined
  return a + b;
};
helloFunct("nabil", "alshad", "false");
