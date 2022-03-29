var radioMayor = 60;
var x = radioMayor;
var y = radioMayor;
var velocidadX = 2; // velocidad de mov. en eje X
var velocidadY = 3.5; // velocidad de mov. en eje Y
var direccionX = 1; // dirección de mov. en eje X
var direccionY = 1; // dirección de mov. en eje Y
var maxcolor = 20;
var angulo = 0.0;
var desplazamiento = -90;
var desplazamiento2 = 90;
var igual = 100;
var velocidad = 1.2;

function setup() {
  createCanvas(501, 500);
  angleMode(DEGREES);
  background(220);
}

function draw() {
  background(220);
  fondo();
  if (mouseButton == LEFT) { // triangulo que rebota
    // cambia direcciónX
    x += velocidadX * direccionX;

    if ((x > width - radioMayor) || (x < radioMayor)) {
      direccionX = -direccionX;
    }


    // cambia direcciónY
    y += velocidadY * direccionY;

    if ((y > height - radioMayor) || (y < radioMayor)) {
      direccionY = -direccionY;
    }


    push(); //--------CAPA 2
    ellipseMode(RADIUS);
    //Transformaciones ------------------------  
    translate(x, y);
    rotate(radians(x));

    //adornos
    noStroke();
    fill(255, 218, maxcolor); // amarillo
    triangle(220, 215, 342, 96, 96, 96);

    fill(0); //CELESTE
    translate(230, 140);
    rectMode(CENTER);
    rect(-10, 0, 50, 50);
    pop() //--------FIN CAPA 2
  }
}

function fondo() {
  push();
  translate(-100, 240);
  rotate(-45);

  push();
  translate(80, 160);
  rotate(-95);
  strokeCap(PROJECT); // linea cuadrado
  strokeWeight(6);
  line(-63, 0, 45, 130);
  pop();

  // triangulos
  noStroke();
  fill(255, 218, 5); // amarillo
  triangle(220, 215, 342, 96, 96, 96);

  fill(20, 90, 147); //azul
  triangle(352, 346, 405, 408, 280, 423);

  fill(20, 90, 147); //azul2 para cortar bordes
  triangle(278, 424, 404, 397, 404, 424);

  fill(300, 80, 30); // naranja
  triangle(110, 325, 76, 300, 80, 356);


  //cuadrado principal
  noFill();
  stroke(0);
  strokeWeight(3);
  rect(70, 90, 340, 340);

  //lineas
  strokeCap(PROJECT); // linea arriba
  strokeWeight(6);
  line(365, 100, 400, 135);
  strokeCap(PROJECT); // linea medio
  strokeWeight(6);
  line(99, 100, 402, 400);
  strokeCap(PROJECT); // linea abajo
  strokeWeight(6);
  line(80, 299, 198, 420);
  strokeCap(PROJECT); // linea derecha
  strokeWeight(6);
  line(400, 295, 280, 420);
  strokeCap(PROJECT); // linea izquierda
  strokeWeight(6);
  line(85, 355, 340, 99);

  // cuadrado
  noStroke();
  fill(0);
  push();
  translate(190, 190);
  rotate(45);
  fill(0);
  rect(-50, 0, 90, 90);
  pop();
  pop();

  push();

  if (mouseButton) {


    if (mouseButton == RIGHT) { // lineas cuadro
      background(245);
      var y1 = desplazamiento + sin(angulo) * igual;
      var y2 = desplazamiento2 + sin(angulo) * igual;
      var y3 = desplazamiento2 - sin(angulo) * igual;

      noStroke();
      push(); //amarillo
      translate(120, -200);
      rotate(30);
      fill(7255, 218, maxcolor);
      rect(190, 226, 10, y2);
      fill(7255, 218, maxcolor);
      rect(190, 226, 10, y2);
      pop();

      //negro linea izquierda
      push();
      fill(0);
      rect(180, 226, 10, y1);
      fill(0);
      rect(180, 226, 10, y2);
      pop();

      //negro2 linea derecha
      push();

      fill(0);
      rect(360, 226, 10, y1);
      fill(0);
      rect(360, 226, 10, y2);
      pop();

      //negro3 centro
      push();
      translate(400, -150);
      rotate(90);
      fill(0);
      rect(385, 226, 10, y1);
      fill(0);
      rect(385, 226, 10, y3);
      pop();

      //negro4 abajo
      push();
      translate(400, -150);
      rotate(90);
      fill(0);
      rect(485, 220, 10, y1);
      fill(0);
      rect(485, 220, 10, y1);
      pop();
      
            //negro4 arriba
      push();
      translate(400, -150);
      rotate(90);
      fill(0);
      rect(220, 220, 10, y1);
      fill(0);
      rect(220, 220, 10, y1);
      pop();

      //naranja
      push();
      translate(-200, 400);
      rotate(-45);
      fill(300, 80, 30);
      rect(250, 226, 10, y1);
      fill(300, 80, 30);
      rect(250, 226, 10, y1);
      pop();

      //azul
      push();
      translate(400, -100);
      rotate(30);
      fill(20, 90, 147);
      rect(180, 326, 10, y2);
      fill(20, 90, 147);
      rect(180, 326, 10, y2);
      pop();

      angulo += velocidad;
      pop();
    }
    document.oncontextmenu = function() {
      return false;
    }
  }
}