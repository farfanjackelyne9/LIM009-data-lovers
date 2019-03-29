/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

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
