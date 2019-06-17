window.onload=image;

function image(){
var classifier = ml5.imageClassifier('MobileNet',function(){
    console.log('Model is loaded')
});
var img = document.getElementById('image')



classifier.predict(img, function(err, results) {
    return(results[0].className)
});

}




