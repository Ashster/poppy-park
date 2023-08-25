const imageBaseUrl =
  "https://github.com/Ashster/poppy-park/blob/main/assets/img/";
const imageLists = ["maltese_1.png?raw=true", "maltese_2.png?raw=true"];

const drawCanvas = (canvasID) => {
  let canvas = document.getElementById(canvasID);
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    drawImage(ctx, imageBaseUrl + imageLists[0]);
  }
};

const drawImage = (ctx, src) => {
  let image = new Image();
  imageBaseUrl.crossOrigin = "Anonymous";
  image.onload = () => {
    ctx.drawImage(image, 0, 0, 10, 10);
  };
  image.src = src;
};

drawCanvas("poppy-container");
