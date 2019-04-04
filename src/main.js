// const LOL =document.getElementById("LOL")
// let championsActual; //variable super global
let tags="All";
const containerChampions= document.getElementById("container-champions");
const elementoPromedio=document.getElementById("resultadoPromedio");
const x=window.LOL;
let champions = Object.values(x.data);
let promedio=window.computeStats(champions);
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
paintChampions(champions);
 let element=document.getElementsByClassName("menu");
//  let k=document.getElementById("img1");
 for(let i=0;element.length>i;i++){
  element[i].addEventListener("click",()=>{
     let elementoActual = element[i];
   let newChampions=window.filterData(champions,elementoActual.dataset.name);
   let promedio=window.computeStats(newChampions);
   elementoPromedio.innerText=` El Promedio de HP es de  ${promedio} `;
   tags=elementoActual.dataset.name;
  //  championsActual=newChampions;
   paintChampions(newChampions);
  })
 };
 const ordering= document.getElementById("order");
 ordering.addEventListener("change", ()=>{
   let oValue=ordering.value;

   if(oValue == "1"){
 
    let newAZ= window.sortData(champions,tags,oValue);

   paintChampions(newAZ);

   }
   else if(oValue=="2"){
    
   let newZA= window.sortData(champions,tags,oValue);
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
 
