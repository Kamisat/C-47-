var principal, prn, bg;

var obs, premio, plyerState, pem, count;

var gameState = 0;

var tempo = 60;

var obstaculo,
  obstaculo1,
  obstaculo2,
  obstaculo3,
  obstaculo4,
  obstaculo5,
  obstaculo6,
  obstaculo7,
  obstaculo8,
  obstaculo9,
  obstaculo10,
  obstaculo11,
  obstaculo12,
  obstaculo13,
  obstaculo14,
  obstaculo15,
  obstaculo16,
  obstaculo17,
  obstaculo18,
  obstaculo19,
  obstaculo20,
  obstaculo21,
  obstaculo22,
  parede,
  parede1,
  parede2,
  parede3;

function preload() {
  prn = loadAnimation("Imported piskel (1).gif");
  bg = loadImage("Imported piskel (2).gif");
  pem = loadImage("Imported piskel (3).gif");
}

function setup() {
  createCanvas(200, 200);

  count = 25;

  principal = createSprite(100, 100, 20, 20);
  principal.addAnimation("pessoa", prn);
  principal.scale = 0.2;

  premio = createSprite(100, 350, 30, 40);
  premio.addImage(pem);
  premio.scale = 0.1;

  parede = createSprite(0, 300, 5, 600);
  parede1 = createSprite(600, 300, 5, 600);
  parede2 = createSprite(300, 0, 600, 5);
  parede3 = createSprite(300, 600, 600, 5);

  obstaculo1 = createSprite(300, 300, 15, 200);
  obstaculo2 = createSprite(250, 300, 15, 200);
  obstaculo3 = createSprite(375, 200, 150, 15);
  obstaculo4 = createSprite(425, 150, 150, 15);
  obstaculo5 = createSprite(375, 300, 150, 15);
  obstaculo6 = createSprite(250, 400, 15, 200);
  obstaculo7 = createSprite(300, 440, 200, 15);
  obstaculo8 = createSprite(205, 340, 15, 200);
  obstaculo9 = createSprite(445, 250, 200, 15);
  obstaculo10 = createSprite(130, 440, 200, 15);
  obstaculo11 = createSprite(100, 250, 200, 15);
  obstaculo12 = createSprite(500, 300, 15, 200);
  obstaculo13 = createSprite(550, 300, 15, 200);
  obstaculo14 = createSprite(400, 370, 60, 60);
  obstaculo15 = createSprite(350, 500, 200, 15);
  obstaculo16 = createSprite(250, 60, 15, 200);
  obstaculo17 = createSprite(500, 140, 15, 200);
  obstaculo18 = createSprite(300, 150, 15, 200);
  obstaculo19 = createSprite(270, 65, 50, 15);
  obstaculo20 = createSprite(550, 450, 15, 200);
  obstaculo21 = createSprite(450, 500, 200, 15);
  obstaculo22 = createSprite(100, 500, 200, 15);

  obs = new Group();

  obs.add(obstaculo1);
  obs.add(obstaculo2);
  obs.add(obstaculo3);
  obs.add(obstaculo4);
  obs.add(obstaculo5);
  obs.add(obstaculo6);
  obs.add(obstaculo7);
  obs.add(obstaculo8);
  obs.add(obstaculo9);
  obs.add(obstaculo10);
  obs.add(obstaculo11);
  obs.add(obstaculo12);
  obs.add(obstaculo13);
  obs.add(obstaculo14);
  obs.add(obstaculo15);
  obs.add(obstaculo16);
  obs.add(obstaculo17);
  obs.add(obstaculo18);
  obs.add(obstaculo19);
  obs.add(obstaculo20);
  obs.add(obstaculo21);
  obs.add(obstaculo22);
  obs.add(parede);
  obs.add(parede1);
  obs.add(parede2);
  obs.add(parede3);
}

function draw() {
  background(bg);

  camera.x = principal.x;
  camera.y = principal.y;

  principal.collide(obs);

  if (principal.isTouching(premio)) {
    gameState = 1;
    playerState = "Vitória";
  }
  if (tempo <= 0) {
    gameState = 1;
    playerState = "Derrota";
  }

  if (gameState === 1) {
    fill("green");
    text("Aperte R para recomeçar", camera.x - 50, camera.y);
    text(playerState, camera.x - 50, camera.y - 15);

    if (keyDown("r")) {
      tempo = 60;
      gameState = 0;
      principal.x = 100;
      principal.y = 100;
      if (playerState === "Vitória" && count > 9) {
        count = count - 1;
      }
    }
  }

  // console.log(mouseX, mouseY);

  // console.log(obs);
  if (gameState === 0) {
    if (frameCount % count === 0) {
      tempo = tempo - 1;
    }

    if (keyDown("UP_ARROW")) {
      principal.y = principal.y - 6;
    }

    if (keyDown("DOWN_ARROW")) {
      principal.y = principal.y + 6;
    }
    if (keyDown("LEFT_ARROW")) {
      principal.x = principal.x - 6;
    }
    if (keyDown("RIGHT_ARROW")) {
      principal.x = principal.x + 6;
    }

    drawSprites();

    fill("red");
    textSize(5);
    text("Tempo restante:" + tempo, camera.x - 50, camera.y - 50);
  }

  if (count > 10) {
    text("Fase: " + (26 - count), camera.x + 50, camera.y - 50);
  } else if (count <= 10) {
    text("Fase: dificuldade máxima", camera.x + 50, camera.y - 50);
  }

  console.log(count);
}
