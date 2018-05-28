window.addEventListener("load", init);

const settings = {
    speed: 10,
    width: 600,
    height: 400,
    carWidth: 100
}
let stage, car;
function init(){
    stage = new createjs.Stage("stage");//the id of the canvas
    createjs.Ticker.framerate = 30;
    createjs.Ticker.addEventListener("tick", tock);
    console.log("load event happened");

    car = new createjs.Container();
    car.brand = "Ferrari";
    car.direction="right";

    let box = new createjs.Shape();
    box.graphics.beginFill("#bada55");
    box.graphics.drawRect(0,0, settings.carWidth, 60);
    car.addChild(box);

    let circle = new createjs.Shape();
    circle.graphics.beginFill("#c0ffee");
    circle.graphics.drawCircle(0,0, 10);
    circle.x=20;
    circle.y=60;
    car.addChild(circle);

    let circle2 = new createjs.Shape();
    circle2.graphics.beginFill("#c0ffee");
    circle2.graphics.drawCircle(0,0, 10);
    circle2.x=80;
    circle2.y=60;
    car.addChild(circle2);
    stage.addChild(car);

}
//github.com/jofhatkea/

function tock(e){
    //console.log("redraw")
    
    if(car.direction==="right"){
        car.x+=settings.speed;
        if(car.x>settings.width-settings.carWidth){
            car.direction="left";
        }
    } else {
        car.x-=settings.speed;
        if(car.x<=0){
            car.direction="right";
        }
    }
    stage.update(e);

}//back 10:40



//1 a game, 

//2 code journey

//3 what createjs can do
