var stats = "";
var img = "";
var objetooos = [""];
function preload(){
    img = loadImage("escritório.jpeg");
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    objectdetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando objeto";
}
function draw(){
    if(stats != undefined){
        image(img, 0, 0, 600, 500);
        for (i = 0; i < objetooos.length; i++) {
            document.getElementById("status").innerHTML = "Status: Objetos Detectados";
      
            fill("#FF0000");
            percent = floor(objetooos[i].confidence * 100);
            text(objetooos[i].label + " " + percent + "%", objetooos[i].x + 15, objetooos[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objetooos[i].x + 45, objetooos[i].y + 45, objetooos[i].width, objetooos[i].height);
        }
    }
}
function modelLoaded(){
    console.log("o modelo carregou!");
    stats = "true";
    objectdetector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.error("!!!!");
    }
    else{
        console.log(results);
        objetooos = results;
    }
}