function openPage(evt, pageName){
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab__content");
    for (i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display="none";
    }

    tablinks = document.getElementsByClassName("tab__links");
    for(i=0;i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(pageName).style.dispaly="block";
    evt.currentTarget.className += "active";
}