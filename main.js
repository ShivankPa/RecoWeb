Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 100
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log("ml5 version",ml5.version);
classfier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/m30M-40iq/',modelloaded);
 
function modelloaded(){
    console.log("model is loaded");
}

function check() {
    img = document.getElementById("captured_image");
    classfier.classify(img,gotresult);
}

function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("resultname").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}