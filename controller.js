
var matcherController = {

    model: matcherModel,
    view: matcherView,
    selecting: false,

    init:function( size ) {
        this.model.init(size);
        this.view.init();
    }, 

    selectCard: function( cardId ){
        if( this.selecting ) return;
        this.selecting = true;

        if( this.model.sameCard( cardId ) ){
            this.selecting = false;
            return;
        }

        this.view.revealCard( cardId );

        if( this.model.selectedCard ){
            var selectedCard = this.model.selectedCard;
            var correct = this.model.checkGuess(cardId);
            this.view.updateGameView();
            var that = this;
        }

    }

};