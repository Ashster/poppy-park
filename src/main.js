const drawCanvas = (canvasID) => {
  let canvas = document.getElementById(canvasID);
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    drawImage(ctx, "assets/img/maltese_1.png");
  }
};

const drawImage = (ctx, src) => {
  let image = new Image();
  image.onload = () => {
    ctx.drawImage(image, 0, 0);
  };
  image.src = src;
};

drawCanvas("poppy-container");
