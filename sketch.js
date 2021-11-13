var bgImage, issImage, capsule1, capsule2, capsule3, capsule4;
var capsule, iss, dockingSprite;
var isDocked = false;
function preload() {
  bgImage = loadImage('Docking-undocking/spacebg.jpg');
  issImage = loadImage('Docking-undocking/iss.png')
  capsule1 = loadImage('Docking-undocking/spacecraft1.png');
  capsule2 = loadImage('Docking-undocking/spacecraft2.png');
  capsule3 = loadImage('Docking-undocking/spacecraft3.png');
  capsule4 = loadImage('Docking-undocking/spacecraft4.png');
}

function setup() {
  createCanvas(800,400);
  capsule = createSprite(285, 240, 50, 50);
  capsule.addImage(capsule1);
  capsule.scale = 0.25;
  capsule.debug = true;
  capsule.setCollider('rectangle', 0, -150, 100, 100);

  iss = createSprite(330,130,50,50);
  iss.addImage(issImage);
  iss.scale = 0.5;
  iss.debug = true;
  iss.setCollider('rectangle', -67, 26, 30, 30);
}

function draw() {
  background(bgImage);
  if(!isDocked) {
    capsule.x += random(-1,1);
  

    if(keyDown(UP_ARROW)) {
      capsule.y -= 2;
      capsule.addImage(capsule2);
      capsule.setCollider('rectangle', 0, -280, 100, 100);
    }
    if(keyDown(DOWN_ARROW)) {
      capsule.y += 2;
      capsule.addImage(capsule2);
      capsule.setCollider('rectangle', 0, -280, 100, 100);

    }
    if(keyDown(LEFT_ARROW)) {
      capsule.x -= 1;
      capsule.addImage(capsule3);
      capsule.setCollider('rectangle', 0, -280, 100, 100);

    }
    if(keyDown(RIGHT_ARROW)) {
      capsule.x += 1;
      capsule.addImage(capsule4);
      capsule.setCollider('rectangle', 0, -280, 100, 100);

    }
  } 

  if(capsule.isTouching(iss)) {
    isDocked = true;
    textSize(20);
    fill(255);
    text("Docking is successful!",100,300);
  }


  drawSprites();
}