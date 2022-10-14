noseX=0;
noseY=0;
Clown_Nose="";
function preload(){
Clown_Nose=loadImage('data:image/jpeg;base64,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');
}

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized')
}
function draw(){
image(video,0,0,300,300);
fill(255,0,0);
stroke(255,0,0);
//circle(noseX, noseY, 20);
image(Clown_Nose, noseX, noseY, 30,30);
}
function take_snapshot(){
    save('myFilterImage.png')
}
function gotPoses(results){
    console.log('getPoses Is called')
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x ="+ noseX);
        console.log("nose y ="+ noseY);
        
    }
}