---
permalink: "/imageModal"
title: Image Modal
---
<html>
    <head>
        <style>
            #myImg{
                border-radius: 5px;
                cursor: pointer;
                transition: 0.3s;
            }
            #myImg:hover{
                opacity: 0.7;
            }
            .modal{
                display: none;
                position: fixed;
                z-index: 1;
                padding-top: 100px;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: auto;
                background-color: rgb(0,0,0);
                background-color: rgba(0,0,0,0.9);
            }
            .modal_content{
                margin: auto;
                display:block;
                width:80%;
                max-width: 700px;
            }
            .close{
                position: absolute;
                top: 15px;
                right: 35px;
                color: #f1f1f1;
                font-size: 40px;
                font-weight: bold;
                transition: 0.3s;
            }
            @media only screen and (max-width: 700px){
        .modal-content {
            width: 100%;
        }
        }
        </style>
    </head>
    <body>
        <img id="myImg" src="https://via.placeholder.com/160" alt="placeholder image" style="width:100%; max-width: 300px">
        <div id="myModal" class="modal">
            <span class="close">&times;</span>
            <img class="modal_content" id="img01">
        </div>
        <script>
            var modal = document.getElementById("myModal");
            var img = document.getElementById("myImg");
            var modalImg = document.getElementById9("img01");
            img.onClick = function(){
                modal.style.display = "block";
                modalImg.src = this.src;
            }
            var span = document.getElementsByClassName("close")[0];
            span.onCLick = function()[
                modal.style.display = "none";
            ]
        </script>
    </body>
