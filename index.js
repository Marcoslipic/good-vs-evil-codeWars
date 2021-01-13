const creature = {
    good_creatures: {
    hobbits: 1,
    men: 2,
    elves: 3,
    dwarves: 3,
    eagles: 4,
    wizards: 10
    },
    evil_creatures: {
      orcs: 1,
      men: 2,
      wargs: 2,
      goblins: 2,
      uruk_hai: 3,
      trolls: 5,
      wizards: 10
    }
  }
  
  function goodVsEvil(good, evil){
    const goodArray = good.split(' ');
    const evilArray = evil.split(' '); 
    
    const hobbitsWorth = creature["good_creatures"]["hobbits"] * goodArray[0]
    const goodMenWorth = creature["good_creatures"]["men"] * goodArray[1]
    const elvesWorth = creature["good_creatures"]["elves"] * goodArray[2]
    const dwarvesWorth = creature["good_creatures"]["dwarves"] * goodArray[3]
    const eaglesWorth = creature["good_creatures"]["eagles"] * goodArray[4]
    const goodWizardsWorth = creature["good_creatures"]["wizards"] * goodArray[5]
    
    const totalGoodWorth = hobbitsWorth + goodMenWorth + elvesWorth + dwarvesWorth + eaglesWorth + goodWizardsWorth
    
    const orcsWorth = creature["evil_creatures"]["orcs"] * evilArray[0]
    const evilMenWorth = creature["evil_creatures"]["men"] * evilArray[1]
    const wargsWorth = creature["evil_creatures"]["wargs"] * evilArray[2]
    const goblinsWorth = creature["evil_creatures"]["goblins"] * evilArray[3]
    const urukHaiWorth = creature["evil_creatures"]["uruk_hai"] * evilArray[4]
    const trollsWorth = creature["evil_creatures"]["trolls"] * evilArray[5]
    const evilWizardsWorth = creature["evil_creatures"]["wizards"] * evilArray[6]
    
    const totalEvilWorth = orcsWorth + evilMenWorth + wargsWorth + goblinsWorth + urukHaiWorth + trollsWorth + evilWizardsWorth
    
    if (totalGoodWorth === totalEvilWorth){
      return 'Battle Result: No victor on this battle field'
    }
    
    const battleResults = (totalGoodWorth > totalEvilWorth) ? "Battle Result: Good triumphs over Evil" : "Battle Result: Evil eradicates all trace of Good"
  
    return battleResults
  }

