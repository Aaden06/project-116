mustacheX=0;
mustacheY=0;
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/qv7grkNs/moustache-png-image-mustache-png-2000-1021.png');
}
function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.size(500,600);
    webcam.hide();
    posenet = ml5.poseNet(webcam, modelLoaded);
    posenet.on('pose', getposes);
}
function getposes(results){
    if(results.length > 0){
        console.log(results);
        mustacheX = results[0].pose.nose.x - 70;
        mustacheY = results[0].pose.nose.y-100;
        console.log("mustache-x is " + mustacheX + " mustache-y is " + mustacheY);
    }
}
function modelLoaded(){
    console.log("postNet is enabled");
}
function draw(){
    image(webcam, 0, 0, 500, 500);
    image(clown_nose, mustacheX, mustacheY, 150, 150);
}
function save(){
    save('clownnose.png');
}
