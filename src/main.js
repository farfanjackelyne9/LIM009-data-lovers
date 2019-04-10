// const LOL =document.getElementById("LOL")
// let championsActual; //variable super global
let tags="All";
const containerChampions= document.getElementById("container-champions"); // pintar resultdo de champiojn
const elementoPromedio=document.getElementById("resultadoPromedio"); // pintar el promedio en texto
const x=window.LOL;
let champions = Object.values(x.data);
let promedio=Globalda.computeStats(champions);
elementoPromedio.innerText=` El Promedio de HP es de  ${promedio} `;

// championsActual=champions;
const paintChampions=(champions)=>{
  let htmlx="";
  for(let i=0; i<champions.length;i++){
    htmlx+= `
    <div  class="img-champions" >
        <img id="img-peque" src="${champions[i].img}">
        </img>
        <br>
      <div>
       ${champions[i].name}
      </div>
    </div>
    `}

    containerChampions.innerHTML=htmlx;
} 
paintChampions(champions)

 let element=document.getElementsByClassName("menu");
 
 

 for(let i=0;element.length>i;i++){
  element[i].addEventListener("click",()=>{
   let elementoActual = element[i];
   let newChampions=Globalda.filterData(champions,elementoActual.dataset.name);
   let promedio=Globalda.computeStats(newChampions);
   elementoPromedio.innerText=` El Promedio de HP es de  ${promedio} `;
    tags=elementoActual.dataset.name;
  //  championsActual=newChampions;
   paintChampions(newChampions)
  })

 


 }
 const ordering= document.getElementsByClassName("order");

 for(let i=0;ordering.length>i;i++){

 ordering[i].addEventListener("change", ()=>{
   let oValue=ordering[i].value;
    if(oValue == "1"){
     let newAZ= Globalda.sortData(champions,tags,oValue);
       paintChampions(newAZ)
   }
   else if(oValue=="2"){
      let newZA= Globalda.sortData(champions,tags,oValue);
        paintChampions(newZA)
   }
 });
}
 
