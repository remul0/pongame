//Editado por Rêmulo Magno
//variáveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 30
let raio = diametro / 2;
//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
//variaveis da minha raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 65; 

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

let notaLogicaDeProgramacao = 0;


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}
function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  notaLogicaDeProgramacao = constrain(notaLogicaDeProgramacao, 0, 10);
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa()
}
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);  
}
function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function verificaColisaoBorda(){
    if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}
function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
  }

function movimentaMinhaRaquete(){
  if (keyIsDown(87)){
    yRaquete -= 10;
  }
  if (keyIsDown(83)){
    yRaquete += 10;
  
  }
  yRaquete = constrain(yRaquete, 5, 330);
}

function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}
function movimentaRaqueteOponente(){
  if (keyIsDown(UP_ARROW)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
   yRaqueteOponente += 10;
    }
 // velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento /2 -30;
  //yRaqueteOponente += velocidadeYOponente;
  yRaqueteOponente = constrain(yRaqueteOponente, 5, 330);
}


function incluiPlacar(){
  textAlign(CENTER);
  textSize(16);
  
  //Placar do Jogador
  fill(color(255,140,0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  //Placar Oponente
  fill(color(255,140,0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}
function marcaPonto(){
  if (xBolinha > 584){
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 12){
    pontosDoOponente += 1;
    ponto.play();
  }
}
function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}