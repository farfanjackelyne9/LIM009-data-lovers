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
 document.getElementsByClassName("menu").addEvenListener("click",()=>{

   
 })
