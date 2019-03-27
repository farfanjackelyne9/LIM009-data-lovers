// const LOL =document.getElementById("LOL")
const containerChampions= document.getElementById("container-champions");
let x = Object.values(LOL.data);
 for(let i=0; i<x.length;i++){
  containerChampions.innerHTML += `
  <div id="img-champions" class="row six-columna">
    <div class="col-xs-12 col-sm-6 col-md-2">
      <img id="img-peque" src="${x[i].img}">
      </img>
    </div>
      <br>
    <div class="col-xs-12 col-sm-6 col-md-2"> ${x[i].name}
    </div>
  </div>
  `}
 document.getElementsByClassName("menu").addEvenListener("click",()=>{
   
 })
