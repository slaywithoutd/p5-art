function setup() {
  createCanvas(400, 300);
  background(0);
  noLoop();
}

function draw() {

  desenharQuadrante(0,0,65,160,color('red'),color('purple'),color('forestgreen'),color('thistle'));
  desenharQuadrante(65,0,60,110,color('yellowgreen'),color('deepskyblue'),color('deeppink'),color('gold'));
  desenharQuadrante(125,0,135,90,color('deeppink'),color('darkorange'),color('limegreen'),color('turquoise'));
  desenharQuadrante(260,0,75,90,color('deepskyblue'),color('gold'),color('slateblue'),color('tomato'));
  desenharQuadrante(335,0,65,135,color('plum'),color('olive'),color('red'),color('deepskyblue'));

  desenharQuadrante(65,110,60,50,color('darkorange'),color('olive'),color('rosybrown'),color('peru'));
  desenharQuadrante(125,90,65,70,color('slateblue'),color('dimgray'),color('gold'),color('yellowgreen'));
  desenharQuadrante(190,90,60,45,color('limegreen'),color('white'),color('slateblue'),color('mediumseagreen'));
  desenharQuadrante(250,90,85,45,color('lightgray'),color('rosybrown'),color('darkorange'),color('limegreen'));

  desenharQuadrante(0,160,95,45,color('turquoise'),color('darkslategray'),color('deeppink'),color('gainsboro'));
  desenharQuadrante(95,160,95,45,color('slateblue'),color('green'),color('peru'),color('red'));
  desenharQuadrante(190,135,60,70,color('tomato'),color('olive'),color('saddlebrown'),color('royalblue'));
  desenharQuadrante(250,135,150,100,color('gold'),color('cadetblue'),color('yellowgreen'),color('deeppink'));

  desenharQuadrante(0,205,75,30,color('royalblue'),color('gold'),color('deepskyblue'),color('plum'));
  desenharQuadrante(0,235,75,65,color('red'),color('deepskyblue'),color('goldenrod'),color('saddlebrown'));
  desenharQuadrante(75,205,50,95,color('deeppink'),color('darkorange'),color('green'),color('teal'));
  desenharQuadrante(125,205,125,60,color('limegreen'),color('rosybrown'),color('olive'),color('chocolate'));
  desenharQuadrante(125,265,50,35,color('gold'),color('royalblue'),color('deepskyblue'),color('purple'));
  desenharQuadrante(175,265,150,35,color('green'),color('gold'),color('slateblue'),color('turquoise'));
  desenharQuadrante(250,235,75,30,color('red'),color('royalblue'),color('gold'),color('deepskyblue'));
  desenharQuadrante(325,235,75,65,color('slateblue'),color('plum'),color('darkorange'),color('gold'));

}
 
function desenharQuadrante(x, y, w, h, corBg, corTopo, corEsq, corDir) {
  const margem = 7;
  noStroke();
  fill(corBg);
  rect(x, y, w, h);
 
  // cubo
  const cx  = x + w/2; // centro horizontal
  const cy  = y + h/2; // centro vertical
  const ty  = y + margem; // y topo
  const by  = y + h - margem; // y base
  const lx  = x + margem; // x lateral esquerda
  const rx  = x + w - margem; // x lateral direita
  const upY = (ty + cy) / 2; // y vertices laterais superiores
  const dnY = (cy + by) / 2; // y vertices laterais inferiores
 
  // topo
  fill(corTopo);
  quad(cx, ty,  rx, upY,  cx, cy,  lx, upY);
 
  // esquerda
  fill(corEsq);
  quad(lx, upY,  cx, cy,  cx, by,  lx, dnY);
 
  // direita 
  fill(corDir);
  quad(cx, cy,  rx, upY,  rx, dnY,  cx, by);
 
  // bordas
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(x, y, w, h);
}
