noseX = 0;
noseY = 0;

function preload() {
          mus = loadImage('https://i.postimg.cc/59wcmsx4/m.png');
}

function setup() {
          canvas = createCanvas(300 , 300);
          canvas.center();
          video = createCapture(VIDEO);
          video.size(300 ,300);
          video.hide();

          poseNet = ml5.poseNet(video , modelLoaded);
          poseNet.on('pose' , gotPoses);
}
function modelLoaded() {
          console.log('PoseNet Is Initialised');
}

function gotPoses(results) {
          if(results.length>0) {
                    console.log(results);
                    noseX = results[0].pose.nose.x-15;
                    noseY = results[0].pose.nose.y-3;
          }
}

function draw() {
          image(video , 0 , 0 , 300 , 300);
          image(mus , noseX , noseY , 30 , 30);
}

function takeSnapshot() {
          save('myFilterImage.png');
}