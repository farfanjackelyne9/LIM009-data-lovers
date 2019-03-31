// const LOL =document.getElementById("LOL")

const containerChampions= document.getElementById("container-champions");
let champions = Object.values(LOL.data);

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

  element[i].addEventListener("click",(e)=>{
    console.log("data Capturada" , e.target.dataset.name);
   let newChampions=filterData(champions,e.target.dataset.name);
   console.log(newChampions);
   paintChampions(newChampions);
  })

 }

 /***
  * el evento 
  * guardar la informacion en localstrogare
  * y hacer el redireccionar
  * llegando la pagina cargar lo que se guardo en el localstorage 
  * 
  */
 
