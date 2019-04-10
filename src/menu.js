

let getId=function(nameId){
    return document.getElementById(nameId);
}


let menuCel=getId("menuCel");
let menuButton=getId("menuButton");
let mc=getId("mc");
let estado=false;
menuButton.addEventListener("click",function(){
   
    if(estado==false){
        menuCel.style.display="block";
        estado=true;
        // mc.style.visibility="visible";
    }
    else if(estado==true){
        menuCel.style.display="none";
        estado=false;
        // mc.style.visibility="hidden";
    }
     
});
