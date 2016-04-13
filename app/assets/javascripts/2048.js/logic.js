
var Logic = function() {};

// Logic.prototype.update = function(board, direction) {
//     switch(direction) {
//         case 'up':
//             break;
//         case 'down':
//             break;
//         case 'left':
//             break;
//         case 'right':
//             break;
//     }
// };

// Logic.prototype.left = function(board) {
//     var boardArray = board.state;
//     var output = [];
//     for (var i=0; i<boardArray.length; i++) {
//         if (i % 4 == 0) {
//             var row = [];
//             for (var j = 0; j<4; j++) { 
//                 row[j] = boardArray[i+j];
//             }
//             row = this.compress(row);
//             // console.log(this);
//             while(row.length > 0){
//                 output.push(row.unshift());
//             }
//         }   

//     }
//     return board;
//     // console.log(this.compress(board));

// };
Logic.prototype.compress = function(row) {
    // filter out nulls's
    row = row.filter(function(x) {return x != null;});
    //double/delete/loop
    var i = 0;
    while (i < row.length) {
        if (row[i] == row[i+1]) {
            row[i] = (row[i]*2);
            row.splice(i + 1, 1);
        }
        i++;
    }
    // pad it out
    var j = row.length;
    while (j < 4) {
        row.push(null);
        j++;
    }
    // return it
    return row;
};

Logic.prototype.grabFromLeft = function(boardArray) {
    var rows = [];
    while (boardArray.length > 0) {
        rows.push(boardArray.splice(0, 4));
    }
    return rows;
};

Logic.prototype.grabFromRight = function(boardArray) {
    var rows = [];
    while (boardArray.length > 0) {
        rows.push(boardArray.splice(0, 4).reverse());
    }
    return rows;
};
Logic.prototype.grabFromTop = function(boardArray) {
    var rows = [];
    for (var i = 0; i < 4; i++) {
        var row = [];
        for (var j=0; j < boardArray.length; j++){
            if (j % 4 == i){
                row.push(boardArray[j]);
            }
        }
        rows.push(row);
    }
    
    return rows;
};
Logic.prototype.grabFromBottom = function(boardArray) {
    var rows = [];
    for (var i = 0; i < 4; i++) {
        var row = [];
        for (var j=0; j < boardArray.length; j++){
            if (j % 4 == i){
                row.push(boardArray[j]);
            }
        }
        rows.push(row.reverse());
    }
    
    return rows;
};

Logic.prototype.assembleLeft = function(rows) {
    var output = [];
    for(i=0; i < 4; i++) {
        for(j=0; j < 4; j++) {
            output.push(rows[i][j]);       
        }
    }
    return output;
};
Logic.prototype.assembleRight = function(rows) {
    var output = [];
    for(i=0; i < 4; i++) {
        for(j=3; j >= 0; j--) {
            output.push(rows[i][j]);       
        }
    }
    return output;
};

Logic.prototype.assembleTop = function(rows){
    // console.log(rows);
    var output = [];
    for (var i = 0; i < 4; i++){
        for(var j=0; j < 4; j++){
            output.push(rows[j][i]);
        }    
    }
    return output;
};

Logic.prototype.assembleBottom = function(rows){
    var output = [];
    for (var i = 0; i < 4; i++){
        for (var j=3; j>=0; j--){
            output.push(rows[j][i]);
        }
    }
    return output.reverse();
};

Logic.prototype.left = function(board){
    var nestedRows  = this.grabFromLeft(board.state);
    var permutatedRows = [];
    for (var i=0; i < 4; i++) {
        permutatedRows[i] = this.compress(nestedRows[i]);
    }
    board.state = this.assembleLeft(permutatedRows);
    return board;
};

Logic.prototype.right = function(board){
    var nestedRows  = this.grabFromRight(board.state);
    var permutatedRows = [];
    for (var i=0; i < 4; i++) {
        permutatedRows[i] = this.compress(nestedRows[i]);
    }
    board.state = this.assembleRight(permutatedRows);
    return board;
};

Logic.prototype.top = function(board){
    var nestedRows  = this.grabFromTop(board.state);
    var permutatedRows = [];
    for (var i=0; i < 4; i++) {
        permutatedRows[i] = this.compress(nestedRows[i]);
    }
    board.state = this.assembleTop(permutatedRows);
    return board;
};
Logic.prototype.bottom = function(board){
    var nestedRows  = this.grabFromBottom(board.state);
    var permutatedRows = [];
    for (var i=0; i < 4; i++) {
        permutatedRows[i] = this.compress(nestedRows[i]);
    }
    board.state = this.assembleBottom(permutatedRows);
    return board;
};
// var test = function()

// board.state = output;
// return board;
// };
// // var update = function(board, direction) {
// //     switch(direction) {
// //         case 'up':
// //             break;
// //         case 'down':
// //             break;
// //         case 'left':
// //             break;
// //         case 'right':
// //             break;
// //     }
// // };
// // left = function(board) {
// //     var boardArray = board.state;
// //     var output = [];
// //     for (var i=0; i<boardArray.length; i++) {
// //         if (i % 4 == 0) {
// //             var row = [];
// //             for (var j = 0; j<4; j++) { 
// //                 row[j] = boardArray[i+j];
// //             }
// //             row = compress(row);
// //             while(row.length > 0){
// //                 output.push(row.unshift());
// //             }
// //         }   
// //         // if (i/4 == 1) {}
// //         // if (i/4 == 2) {}
// //         // if (i/4 == 3) {}
// //     }
// //     // // for each row
// //     // for(var y=0; y<4; y++){
// //     //     var row = [];
// //     //     // for each column
// //     //     for (var x = 0; x < 4; x++) {
// //     //         //fetch all 4 col html data for each row, store in row array
// //     //         row.push($('#Y'+y).children(".X" + x).html());
// //     //     }
// //     //     //transform data
// //     //     row = move(row);
// //     //     // set row array back into table
// //     //     for (var x = 0; x < 4; x++){
// //     //         $('#Y'+y).children(".X" + x).html(row.shift());
// //     //     }
// //     // }        
// //     // endTurn();
// // board.state = output;
// // return board;
// // };

// // var right = function() {
     
// //     for(var y=0; y<4; y++){
// //         var row =[];
// //         for(var x=3; x>=0; x--){
// //             row.push($('#Y'+y).children(".X"+x).html());
// //         }

// //         row = move(row);

// //         for (var x=3; x>=0; x--){
// //             $('#Y'+y).children(".X"+x).html(row.shift());
// //         }
// //     } 
// //     endTurn();
// // };

// // var up = function() {
// //     for (var x=0; x<4; x++){
// //         var row = [];
// //         for (var y=3; y>=0; y--){
// //             row.push($('#Y'+y).children(".X"+x).html());
// //         }

// //         row = move(row);

// //         for(var y=3; y>=0; y--){
// //             $('#Y'+y).children(".X"+x).html(row.shift());
// //         }
// //     } 
// //     endTurn();

// // };

// // var down = function() {
// //     for (var x=0; x<4; x++){
// //         var row = [];
// //         for (var y=0; y<4; y++){
// //             row.push($('#Y'+y).children(".X"+x).html());
// //         }
// //         row = move(row);
// //         for(var y=0; y<4; y++){
// //             $('#Y'+y).children(".X"+x).html(row.shift());
// //         }
// //     }
// //     endTurn();
// // };




