$(document).keyup(function(e) {
    switch(e.which) {
        case 37: // left
        left();
        break;

        case 38: // up
        up();
        break;

        case 39: // right
        right();
        break;

        case 40: // down
        down();
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});



var youWin = function() {
    for(var x=0; x<4; x++){
        for(var y=0; y<4; y++){
            if($('#Y'+y).children(".X"+x).html() == "2048"){
                alert("you win");
            }
        }
    }
};

var youLose = function() {
    var lose = true;
    for(var x=0; x<4; x++){
        for(var y=0; y<4; y++){
            if($('#Y'+y).children(".X"+x).html() == "*"){
                lose = false;
            }
        }
    }
    if(lose){
        alert("you lose");
    }

};

var addSquare = function() {
    var openSquare = [];
    for(var x=0; x<4; x++){
        for(var y=0; y<4; y++){
            if($('#Y'+y).children(".X"+x).html() == "*"){
                openSquare.push([x, y]);
            }
        }
    }
    var randomIndex = Math.floor(Math.random() * openSquare.length); 
    var twoOrFour = Math.round(Math.random()) * 2 + 2;
    $('#Y'+ openSquare[randomIndex][1]).children(".X" + openSquare[randomIndex][0]).html(twoOrFour.toString());

};

var endTurn = function() {
    youWin();
    youLose();
    addSquare();
};








    


