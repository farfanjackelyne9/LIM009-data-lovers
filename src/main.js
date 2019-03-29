// const LOL =document.getElementById("LOL")

const containerChampions= document.getElementById("container-champions");
let champions = Object.values(LOL.data);

const paintChampions=(championsx)=>{
  let htmlx="";
  for(let i=0; i<championsx.length;i++){
    htmlx+= `
    <div  class="img-champions" >
        <img id="img-peque" src="${championsx[i].img}">
        </img>
        <br>
      <div>
       ${championsx[i].name}
      </div>
    </div>
    `}

    containerChampions.innerHTML=htmlx;
} 
paintChampions(champions);
 let roleName=document.getElementsByClassName("menu");
 for(let i=0;roleName.length>i;i++){
  roleName[i].addEventListener("click",(e)=>{
   let newChampions=filterData(champions,e.target.dataset.name);
   paintChampions(newChampions);
  })
 }

// paintChampions(champions);
//  let x=document.getElementsByClassName("order");
//  for(let i=0;i<x.length;i++){
//   x[i].addEventListener("click",(e)=>{
//     let orderChampions=sortData(champions,e.target.dataset.order);
//     paintChampions(orderChampions);
//   })
// }

 /***
  * el evento 
  * guardar la informacion en localstrogare
  * y hacer el redireccionar
  * llegando la pagina cargar lo que se guardo en el localstorage 
  * 
  */

 
