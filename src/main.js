const containerChampions= document.getElementById("container-champions");
let x = Object.values(LOL.data);
// console.log(x)
 for(let i=0; i<x.length;i++){
 console.log(x[i].name)
  containerChampions.innerHTML += `
<<<<<<< HEAD
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
=======
  <div class="img-champions">
  <img class="img-peque" src="${x[i].img}"></img><br>
    <span> ${x[i].name}</span>
    </div>
  `

  // let g =` <divdata-xd='asdasd' class="img-champions"><img src=${x} `
 
 }
>>>>>>> 94d22895393b4000e59f0810958b22cbf1639120
