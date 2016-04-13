describe("Logic", function() {
  var logic = new Logic();
  describe("compress", function() {

    it("compresses one line", function() {
      var subjectRow  = [1, 1, 2, 2];
      var expectedRow = [2, 4, null, null];
      expect(logic.compress(subjectRow)).toEqual(expectedRow);
    });

    describe("1 spot", function() {
      it("returns array if at front", function() {
        var subjectRow  = [1, null, null, null]; 
        var expectedRow = [1, null, null, null];
        expect(logic.compress(subjectRow)).toEqual(expectedRow);
      }); 
      it("moves to first position, fills remainder", function() {
        var subjectRow  = [null, null, 1, null]; 
        var expectedRow = [1, null, null, null];
        expect(logic.compress(subjectRow)).toEqual(expectedRow);
      });

    });
    describe("2 spots", function() {
      it("2 same, merges and fills", function() {
        var subjectRow  = [1, 1, null, null];
        var expectedRow = [2, null, null, null];
        expect(logic.compress(subjectRow)).toEqual(expectedRow);
      });

      it("2 unique, move and fill", function() {
        var subjectRow  = [1, null, 2, null];
        var expectedRow = [1, 2, null, null];
        expect(logic.compress(subjectRow)).toEqual(expectedRow);
      });
    });

    describe("3 spots", function() {
      it("all the same", function() {
        var subjectRow  = [1, 1, 1, null];
        var expectedRow = [2, 1, null, null];
        expect(logic.compress(subjectRow)).toEqual(expectedRow);
      });
      
      it("1 2 1", function() {
        var subjectRow  = [1, 2, 1, null];
        var expectedRow = [1, 2, 1, null];
        expect(logic.compress(subjectRow)).toEqual(expectedRow);
      });
    });
    describe("4 spots", function() {
      it("all same", function() {
        var subjectRow  = [2, 2, 2, 2];
        var expectedRow = [4, 4, null, null];
        expect(logic.compress(subjectRow)).toEqual(expectedRow);        
      });
      it("2 same 2 different", function() {
        var subjectRow  = [1, 1, 2, 2];
        var expectedRow = [2, 4, null, null];
        expect(logic.compress(subjectRow)).toEqual(expectedRow);
      });
      it("1 different 2 same 1 different", function() {
        var subjectRow  = [1, 2, 2, 4];
        var expectedRow = [1, 4, 4, null];
        expect(logic.compress(subjectRow)).toEqual(expectedRow);        
      });
      it("all different", function() {
        var subjectRow  = [1, 2, 4, 8];
        var expectedRow = [1, 2, 4, 8];
        expect(logic.compress(subjectRow)).toEqual(expectedRow);        
      });
      it("2 different 2 same", function() {
        var subjectRow  = [1, 4, 8, 8];
        var expectedRow = [1, 4, 16, null];
        expect(logic.compress(subjectRow)).toEqual(expectedRow);        
      });
    });
  });
  
  describe("grabFromLeft", function() {
    it("splits 16 element array into array of 4 element arrays, from left", function() {
      var subject = [1, 2, 3, 4,
                     1, 2, 3, 4,
                     1, 2, 3, 4,
                     1, 2, 3, 4];
      var output  = [[1, 2, 3, 4], 
                     [1, 2, 3, 4],
                     [1, 2, 3, 4],
                     [1, 2, 3, 4]];
      expect(logic.grabFromLeft(subject)).toEqual(output);
    });
  });
  describe("grabFromRight", function() {
    it("splits 16 element array into array of 4 element arrays, from Right", function() {
      var subject = [1, 2, 3, 0,
                     1, 2, 3, 4,
                     1, 2, 3, 4,
                     5, 2, 3, 4];
      var output  = [[0,3,2,1], 
                     [4,3,2,1],
                     [4,3,2,1],
                     [4,3,2,5]];
      expect(logic.grabFromRight(subject)).toEqual(output);
    });
  });
  describe("grabFromTop", function() {
    it("splits 16 element array into array of 4 element arrays, from Top", function() {
      var subject3 = [1, 2, 3, 0,
                      1, 2, 3, 4,
                      1, 2, 3, 4,
                      5, 2, 3, 4];
      var output3  = [[1, 1, 1, 5], 
                      [2, 2, 2, 2],
                      [3, 3, 3, 3],
                      [0, 4, 4, 4]];
     expect(logic.grabFromTop(subject3)).toEqual(output3);
    });
  });
  describe("grabFromBottom", function() {
    it("splits 16 element array into array of 4 element arrays, from Top", function() {
      var subject3 = [1, 2, 3, 0,
                      1, 2, 3, 4,
                      1, 2, 3, 4,
                      5, 2, 3, 4];
      var output3  = [[5, 1, 1, 1], 
                      [2, 2, 2, 2],
                      [3, 3, 3, 3],
                      [4, 4, 4, 0]];
     expect(logic.grabFromBottom(subject3)).toEqual(output3);
    });
  });

  describe("assembleLeft", function() {
    it("takes nested array of 4 rows, converts to 16", function() {
      var subject = [[1, 2, 3, 0],
                     [1, 2, 3, 4],
                     [1, 2, 3, 4],
                     [5, 2, 3, 4]];

      var output  =  [1, 2, 3, 0,
                      1, 2, 3, 4,
                      1, 2, 3, 4,
                      5, 2, 3, 4];
      expect(logic.assembleLeft(subject)).toEqual(output);
    });
  });
  describe("assembleRight", function() {
    it("takes nested array of 4 rows, converts to 16", function() {
      var subject = [[1, 2, 3, 0],
                     [1, 2, 3, 4],
                     [1, 2, 3, 4],
                     [5, 2, 3, 4]];

      var output  =  [0, 3, 2, 1,
                      4, 3, 2, 1,
                      4, 3, 2, 1,
                      4, 3, 2, 5];
      expect(logic.assembleRight(subject)).toEqual(output);
    });
  });
  describe("assembleTop", function() {
    it("takes nested array of 4 rows, converts to 16", function() {

      var subject3 = [1, 2, 3, 0,
                      1, 2, 3, 4,
                      1, 2, 3, 4,
                      5, 2, 3, 4];

      expect(logic.assembleTop(logic.grabFromTop(subject3))).toEqual(subject3);
    });
  });
  describe("assembleBottom", function() {
    it("takes nested array of 4 rows, converts to 16", function() {

      var subject3 = [1, 2, 3, 0,
                      1, 2, 3, 4,
                      1, 2, 3, 4,
                      5, 2, 3, 4];

      expect(logic.assembleBottom(logic.grabFromBottom(subject3))).toEqual(subject3);
    });
  });  

  describe("left", function(){
    it("grabs permutates reassembles - Left", function(){
      var subject = new Board;
      subject.state = [2,    2,    null,  null,
                       null, null, 2,     2,
                       1,    1,    1,     1,
                       1,    2,    3,     4];

      var expected = new Board;
      expected.state = [4,    null, null,   null,
                        4,    null, null,   null,
                        2,    2,    null,   null,
                        1,    2,    3,      4];

      expect(logic.left(subject)).toEqual(expected);
    });
  });
  describe("Right", function(){
    it("grabs permutates reassembles - Right", function(){
      var subject = new Board;
      subject.state = [2,    2,    null,  null,
                       null, null, 2,     2,
                       1,    1,    1,     1,
                       1,    2,    3,     4];

      var expected = new Board;
      expected.state = [null,    null, null,   4,
                        null,    null, null,   4,
                        null,    null, 2,      2,
                        1,       2,    3,      4];

      expect(logic.right(subject)).toEqual(expected);
    });
  });

  describe("Top", function(){
    it("grabs permutates reassembles - Top", function(){
      var subject = new Board;
      subject.state = [2,    2,    null,  null,
                       null, null, 2,     2,
                       1,    1,    1,     1,
                       1,    2,    3,     4];

      var expected = new Board;
      expected.state = [2,    2,     2,   2,
                        2,    1,     1,   1,
                        null, 2,     3,   4,
                        null, null,  null, null];

      expect(logic.top(subject)).toEqual(expected);
    });
  });
  describe("Bottom", function(){
    it("grabs permutates reassembles - Bottom", function(){
      var subject = new Board;
      subject.state = [1, 2, 3, null,
                       1, 2, 3, 4,
                       1, 2, 3, 4,
                       5, 2, 3, 4];

      var expected = new Board;
      expected.state = [null, null, null, null,
                        1, null, null, null, 
                        2, 4, 6, 4,
                        5, 4, 6, 8];

      expect(logic.bottom(subject)).toEqual(expected);
    });
  });
});


// 0, 4, 8,  12 i = 0
// 1, 5, 9,  13 i = 1
// 2, 6, 10, 14 i = 2
// 3, 7, 11, 15 i = 3

// [1, 2, 3, 0, 1, 2, 3, 4, 1, 2, 3, 4, 5, 2, 3, 4];


