interface rectangleOptions {
  width: number;
  height: number;
}

function drawRectangle(options: rectangleOptions) {
  let width = options.width;
  let height = options.height;
}

//pass by refernce
let optionsthre = {
  width: 30,
  height: 30,
  length: 30,
};
drawRectangle(optionsthre);
