const canvas = document.getElementById("poppy-container");
canvas.width = window.innerWidth * 5;
canvas.height = window.innerHeight * 5;
const ctx = canvas.getContext("2d");

const imageBaseUrl =
  "https://github.com/Ashster/poppy-park/blob/main/assets/img/";
const imageLists = ["maltese_1.svg?raw=true", "maltese_2.svg?raw=true", "maltese_3.svg?raw=true", "maltese_4.svg?raw=true", "maltese_5.svg?raw=true", "maltese_6.svg?raw=true"];
const imageMap = new Map();

const drawImage = (src, x, y) => {
  let image = imageMap.get(src) || new Image();
  imageBaseUrl.crossOrigin = "Anonymous";
  image.onload = () => {
    ctx.drawImage(image, x, y, 300, 300);
  };
  image.src = src;
  imageMap.set(src, image);
};

const drawCanvas = () => {
  // for (let i = 0; i < canvas.height; i = i + 320) {
  for (let j = 0; j < canvas.width; j = j + 320) {
    drawImage(imageBaseUrl + imageLists[(j / 320) % imageLists.length], 0, j)
  }
  // }
  // drawImage(imageBaseUrl + imageLists[0]);
}

drawCanvas()