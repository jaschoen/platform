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
    for(j=0; j< 4; j++){
        var row = [];
        // for each column
        for (i = 0; i < 4; i++) {
            //fetch all 4 col html data for each row, store in row array
            row[i] = $('#row'+j).children(".col" + i).html();
        }
        //transform data
        row = move(row);
        // set row array back into table
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
        row = move(row);
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

// var move = function(row) {
//     var output = ["*", "*", "*", "*"];
//     var next_open = 0;
//     for (i=0; i<4; i++) {
//         if (row[i] != '*') {
//             if (row[i] == row[i+1]) {
//                 output[next_open] = (row[i] * 2).toString();
//                 row[i] = '*';
//                 row[i+1] = '*';
//                 next_open = next_open + 1;
//             } else if (row[i] == row[i+2]) {
//                 output[next_open] = (row[i] * 2).toString();
//                 row[i] = '*';
//                 row[i+2] = '*';
//                 next_open = next_open + 1;
//             } else if (row[i] == row[i+3]) {
//                 output[next_open] = (row[i] * 2).toString();
//                 row[i] = '*';
//                 row[i+3] = '*';
//                 next_open = next_open + 1;
//             } else {
//                 output[next_open] = row[i];
//                 next_open = next_open + 1;
//             }
//         }

//     }
//     return(output);
// };

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




