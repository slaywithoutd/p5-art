```javascript
let quadrantes = [];

function setup() {

  createCanvas(400, 300);
  noLoop();

  quadrantes = [

    {x:0,y:0,w:65,h:160,bg:'red',topo:'purple',esq:'forestgreen',dir:'thistle'},
    {x:65,y:0,w:60,h:110,bg:'yellowgreen',topo:'deepskyblue',esq:'deeppink',dir:'gold'},
    {x:125,y:0,w:135,h:90,bg:'deeppink',topo:'darkorange',esq:'limegreen',dir:'turquoise'},
    {x:260,y:0,w:75,h:90,bg:'deepskyblue',topo:'gold',esq:'slateblue',dir:'tomato'},
    {x:335,y:0,w:65,h:135,bg:'plum',topo:'olive',esq:'red',dir:'deepskyblue'},

    {x:65,y:110,w:60,h:50,bg:'darkorange',topo:'olive',esq:'rosybrown',dir:'peru'},
    {x:125,y:90,w:65,h:70,bg:'slateblue',topo:'dimgray',esq:'gold',dir:'yellowgreen'},
    {x:190,y:90,w:60,h:45,bg:'limegreen',topo:'white',esq:'slateblue',dir:'mediumseagreen'},
    {x:250,y:90,w:85,h:45,bg:'lightgray',topo:'rosybrown',esq:'darkorange',dir:'limegreen'},

    {x:0,y:160,w:95,h:45,bg:'turquoise',topo:'darkslategray',esq:'deeppink',dir:'gainsboro'},
    {x:95,y:160,w:95,h:45,bg:'slateblue',topo:'green',esq:'peru',dir:'red'},
    {x:190,y:135,w:60,h:70,bg:'tomato',topo:'olive',esq:'saddlebrown',dir:'royalblue'},
    {x:250,y:135,w:150,h:100,bg:'gold',topo:'cadetblue',esq:'yellowgreen',dir:'deeppink'},

    {x:0,y:205,w:75,h:30,bg:'royalblue',topo:'gold',esq:'deepskyblue',dir:'plum'},
    {x:0,y:235,w:75,h:65,bg:'red',topo:'deepskyblue',esq:'goldenrod',dir:'saddlebrown'},
    {x:75,y:205,w:50,h:95,bg:'deeppink',topo:'darkorange',esq:'green',dir:'teal'},
    {x:125,y:205,w:125,h:60,bg:'limegreen',topo:'rosybrown',esq:'olive',dir:'chocolate'},
    {x:125,y:265,w:50,h:35,bg:'gold',topo:'royalblue',esq:'deepskyblue',dir:'purple'},
    {x:175,y:265,w:150,h:35,bg:'green',topo:'gold',esq:'slateblue',dir:'turquoise'},
    {x:250,y:235,w:75,h:30,bg:'red',topo:'royalblue',esq:'gold',dir:'deepskyblue'},
    {x:325,y:235,w:75,h:65,bg:'slateblue',topo:'plum',esq:'darkorange',dir:'gold'}

  ];
}

function draw() {

  background(0);

  for (let q of quadrantes) {

    desenharQuadrante(
      q.x,
      q.y,
      q.w,
      q.h,
      color(q.bg),
      color(q.topo),
      color(q.esq),
      color(q.dir)
    );
  }
}

function mousePressed() {

  for (let q of quadrantes) {

    if (
      mouseX >= q.x &&
      mouseX <= q.x + q.w &&
      mouseY >= q.y &&
      mouseY <= q.y + q.h
    ) {

      let temp = q.topo;

      q.topo = q.esq;
      q.esq = q.dir;
      q.dir = temp;

      redraw();
      return;
    }
  }
}

function desenharQuadrante(x, y, w, h, corBg, corTopo, corEsq, corDir) {

  const margem = 7;

  noStroke();

  fill(corBg);
  rect(x, y, w, h);

  const cx = x + w / 2;
  const cy = y + h / 2;

  const ty = y + margem;
  const by = y + h - margem;

  const lx = x + margem;
  const rx = x + w - margem;

  const upY = (ty + cy) / 2;
  const dnY = (cy + by) / 2;

  fill(corTopo);
  quad(cx, ty, rx, upY, cx, cy, lx, upY);

  fill(corEsq);
  quad(lx, upY, cx, cy, cx, by, lx, dnY);

  fill(corDir);
  quad(cx, cy, rx, upY, rx, dnY, cx, by);

  noFill();
  stroke(0);
  strokeWeight(2);

  rect(x, y, w, h);
}
```
