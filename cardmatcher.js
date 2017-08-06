

$(document).ready( function(){
    $('input[type=submit]').click( function(e) {
        e.preventDefault();
        var size=$('#grid_size').val();
        matcherController.init(size);
        $(this).closest('form').hide();
        matcherView.updateGameView();
    }); 
});


