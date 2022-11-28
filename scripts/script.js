var popupButton = document.getElementById('popBtn');
var popUp = document.getElementById('popupCon');
var backBtn = document.getElementById('bodyCon');

popupButton.onclick = function(){
    popUp.style.display = 'block';
}

backBtn.onclick = function(){
    popUp.style.display = 'none';
}