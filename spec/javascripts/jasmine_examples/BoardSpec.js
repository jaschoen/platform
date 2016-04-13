describe("Board", function() {


  describe("State", function() {
    it("Initializes with 16 null", function() {
      var initialBoard   = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      var board = new Board();
      expect(board.state).toEqual(initialBoard);
    });
    it("Preserves updates", function() {
      var firstDiffBoard = ["2", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      var board = new Board();
      board.state = firstDiffBoard;
      expect(board.state).toEqual(firstDiffBoard)
    });

  });





});
