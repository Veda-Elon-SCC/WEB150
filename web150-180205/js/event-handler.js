//function checkUserName(){
//    var elMsg = document.getElementById('feedback');
//    if(this.value.length < 5){
//        elMsg.textContent = "Username must be 5 characters or more.";
//    }
//    else{
//        elMsg.textContent = "";
//    }
//
//}
//
//var elUserName = document.getElementById('username');
//elUserName.onblur = checkUserName;

var elUserName = document.getElementById('username');
var elMsg = document.getElementById('feedback');
function checkUserName(minLength){
    if(elUserName.value.length < minLength){
        elMsg.textContent = "Username must be 5 characters or more.";
    }
    else{
        elMsg.textContent = "";
    }
}
elUserName.addEventListener('blur', function(){
    checkUserName(5);},false);
