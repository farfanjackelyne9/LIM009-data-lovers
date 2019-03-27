// const LOL =document.getElementById("LOL")
const containerChampions= document.getElementById("container-champions");
let x = Object.values(LOL.data);
 for(let i=0; i<x.length;i++){
  containerChampions.innerHTML += `
  <div id="img-champions" class="row six-columna">
    <div>
      <img id="img-peque" src="${x[i].img}">
      </img>
    </div>
      <br>
    <div> ${x[i].name}
    </div>
  </div>
  `}
 document.getElementsByClassName("menu").addEvenListener("click",()=>{
   
 })