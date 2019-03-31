// const LOL =document.getElementById("LOL")
let championsActual; //variable super global
let tags="All";
const containerChampions= document.getElementById("container-champions");
const elementoPromedio=document.getElementById("resultadoPromedio");

let champions = Object.values(LOL.data);
let promedio=computeStats(champions);
elementoPromedio.innerText=` El Promedio de HP es de  ${promedio} `;

championsActual=champions;
const paintChampions=(championsx)=>{
  console.log(championsx.length);
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
 let element=document.getElementsByClassName("menu");
 console.log(element);
 let k=document.getElementById("img1");
console.log(k);
 for(let i=0;element.length>i;i++){

  element[i].addEventListener("click",()=>{
     let elementoActual = element[i];
    console.log("data Capturada" ,elementoActual);
   let newChampions=filterData(champions,elementoActual.dataset.name);
   console.log(newChampions);
   let promedio=computeStats(newChampions);
   elementoPromedio.innerText=` El Promedio de HP es de  ${promedio} `;
   tags=elementoActual.dataset.name;
   championsActual=newChampions;
   paintChampions(newChampions);
  })

 }

 const ordering= document.getElementById("order");
 ordering.addEventListener("change", ()=>{
   console.log(ordering.value);
   let oValue=ordering.value;

   if(oValue == "1"){
 
    let newAZ= sortData(champions,tags,oValue);

   paintChampions(newAZ);

   }
   else if(oValue=="2"){
    console.log("Ordenar Z-A");
    console.log(championsActual);
    
   let newZA= sortData(champions,tags,oValue);
console.log(newZA);
paintChampions(newZA);
   }
 })
 /***
  * el evento 
  * guardar la informacion en localstrogare
  * y hacer el redireccionar
  * llegando la pagina cargar lo que se guardo en el localstorage 
  * 
  */

 
