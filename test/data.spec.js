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
const output= [{
  version: "6.24.1",
  id: "Aatrox",
  key: "266",
  name: "Aatrox",
  title: "the Darkin Blade",
  img:
    "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
  splash:
    "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
  blurb:
    "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
  info: {
    attack: 8,
    defense: 4,
    magic: 3,
    difficulty: 4
  },
  image: {
    full: "Aatrox.png",
    sprite: "champion0.png",
    group: "champion",
    x: 0,
    y: 0,
    w: 48,
    h: 48
  },
  tags: ["Fighter", "Tank"],
  partype: "BloodWell",
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
}]
const conditionFilter="Tank";
const output2=[{
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
}]

const output3=[
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

describe('filterData', () => {
  
  it('debería ser una función', () => {
    expect(typeof Globalda.filterData).toBe('function');
  });

   it('debería retornar un objeto segun la condición', () => {
     expect(Globalda.filterData(input,conditionFilter)).toEqual(output);
   });
});
describe('sortData', () => {
  
  it('debería ser una función', () => {
    expect(typeof Globalda.sortData).toBe('function');
  });

   it('debería retornar un objeto segun la condición', () => {
     expect(Globalda.sortData(input,'tags',2)).toEqual(output2);
   });

   it('debería retornar un objeto segun la condición', () => {
    expect(Globalda.sortData(input,'tags',1)).toEqual(output3);
  });

  it('debería retornar un objeto segun la condición', () => {
    expect(Globalda.sortData(input,'All')).toEqual(output3);
  });

  it('debería retornar un objeto segun la condición', () => {
    expect(Globalda.sortData(input,'tags',1)).toEqual(-1);
  });

  it('debería retornar un objeto segun la condición', () => {
    expect(Globalda.sortData(input,'tags',2)).toEqual(1);
  });

});
describe('computeStats', () => {
  
  it('debería ser una función', () => {
    expect(typeof Globalda.computeStats).toBe('function');
  });

   it('debería retornar un objeto segun la condición', () => {
     expect(Globalda.computeStats(input)).toEqual("544.45");
   });
});
