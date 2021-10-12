//Get Modal
var modal = document.getElementById('example-modal-1');

//Get button to open modal
var btn = getElementById('btn1');

//Get span that closes modal
var span = document.getElementsByClassName('close')[0];

//Open Modal on Click
btn.onclick = function(){
    modal.style.display = "block";
}

//Close modal on click via span
span.onclick = function(event){
    if(event.target==modal){
        modal.style.display-"none";
    }
}