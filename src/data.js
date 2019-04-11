/* Manejo de data */

const filterData = (data, condition) => {
  let newChampions = [];
  for (let i = 0; data.length > i; i++) { /* para recorrer los campeones*/
    for (let j = 0; data[i].tags.length > j; j++) { /* para recorrar los tags y validar si hacen math con las condicion*/
      if (data[i].tags[j] === condition) { /* validamos unos de los tantos roles que puede tener el champion  , con la condition*/
        newChampions.push(data[i]); /* agregamos a ese campion a otro array nuevo*/
      }
    }
  }
  return newChampions;
};


const sortData = (data, sortBy, sortOrder) => {
  /* filtrar data usando data - sortBy */
  let championFilter;
  if (sortBy === "All") {
    championFilter = data;
  } else {
    championFilter = filterData(data, sortBy);
  }


  if (sortOrder === "1") { /* ordenar de la A-Z*/
    let newAZ = championFilter.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    return newAZ;
  } else { /* ordenar de Z-A*/
    let newZA = championFilter.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
    return newZA;
  }
};

const computeStats = (data) => {
  /* (15+25+35)/3*/
  let statsName = "hp";
  /* [{},{},{}]*/
  let getStats = data.map((champion) => {
    return champion.stats[statsName];
  }); // filtra y te devulve en array la propiedad que especificas en el return
  let sumatory = 0;
  for (let i = 0; getStats.length > i; i++) {
    sumatory += getStats[i];
  }
  let calculo = ((sumatory) / getStats.length).toFixed(2);
  return calculo;
};


window.Globalda = {
  filterData,
  sortData,
  computeStats
};