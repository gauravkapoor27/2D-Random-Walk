let ball = document.getElementById("ball");
let container = document.getElementById("container");

ball.style.left = "50%";
ball.style.top = "50%";

let ballX;
let ballY;

async function getData() {
  const response = await fetch("/sendData", {
    method: "POST",
  });
  newPos = await response.json();

  xDirection = newPos[0];
  yDirection = newPos[1];

  ballX = ball.style.left;
  ballY = ball.style.top;

  ballX = parseInt(ballX);
  ballY = parseInt(ballY);

  newX = newY = 0;
  deltaX = xDirection * 100;
  deltaY = yDirection * 100;

  xdir = Math.random();
  ydir = Math.random();

  // move ball up down left or right based on the direction
  if (xdir >= 0.5) {
    newX = deltaX;
  } else {
    newX = -deltaX;
  }

  if (ydir >= 0.5) {
    newY = deltaY;
  } else {
    newY = -deltaY;
  }

  if (ballX + newX >= 100) {
    newX = -deltaX;
  } else if (ballX + newX <= 0) {
    newX = deltaX;
  }
  if (ballY + newY >= 100) {
    newY = -deltaY;
  } else if (ballY + newY <= 0) {
    newY = deltaY;
  }

  ball.style.left = `${ballX + newX}%`;
  ball.style.top = `${ballY + newY}%`;
}

// setInterval(getData, 1);
