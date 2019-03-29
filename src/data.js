/* Manejo de data */
const example = () => {
  return 'example';
};

const filterData=(data,condition)=>{
  let newChampions=[];
     for(let i=0;data.length>i;i++){
      for(let j=0;data[i].tags.length>j;j++){
          if(data[i].tags[j] === condition){
              newChampions.push(data[i]);
          }
      }
     }
     return newChampions;   
}
// const sortData=(data,sortBy)=>{
//   let orderChampions= [];
//   for(let i=0;data.length>i;i++){
//     for(let j=0;data[i].id.length>j;j++){
//         if(data[i].id[j] === sortBy){
//             orderChampions.push(data[i]);
//         }
//     }
//     return orderChampions.sort().reverse();
// }


window.filterData= filterData;
// window.sortData= sortData;
