global.window = global;
require('../src/data');
require('./data.spec.js'); 
const input = [
  {
    version: '6.24.1',
    id: 'Aatrox',
    key: '266',
    name: 'Aatrox',
    title: 'the Darkin Blade',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    blurb:
      'Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatroxs ...',
    info: {
      attack: 8,
      defense: 4,
      magic: 3,
      difficulty: 4
    },
    tags: ['Fighter', 'Tank'],
    partype: 'BloodWell',
    stats: {
      hp: 537.8,
      hpperlevel: 85,
      mp: 105.6,
      mpperlevel: 45,
      movespeed: 345,
      armor: 24.384,
      armorperlevel: 3.8,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 150,
      hpregen: 6.59,
      hpregenperlevel: 0.5,
      mpregen: 0,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 60.376,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.04,
      attackspeedperlevel: 3
    }
  },

  {
    version: '6.24.1',
    id: 'Ahri',
    key: '103',
    name: 'Ahri',
    title: 'the Nine-Tailed Fox',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    blurb:
      'Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...',
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    },
    tags: ['Mage', 'Assassin'],
    partype: 'MP',
    stats: {
      hp: 514.4,
      hpperlevel: 80,
      mp: 334,
      mpperlevel: 50,
      movespeed: 330,
      armor: 20.88,
      armorperlevel: 3.5,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 550,
      hpregen: 6.505,
      hpregenperlevel: 0.6,
      mpregen: 6,
      mpregenperlevel: 0.8,
      crit: 0,
      critperlevel: 0,
      attackdamage: 53.04,
      attackdamageperlevel: 3,
      attackspeedoffset: -0.065,
      attackspeedperlevel: 2
    }
  },

  {
    version: '6.24.1',
    id: 'Akali',
    key: '84',
    name: 'Akali',
    title: 'the Fist of Shadow',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
    blurb:
      'There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou ...',
    info: {
      attack: 5,
      defense: 3,
      magic: 8,
      difficulty: 7
    },
    tags: ['Assassin'],
    partype: 'Energy',
    stats: {
      hp: 587.8,
      hpperlevel: 85,
      mp: 200,
      mpperlevel: 0,
      movespeed: 350,
      armor: 26.38,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 8.34,
      hpregenperlevel: 0.65,
      mpregen: 50,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 58.376,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.1,
      attackspeedperlevel: 3.1
    }
  }
];
const inputTags = [
  {
    version: '6.24.1',
    id: 'Maokai',
    key: '57',
    name: 'Maokai',
    title: 'the Twisted Treant',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Maokai.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg',
    blurb:
      '\'\'All around me are empty husks, soulless and unafraid... but I will bring them fear.\'\'<br><br>Maokai is a rageful, towering treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a magical ...',
    info: {
      attack: 3,
      defense: 8,
      magic: 6,
      difficulty: 3
    },
    tags: ['Tank', 'Mage'],
    partype: 'MP',
    stats: {
      hp: 572.2,
      hpperlevel: 90,
      mp: 377.28,
      mpperlevel: 43,
      movespeed: 335,
      armor: 28.72,
      armorperlevel: 4,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 7,
      hpregenperlevel: 0.75,
      mpregen: 7.205,
      mpregenperlevel: 0.45,
      crit: 0,
      critperlevel: 0,
      attackdamage: 63.544,
      attackdamageperlevel: 3.3,
      attackspeedoffset: -0.1,
      attackspeedperlevel: 2.125
    }
  },
  {
    version: '6.24.1',
    id: 'MonkeyKing',
    key: '62',
    name: 'Wukong',
    title: 'the Monkey King',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/MonkeyKing.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg',
    blurb:
      'During the chaos of the Rune Wars, an enormous runestone was lost deep within the Plague Jungles. It remained there, untouched for centuries, emanating a potent magic which infused nearby wildlife with sentience and vitality. A group of monkeys who ...',
    info: {
      attack: 8,
      defense: 5,
      magic: 2,
      difficulty: 3
    },
    tags: ['Fighter', 'Tank'],
    partype: 'MP',
    stats: {
      hp: 577.8,
      hpperlevel: 85,
      mp: 265.84,
      mpperlevel: 38,
      movespeed: 345,
      armor: 24.88,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 175,
      hpregen: 6.19,
      hpregenperlevel: 0.65,
      mpregen: 8.04,
      mpregenperlevel: 0.65,
      crit: 0,
      critperlevel: 0,
      attackdamage: 59.876,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.05,
      attackspeedperlevel: 3
    }
  },
  {
    version: '6.24.1',
    id: 'Nasus',
    key: '75',
    name: 'Nasus',
    title: 'the Curator of the Sands',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Nasus.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg',
    blurb:
      '\'\'What was fallen will be great again.\'\'<br><br>Nasus is an imposing, jackal-headed Ascended being from ancient Shurima, a heroic figure regarded as a demigod by the people of the desert. Fiercely intelligent, he was a guardian of knowledge and ...',
    info: {
      attack: 7,
      defense: 5,
      magic: 6,
      difficulty: 6
    },
    tags: ['Fighter', 'Tank'],
    partype: 'MP',
    stats: {
      hp: 561.2,
      hpperlevel: 90,
      mp: 325.6,
      mpperlevel: 42,
      movespeed: 350,
      armor: 24.88,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 9.01,
      hpregenperlevel: 0.9,
      mpregen: 7.44,
      mpregenperlevel: 0.5,
      crit: 0,
      critperlevel: 0,
      attackdamage: 59.18,
      attackdamageperlevel: 3.5,
      attackspeedoffset: -0.02,
      attackspeedperlevel: 3.48
    }
  }
];
const output1 = [
  {
    version: '6.24.1',
    id: 'Maokai',
    key: '57',
    name: 'Maokai',
    title: 'the Twisted Treant',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Maokai.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg',
    blurb:
      '\'\'All around me are empty husks, soulless and unafraid... but I will bring them fear.\'\'<br><br>Maokai is a rageful, towering treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a magical ...',
    info: {
      attack: 3,
      defense: 8,
      magic: 6,
      difficulty: 3
    },
    tags: ['Tank', 'Mage'],
    partype: 'MP',
    stats: {
      hp: 572.2,
      hpperlevel: 90,
      mp: 377.28,
      mpperlevel: 43,
      movespeed: 335,
      armor: 28.72,
      armorperlevel: 4,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 7,
      hpregenperlevel: 0.75,
      mpregen: 7.205,
      mpregenperlevel: 0.45,
      crit: 0,
      critperlevel: 0,
      attackdamage: 63.544,
      attackdamageperlevel: 3.3,
      attackspeedoffset: -0.1,
      attackspeedperlevel: 2.125
    }
  },
  {
    version: '6.24.1',
    id: 'Nasus',
    key: '75',
    name: 'Nasus',
    title: 'the Curator of the Sands',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Nasus.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg',
    blurb:
      '\'\'What was fallen will be great again.\'\'<br><br>Nasus is an imposing, jackal-headed Ascended being from ancient Shurima, a heroic figure regarded as a demigod by the people of the desert. Fiercely intelligent, he was a guardian of knowledge and ...',
    info: {
      attack: 7,
      defense: 5,
      magic: 6,
      difficulty: 6
    },
    tags: ['Fighter', 'Tank'],
    partype: 'MP',
    stats: {
      hp: 561.2,
      hpperlevel: 90,
      mp: 325.6,
      mpperlevel: 42,
      movespeed: 350,
      armor: 24.88,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 9.01,
      hpregenperlevel: 0.9,
      mpregen: 7.44,
      mpregenperlevel: 0.5,
      crit: 0,
      critperlevel: 0,
      attackdamage: 59.18,
      attackdamageperlevel: 3.5,
      attackspeedoffset: -0.02,
      attackspeedperlevel: 3.48
    }
  },
  {
    version: '6.24.1',
    id: 'MonkeyKing',
    key: '62',
    name: 'Wukong',
    title: 'the Monkey King',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/MonkeyKing.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg',
    blurb:
      'During the chaos of the Rune Wars, an enormous runestone was lost deep within the Plague Jungles. It remained there, untouched for centuries, emanating a potent magic which infused nearby wildlife with sentience and vitality. A group of monkeys who ...',
    info: {
      attack: 8,
      defense: 5,
      magic: 2,
      difficulty: 3
    },
    tags: ['Fighter', 'Tank'],
    partype: 'MP',
    stats: {
      hp: 577.8,
      hpperlevel: 85,
      mp: 265.84,
      mpperlevel: 38,
      movespeed: 345,
      armor: 24.88,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 175,
      hpregen: 6.19,
      hpregenperlevel: 0.65,
      mpregen: 8.04,
      mpregenperlevel: 0.65,
      crit: 0,
      critperlevel: 0,
      attackdamage: 59.876,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.05,
      attackspeedperlevel: 3
    }
  },
];
const output2 = [
  {
    version: '6.24.1',
    id: 'MonkeyKing',
    key: '62',
    name: 'Wukong',
    title: 'the Monkey King',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/MonkeyKing.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg',
    blurb:
      'During the chaos of the Rune Wars, an enormous runestone was lost deep within the Plague Jungles. It remained there, untouched for centuries, emanating a potent magic which infused nearby wildlife with sentience and vitality. A group of monkeys who ...',
    info: {
      attack: 8,
      defense: 5,
      magic: 2,
      difficulty: 3
    },
    tags: ['Fighter', 'Tank'],
    partype: 'MP',
    stats: {
      hp: 577.8,
      hpperlevel: 85,
      mp: 265.84,
      mpperlevel: 38,
      movespeed: 345,
      armor: 24.88,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 175,
      hpregen: 6.19,
      hpregenperlevel: 0.65,
      mpregen: 8.04,
      mpregenperlevel: 0.65,
      crit: 0,
      critperlevel: 0,
      attackdamage: 59.876,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.05,
      attackspeedperlevel: 3
    }
  },
  {
    version: '6.24.1',
    id: 'Nasus',
    key: '75',
    name: 'Nasus',
    title: 'the Curator of the Sands',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Nasus.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg',
    blurb:
      '\'\'What was fallen will be great again.\'\'<br><br>Nasus is an imposing, jackal-headed Ascended being from ancient Shurima, a heroic figure regarded as a demigod by the people of the desert. Fiercely intelligent, he was a guardian of knowledge and ...',
    info: {
      attack: 7,
      defense: 5,
      magic: 6,
      difficulty: 6
    },
    tags: ['Fighter', 'Tank'],
    partype: 'MP',
    stats: {
      hp: 561.2,
      hpperlevel: 90,
      mp: 325.6,
      mpperlevel: 42,
      movespeed: 350,
      armor: 24.88,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 9.01,
      hpregenperlevel: 0.9,
      mpregen: 7.44,
      mpregenperlevel: 0.5,
      crit: 0,
      critperlevel: 0,
      attackdamage: 59.18,
      attackdamageperlevel: 3.5,
      attackspeedoffset: -0.02,
      attackspeedperlevel: 3.48
    }
  },
  {
    version: '6.24.1',
    id: 'Maokai',
    key: '57',
    name: 'Maokai',
    title: 'the Twisted Treant',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Maokai.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg',
    blurb:
      '\'\'All around me are empty husks, soulless and unafraid... but I will bring them fear.\'\'<br><br>Maokai is a rageful, towering treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a magical ...',
    info: {
      attack: 3,
      defense: 8,
      magic: 6,
      difficulty: 3
    },
    tags: ['Tank', 'Mage'],
    partype: 'MP',
    stats: {
      hp: 572.2,
      hpperlevel: 90,
      mp: 377.28,
      mpperlevel: 43,
      movespeed: 335,
      armor: 28.72,
      armorperlevel: 4,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 7,
      hpregenperlevel: 0.75,
      mpregen: 7.205,
      mpregenperlevel: 0.45,
      crit: 0,
      critperlevel: 0,
      attackdamage: 63.544,
      attackdamageperlevel: 3.3,
      attackspeedoffset: -0.1,
      attackspeedperlevel: 2.125
    }
  }
];


describe('filterData', () => {
  it('debería ser una función', () => {
    expect(typeof Globalda.filterData).toBe('function');
  });

  it('Esta funcion deberia filtrar por roles', () => {
    expect(Globalda.filterData([{ tags: "Mage"}, { tags: "Assassin"}, { name: "Aatrox", tags: "Tank"}], "Tank")).toEqual([]); 
  });
});
describe('sortData', () => {
  it('debería ser una función', () => {
    expect(typeof Globalda.sortData).toBe('function');
  });

  it('debería retornar los campeones en orden A-Z', () => {
    expect(Globalda.sortData(inputTags, 'Tank', "1")).toEqual(output1);
  });

  it('debería retornar los campeones en orden Z-A', () => {
    expect(Globalda.sortData(inputTags, 'Tank', "2")).toEqual(output2);
  });

  it('debería retornar un objeto segun la condición', () => {
    expect(Globalda.sortData(inputTags, 'All',"1")).toBe(inputTags);
  });
});
describe('computeStats', () => {
  it('debería ser una función', () => {
    expect(typeof Globalda.computeStats).toBe('function');
  });

  it('debería retornar el promedio de los campeones', () => {
    expect(Globalda.computeStats(input)).toEqual("546.67");
  });
});