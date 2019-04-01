/* Manejo de data */

const filterData=(data,condition)=>{
  let newChampions=[];
    //  console.log(data,condition);
     for(let i=0;data.length>i;i++){
      for(let j=0;data[i].tags.length>j;j++){
          if(data[i].tags[j] === condition){
              newChampions.push(data[i]);
          }

      }

     }

     return newChampions;
    
}

window.filterData= filterData;
const sortData=(data,sortBy,sortOrder)=>{

  /** filtrar data usando data - sortBy */
  let championFilter;
   //solamente de ese tag
  if(sortBy=="All"){
    championFilter=data;
  }
  else {
    championFilter=filterData(data,sortBy);
  }


  if(sortOrder == "1"){

   let newAZ= championFilter.sort((a,b)=>{
          return a.name.localeCompare(b.name);
    });
    
return newAZ;

  }
  else if(sortOrder=="2"){
   
  let newZA= championFilter.sort((a,b)=>{
     return b.name.localeCompare(a.name);
});  
  return newZA;
}
}


window.sortData= sortData;


const computeStats=(data)=>{
 //(15+25+35)/3
    let statsName="hp";
   let getStats= data.map((champion)=>{ return champion.stats[statsName];})   
  let sumatory=0;
  for(let i=0;getStats.length>i;i++){
    sumatory+=getStats[i];
  }
  let calculo=((sumatory)/getStats.length).toFixed(2);
  return calculo;



}

window.computeStats=computeStats;