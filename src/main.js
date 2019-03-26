const containerChampions= document.getElementById("container-champions");
let x = Object.values(LOL.data);
// console.log(x)
 for(let i=0; i<x.length;i++){
 console.log(x[i].name)
  containerChampions.innerHTML += `
  <div class="img-champions">
  <img class="img-peque" src="${x[i].img}"></img><br>
    <span> ${x[i].name}</span>
    </div>
  `

  // let g =` <divdata-xd='asdasd' class="img-champions"><img src=${x} `
 
 }