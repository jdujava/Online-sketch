var socket;

function setup() {
  createCanvas(1000,800);
  background(51);

  var p = document.getElementById('peopleCounter');

  socket = io.connect('https://whispering-shelf-36846.herokuapp.com/');
  socket.on('mouse', newDrawing);
  socket.on('count', updateCount);

  function newDrawing(data) {
    noStroke();
    fill(255,0,100);
    ellipse(data.x,data.y,20,20);
  }
  function updateCount(data) {
    p.innerHTML = "Počet pripojených ľudí : " + data;
  }
}

function mouseDragged() {
  var data = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data);

  noStroke();
  fill(255);
  ellipse(mouseX,mouseY,20,20)
}

function draw() {

}
