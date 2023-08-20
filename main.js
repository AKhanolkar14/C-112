function modelLoaded(){
    console.log('Model Loaded!');
}
function check()
{
    img= document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}