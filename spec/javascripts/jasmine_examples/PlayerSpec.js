// describe("Compress", function() {
// var test00 = ["1", "*", "*", "*"];  
// var test0  = ["*", "1", "*", "*"];  
// var test1  = ["1", "1", "*", "*"];
// var test2  = ["*", "*", "1", "2"];
// var test3  = ["1", "1", "*", "1"];
// var test4  = ["1", "2", "1", "*"];
// var test5  = ["1", "1", "1", "1"];
// var test6  = ["1", "1", "2", "2"];
// var test7  = ["1", "2", "2", "1"];
// var test8  = ["1", "2", "3", "4"];
// var test9  = ["1", "2", "3", "3"];
// var test10 = ["1", "1", "3", "4"];


//   describe("1 spot", function() {
//     it("returns array if at front", function() {
//       expect(compress(test00)).toEqual(['1', '*', '*', '*']);
//     }); 
//     it("compresss to first position, fills remainder", function() {
//       expect(compress(test0)).toEqual(['1', '*', '*', '*']);
//     });

//   });

//   describe("2 spots", function() {
//     it("2 same, merges and fills", function() {
//       expect(compress(test1)).toEqual(['2', '*', '*', '*']);
//     });
//     it("2 unique, compress and fill", function() {
//       expect(compress(test2)).toEqual(['1', '2', '*', '*']);
//     });

//   });

//   describe("3 spots", function() {
//     it("all the same", function() {
//       expect(compress(test3)).toEqual(['1', '2','*', '*']);
//     });
//     it("1 2 1", function() {
//       expect(compress(test4)).toEqual(["1", "2", "1", "*"]);
//     });
//   });

//   describe("4 spots", function() {
//     it("all same", function() {
//       expect(compress(test5)).toEqual(['2', '2','*', '*']);
//     });
//     it("2 same 2 different", function() {
//       expect(compress(test6)).toEqual(["2", "4", "*", "*"]);
//     });
//     it("1 different 2 same 1 different", function() {
//       expect(compress(test7)).toEqual(["1", "4", "1", "*"]);
//     });
//     it("all different", function() {
//       expect(compress(test8)).toEqual(["1", "2", "3", "4"]);
//     });
//     it("2 different 2 same", function() {
//       expect(compress(test9)).toEqual(["1", "2", "6", "*"]);
//     });
//     it("2 same 2 different", function() {
//       expect(compress(test10)).toEqual(["2", "3", "4", '*']);
//     });
//   });





// });
