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

var left = function() {
    // for each row
    for(var y=0; y<4; y++){
        var row = [];
        // for each column
        for (var x = 0; x < 4; x++) {
            //fetch all 4 col html data for each row, store in row array
            row.push($('#Y'+y).children(".X" + x).html());
        }
        //transform data
        row = move(row);
        // set row array back into table
        for (var x = 0; x < 4; x++){
            $('#Y'+y).children(".X" + x).html(row.shift());
        }
    }        
    endTurn();
};

var right = function() {
     
    for(var y=0; y<4; y++){
        var row =[];
        for(var x=3; x>=0; x--){
            row.push($('#Y'+y).children(".X"+x).html());
        }

        row = move(row);

        for (var x=3; x>=0; x--){
            $('#Y'+y).children(".X"+x).html(row.shift());
        }
    } 
    endTurn();
};

var up = function() {
    for (var x=0; x<4; x++){
        var row = [];
        for (var y=3; y>=0; y--){
            row.push($('#Y'+y).children(".X"+x).html());
        }

        row = move(row);

        for(var y=3; y>=0; y--){
            $('#Y'+y).children(".X"+x).html(row.shift());
        }
    } 
    endTurn();

};

var down = function() {
    for (var x=0; x<4; x++){
        var row = [];
        for (var y=0; y<4; y++){
            row.push($('#Y'+y).children(".X"+x).html());
        }
        row = move(row);
        for(var y=0; y<4; y++){
            $('#Y'+y).children(".X"+x).html(row.shift());
        }
    }
    endTurn();
};

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

var test0  = ["*", "1", "*", "*"];  
var test1  = ["1", "1", "*", "*"];
var test2  = ["*", "*", "1", "2"];
var test3  = ["1", "1", "*", "1"];
var test4  = ["1", "2", "1", "*"];
var test5  = ["1", "1", "1", "1"];
var test6  = ["1", "1", "2", "2"];
var test7  = ["1", "2", "2", "1"];
var test8  = ["1", "2", "3", "4"];
var test9  = ["1", "2", "3", "3"];
var test10 = ["1", "1", "3", "4"];



var move = function(row) {
    // filter out *'s
    row = row.filter(function(x) {return x != '*';});
    //double/delete/loop
    var i = (row.length - 1);
    while (i > 0) {
        if (row[i] == row[i-1]) {
            row[i-1] = (row[i-1]*2).toString();
            row.splice(i, 1);
            i--;
        }
        i--;
    }
    // pad it out
    var j = row.length;
    while (j < 4) {
        row.push('*');
        j++;
    }
    // return it
    return row;
};




