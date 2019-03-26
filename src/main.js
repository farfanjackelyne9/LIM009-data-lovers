const containerChampions= document.getElementById("container-champions");
let x = Object.values(LOL.data);
// console.log(x)
 for(let i=0; i<x.length;i++){
 console.log(x[i].name)
  containerChampions.innerHTML += `
  <div class="row">
    <div id="img-champions">
      <img src="${x[i].img}">
      </img>
    </div>
    <div id="name-champions">
      <h5> ${x[i].name}</h5>
    </div>
  </div>
  `
}