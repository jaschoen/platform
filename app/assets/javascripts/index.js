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

    for(j=0; j< 4; j++){
        var row = [];
        for (i = 0; i < 4; i++) {
            row[i] = $('#row'+j).children(".col" + i).html();
        }
        row = move(row);
        for (i = 0; i < 4; i++){
            $('#row'+j).children(".col" + i).html(row[i]);
        }
    }        
};

var right = function() {

    for(j=0; j< 4; j++){
        var row = [];
        for (i = 0; i < 4; i++) {
            row[i] = $('#row'+j).children(".col" + i).html();
        }
        row = move(row.reverse());
        for (i = 0; i < 4; i++){
            $('#row'+j).children(".col" + i).html(row[i]);
        }
    }         
};

var up = function() {
    for (j=0; j<4; j++) {
        var row = [];
        for (i=0; i<4; i++) {
            row[i] = $('#row'+i).children(".col" + j).html();
        }
        row = move(row);
        for (i = 0; i < 4; i++){
            $('#row'+i).children(".col" + j).html(row[i]);
        }

    } 

};

var down = function() {
    for (j=0; j<4; j++) {
        var row = [];
        for (i=0; i<4; i++) {
            row[i] = $('#row'+i).children(".col" + j).html();
        }
        row = move(row.reverse());
        for (i = 0; i < 4; i++){
            $('#row'+i).children(".col" + j).html(row[i]);
        }

    } 

};

var move = function(row) {
    var output = ["*", "*", "*", "*"];
    var next_open = 0;
    for (i=0; i<4; i++) {
        if (row[i] != '*') {
            if (row[i] == row[i+1]) {
                output[next_open] = (row[i] * 2).toString();
                row[i] = '*';
                row[i+1] = '*';
                next_open = next_open + 1;
            } else if (row[i] == row[i+2]) {
                output[next_open] = (row[i] * 2).toString();
                row[i] = '*';
                row[i+2] = '*';
                next_open = next_open + 1;
            } else if (row[i] == row[i+3]) {
                output[next_open] = (row[i] * 2).toString();
                row[i] = '*';
                row[i+3] = '*';
                next_open = next_open + 1;
            } else {
                output[next_open] = row[i];
                next_open = next_open + 1;
            }
        }

    }
    return(output);
};

var test1 = ["1", "1", "2", "2"];
var test2 = ["1", "1", "1", "2"];
var test3 = ["1", "*", "*", "1"];
var test4 = ["1", "2", "3", "*"];
var test5 = ["*", "1", "*", "*"];
var test6 = ["*", "*", "*", "*"];

// steps
// earliest open space = 0
// 1. given a position, check if blank
//     if number check if next is same
//         if same 
//             double value, 
//             delete position, 
//             delete postion +1, 
//             assign value to earliest open space
//             earliest open space +=1
//         if different
//             assign value to earlies open space
//             earliest open space +=1
//     if blank
//         next
// 2. check if blank
//     if number check if next is same
//         if same 
//             double position, put '*' in next position
//         if different && 





