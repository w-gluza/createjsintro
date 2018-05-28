window.addEventListener("load", init);


let stage, box, circle;
function init(){
    stage = new createjs.Stage("stage");//the id of the canvas
    createjs.Ticker.framerate = 30;
    createjs.Ticker.addEventListener("tick", tock);
    console.log("load event happened");
    box = new createjs.Shape();
    box.graphics.beginFill("#bada55");
    box.graphics.drawRect(0,0, 60, 60);
    box.x=600/2;
    box.y=400/2;
    stage.addChild(box);

    circle = new createjs.Shape();
    circle.graphics.beginFill("#c0ffee");
    circle.graphics.drawCircle(0,0, 40);
    circle.x=600/2;
    circle.y=400/2;
    stage.addChild(circle);

}

function tock(e){
    //console.log("redraw")
    box.rotation++;
    circle.rotation++;
    stage.update(e);

}