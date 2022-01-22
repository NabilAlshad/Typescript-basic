interface lengthy {
  length: number;
}

function countAndPrint<T extends lengthy>(element: T): void {
  //   let txt="we got no value";
  if (element.length === 1) {
    console.log("this is length is o");
  } else if (element.length > 1) {
    console.log(`we got ${element.length} elements `);
  }
}

countAndPrint("hello world");
