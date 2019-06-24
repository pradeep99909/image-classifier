window.onload=image;

var image=()=>{
var classifier = ml5.imageClassifier('MobileNet',function(){
    console.log('Model is loaded')
});
var img = document.getElementById('image');



classifier.classify(img, function(err, results) {
    if(err){
        document.getElementById('classify').innerHTML=err
    }
    document.getElementById('classify').innerHTML="<p>"+results[0].label+"</p>"
});

};


var chan=(value)=>{
    document.getElementById('image').src=value;
    image()
}
