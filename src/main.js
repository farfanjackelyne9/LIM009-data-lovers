// const LOL =document.getElementById("LOL")
const containerChampions= document.getElementById("container-champions");
let x = Object.values(LOL.data);
 for(let i=0; i<x.length;i++){
  containerChampions.innerHTML += `
  <div class="img-champions">
  <img class="img-peque" src="${x[i].img}"></img><br>
    <span> ${x[i].name}</span>
    </div>
  `}