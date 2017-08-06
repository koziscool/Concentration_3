
var matcherModel = {

    size: 4,
    cardValues: [ "A", "B", "C", "D", "E", "F", "G", "H" ],
    cards: [],
    totalCards: 0,
    currentId: 1,

    init: function(size) {
        this.size = size || this.size;
        var totalPairs = Math.pow(this.size, 2) / 2;
        for( var i = 0; i < totalPairs; i++  ) {
            this.addPair();
        }
    },

    addPair: function() {
        var value = this.randomValue();
        this.cards.push( new this.Card( this.getId(), value));
        this.cards.push( new this.Card( this.getId(), value));
        this.totalCards += 2;
    },

    randomValue: function() {
        return this.cardValues[ Math.floor(Math.random() * this.cardValues.length)];
    },

    getId: function(){
        var id = this.currentId;
        this.currentId++;
        return id;
    },

    Card: function( id, value ) {
        this.id = id;
        this.value = value;

        this.matches = function(otherCard) {
            return this.value === otherCard.value
        }

    }


};