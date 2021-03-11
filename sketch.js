var canvas, background, gamestate = 0, playerCount, database, form, player, game;;

function setup(){
  canvas = createCanvas(850,400);
}


function draw(){
  background("pink");

  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
