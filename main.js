var adjectives = ["n ambitious", " shockingly beautiful", " brilliant", " reclusive but clever", "n unremarkable", " cunning", " bewitching", " rambunctious", "n impossibly small", " sweet and lovable", "n alarmingly large", " secretive", " small but powerful", " brave", "n unsuspecting", " mischievous"];
var subjects = ["girl", "dog", "monster", "tuna thief", "goat", "coyote wrangler", "boy", "scullery maid", "nerd", "beach bum", "princess", "prince", "wizard", "sorceress", "Dragonrider", "witch"];
var verbclauses = ["break a curse", "eat a magic lemon", "smoke a tainted turkey", "find the king's car keys", "deliver a secret valentine", "find the lost parakeet of Prince Halpert", "twist and shout", "solve for X", "locate the magic rattle", "unlock a parallel universe", "recover the family jewels", "enchant a terrible ogre", "tickle the ivories", "tame the fierce dragon Kolwandon", "learn to talk with the elves", "steal the Goblin Queen's crown", "capture the troublesome trolls", "outsmart the ogres of Oolystria", "repair a rift in the space-time continuum", "prepare a secret potion"];
var verbphrase =["save the kingdom", "prepare the sacrifice", "guild the Lily of Langouardia", "ferment the grape", "reach for the stars", "ease the pain", "oil the hinge", "end the world", "find inner peace at long last", "bake the world's best gluten-free cake", "open the gates to a shiny new Australia", "appease the gods and goddesses", "discover the answer to life, the universe, and everything", "win the race", "unlock the Vault of Vitality", "free the dragons", "save Prince Beautiful", "rescue Princess Strongheart", "get straight A's and graduate with honors", "become a Champion", "break the spell", "free Princess Bravefoot", "liberate Prince Darling", "find true love", "collect the royal reward", "win the lottery", "defeat the dangerous dongle", "unlock the Powers of Peltzan", "live happily ever after", "earn the respect and love of the curmudgeonly king"];

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function nextChoice(choicesArray){
  return choicesArray[getRandomArbitrary(0, choicesArray.length)];
}

function setValue(elementId, choicesArray){
  document.querySelector(elementId).textContent = nextChoice(choicesArray);
}

function roll(){
  setValue("#adjective1", adjectives);
  setValue("#subject1", subjects);
  setValue("#verbclause1", verbclauses);
  setValue("#verbphrase1", verbphrase);
}