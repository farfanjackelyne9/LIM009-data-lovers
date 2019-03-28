// const LOL =document.getElementById("LOL")

const containerChampions= document.getElementById("container-champions");
let x = Object.values(LOL.data);
 for(let i=0; i<x.length;i++){
  containerChampions.innerHTML += `
  <div class="img-champions" >
      <img id="img-peque" src="${x[i].img}">
      </img>
      <br>
    <div>
     ${x[i].name}
    </div>
  </div>
  `}
 let element=document.getElementsByClassName("menu");
 console.log(element);

 for(let i=0;element.length>i;i++){

  element[i].addEventListener("click",(e)=>{
    console.log(e);
  })

 }
 
 