function Deck(initializingArray) {

    this.orderedArray = initializingArray;

    this.index = -1;

    this.shuffle = function () {
        for (var i = 0; i < this.orderedArray.length; i++) {
            var a = 0;
            var b = 0;
            while (a == b) {
                a = this.getRandomArbitrary(0, this.orderedArray.length);
                b = this.getRandomArbitrary(0, this.orderedArray.length);
            }
            var c = this.orderedArray[a];
            this.orderedArray[a] = this.orderedArray[b];
            this.orderedArray[b] = c;
        }
    };

    this.getRandomArbitrary = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };

    this.nextChoice = function () {
        this.index++;
        if (this.index == this.orderedArray.length) {
            this.index = 0;
            this.shuffle();
        }
        return this.orderedArray[this.index];
    }
}

var adverbDeck = new Deck([
    " shockingly"
    , " reclusive but"
    , "n impossibly"
    , " sweet and"
    , "n alarmingly"
    , " small but"
    , "n unexpectedly"
    , " remarkably"
    , " staggeringly"
]);

var adjectiveDeck = new Deck([
    "ambitious"
    , "beautiful"
    , "brilliant"
    , "clever"
    , "unremarkable"
    , "cunning"
    , "popular"
    , "rowdy"
    , "tiny"
    , "lovable"
    , "large"
    , "secretive"
    , "powerful"
    , "brave"
    , "mischievous"
    , "wicked"
    , "ordinary"
    , "average"
]);

var subjectDeck = new Deck([
    "girl"
    , "dog"
    , "monster"
    , "tuna thief"
    , "goat"
    , "coyote wrangler"
    , "boy"
    , "scullery maid"
    , "nerd"
    , "beach bum"
    , "princess"
    , "prince"
    , "wizard"
    , "sorceress"
    , "Dragonrider"
    , "witch"
]);

var verbClauseDeck = new Deck([
    "break a curse"
    , "eat a magic lemon"
    , "smoke a tainted turkey"
    , "ferment the royal grapes"
    , "find the king's car keys"
    , "deliver a secret valentine"
    , "find the lost parakeet of Prince Halpert"
    , "twist and shout"
    , "solve for X"
    , "locate the magic rattle"
    , "unlock a parallel universe"
    , "recover the family jewels"
    , "enchant a terrible ogre"
    , "tickle the ivories"
    , "tame the fierce dragon Kolwandon"
    , "learn to talk with the elves"
    , "steal the Goblin Queen's crown"
    , "capture the troublesome trolls"
    , "outsmart the ogres of Oolystria"
    , "repair a rift in the space-time continuum"
    , "prepare a secret potion"
]);

var verbPhraseDeck = new Deck([
    "save the kingdom"
    , "prepare the sacrifice"
    , "guild the Lily of Langouardia"
    , "reach for the stars"
    , "ease the pain"
    , "oil the hinge"
    , "end the world"
    , "find inner peace"
    , "bake the world's best gluten-free cake"
    , "open the gates to a shiny new Australia"
    , "appease the gods and goddesses"
    , "discover the answer to life, the universe, and everything"
    , "win the race"
    , "unlock the Vault of Vitality"
    , "free the dragons"
    , "save Prince Beautiful"
    , "rescue Princess Strongheart"
    , "graduate with honors"
    , "become a Champion"
    , "break the spell"
    , "free Princess Bravefoot"
    , "liberate Prince Darling"
    , "find true love"
    , "collect the royal reward"
    , "win the lottery"
    , "defeat the dangerous dongle"
    , "unlock the Powers of Peltzan"
    , "live happily ever after"
    , "earn the respect and love of the curmudgeonly king"
]);

function roll() {
    $("#story1").css("visibility", "visible");
    $("#adverb1").text(adverbDeck.nextChoice());
    $("#adjective1").text(adjectiveDeck.nextChoice());
    $("#subject1").text(subjectDeck.nextChoice());
    $("#verbclause1").text(verbClauseDeck.nextChoice());
    $("#verbphrase1").text(verbPhraseDeck.nextChoice());
}
