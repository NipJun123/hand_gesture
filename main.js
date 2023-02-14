Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 100
});

cam = document.getElementById("camera");

Webcam.attach(cam)


function takesnapshot()
{
    Webcam.snap(function(photo){
        document.getElementById("snapshot").innerHTML = '<img src="'+photo+'" id="photo1">'
    })
}

console.log("ml5 version: ",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-pj1YwqOi/model.json",modelReady);

function modelReady()
{
    console.log("Model has been loaded")
}

function check()
{
    img1 = document.getElementById("photo1");
    classifier.classify(img1, gotResults)
}

function gotResults(e,r)
{
    if (e)
    {
        console.error(e);
    }

    else
    {
        console.log(r)
        document.getElementById("hand_name_1").innerHTML = r[0].label
        document.getElementById("hand_name_2").innerHTML = r[1].label
        if(r[0].label=="best")
        {
            document.getElementById("hand_1").innerHTML = "&#128076;"
        }
        if(r[0].label=="amazing")
        {
            document.getElementById("hand_1").innerHTML = "&#128077;"
        }
        if(r[0].label=="victory")
        {
            document.getElementById("hand_1").innerHTML = "&#9996;"
        }
        if(r[1].label=="best")
        {
            document.getElementById("hand_2").innerHTML = "&#128076;"
        }
        if(r[1].label=="amazing")
        {
            document.getElementById("hand_2").innerHTML = "&#128077;"
        }
        if(r[1].label=="victory")
        {
            document.getElementById("hand_2").innerHTML = "&#9996;"
        }
        

    }

    
}