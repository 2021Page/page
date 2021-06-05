function OnMouseIn(n) {
           n.style.border = "1.5px solid rgb(128, 146, 199)";
           n.style.backgroundColor = "#EBF5FF";
       }
 function OnMouseOut(n) {
           n.style.border = "";
           n.style.backgroundColor = "";
             }
 function image_onclick(){
   var arrImage=new Array("img/nail/nail1.png", "img/nail/nail2.png", "img/nail/nail3.png",
     "img/nail/nail4.png", "img/nail/nail5.png","img/nail/nail6.png",
     "img/nail/nail7.png", "img/nail/nail8.png", "img/nail/nail9.png",
     "img/nail/nail10.png", "img/nail/nail1.png", "img/nail/nail12.png",
     "img/nail/nail13.png", "img/nail/nail14.png", "img/nail/nail15.png",);
       var imgSource=document.targetImg;
       var intRandom=Math.round(Math.random()*14);
       while(imgSource.src.indexOf(arrImage[intRandom]) != -1){
          intRandom=Math.round(Math.random()*14);
       }
     imgSource.src=arrImage[intRandom];
   }
function image_onclick2(){
  var arrImage=new Array("img/pedi/pedi1.png", "img/pedi/pedi2.png", "img/pedi/pedi3.png",
    "img/pedi/pedi4.png", "img/pedi/pedi5.png","img/pedi/pedi6.png",
    "img/pedi/pedi7.png", "img/pedi/pedi8.png", "img/pedi/pedi9.png",
    "img/pedi/pedi10.png", "img/pedi/pedi1.png", "img/pedi/pedi12.png",
    "img/pedi/pedi13.png", "img/pedi/pedi14.png", "img/pedi/pedi15.png",);
   var imgSource=document.targetImg;
   var intRandom=Math.round(Math.random()*14);
      while(imgSource.src.indexOf(arrImage[intRandom]) != -1){
         intRandom=Math.round(Math.random()*14);
      }
        imgSource.src=arrImage[intRandom];
}

function likealert(){
  alert("The product has been reflected in the list of likes.");
  document.getElementById("Like").style.color = "white";
  document.getElementById("Like").style.backgroundColor = "#FF607F";
}
function cartalert(){
  alert("The product is in the cart.");
  document.getElementById("Cart").style.color = "white";
  document.getElementById("Cart").style.backgroundColor = "#3CC8C8";
}
function buynowalert(){
  alert("Your order has been completed.");
}
