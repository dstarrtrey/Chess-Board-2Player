$(document).ready(function() {
  //THIS IS SIDEWAYS
  const chessboardTemplate = {
    a: [1, 2, 3, 4, 5, 6, 7, 8],
    b: [1, 2, 3, 4, 5, 6, 7, 8],
    c: [1, 2, 3, 4, 5, 6, 7, 8],
    d: [1, 2, 3, 4, 5, 6, 7, 8],
    e: [1, 2, 3, 4, 5, 6, 7, 8],
    f: [1, 2, 3, 4, 5, 6, 7, 8],
    g: [1, 2, 3, 4, 5, 6, 7, 8],
    h: [1, 2, 3, 4, 5, 6, 7, 8]
  };
  const chessboardStart = {
    a: ["wr1", "wp1", "empty", "empty", "empty", "empty", "bp1", "br1"],
    b: ["wk1", "wp2", "empty", "empty", "empty", "empty", "bp2", "bk1"],
    c: ["wb1", "wp3", "empty", "empty", "empty", "empty", "bp3", "bb1"],
    d: ["wq", "wp4", "empty", "empty", "empty", "empty", "bp4", "bki"],
    e: ["wki", "wp5", "empty", "empty", "empty", "empty", "bp5", "bq"],
    f: ["wb2", "wp6", "empty", "empty", "empty", "empty", "bp6", "bb2"],
    g: ["wk2", "wp7", "empty", "empty", "empty", "empty", "bp7", "bk2"],
    h: ["wr2", "wp8", "empty", "empty", "empty", "empty", "bp8", "br2"]
  };
  let chessboard = JSON.parse(JSON.stringify(chessboardStart));
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const PIECES = {
    wp1: {
      img: "assets/images/wp.png",
      start: "a2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp2: {
      img: "assets/images/wp.png",
      start: "b2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp3: {
      img: "assets/images/wp.png",
      start: "c2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp4: {
      img: "assets/images/wp.png",
      start: "d2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp5: {
      img: "assets/images/wp.png",
      start: "e2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp6: {
      img: "assets/images/wp.png",
      start: "f2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp7: {
      img: "assets/images/wp.png",
      start: "g2",
      type: "pawn",
      hasBeenMoved: false
    },
    wp8: {
      img: "assets/images/wp.png",
      start: "h2",
      type: "pawn",
      hasBeenMoved: false
    },
    bp1: {
      img: "assets/images/bp.png",
      start: "a7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp2: {
      img: "assets/images/bp.png",
      start: "b7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp3: {
      img: "assets/images/bp.png",
      start: "c7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp4: {
      img: "assets/images/bp.png",
      start: "d7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp5: {
      img: "assets/images/bp.png",
      start: "e7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp6: {
      img: "assets/images/bp.png",
      start: "f7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp7: {
      img: "assets/images/bp.png",
      start: "g7",
      type: "pawn",
      hasBeenMoved: false
    },
    bp8: {
      img: "assets/images/bp.png",
      start: "h7",
      type: "pawn",
      hasBeenMoved: false
    },
    wr1: {
      img: "assets/images/wr.png",
      start: "a1",
      type: "rook",
      hasBeenMoved: false
    },
    wr2: {
      img: "assets/images/wr.png",
      start: "h1",
      type: "rook",
      hasBeenMoved: false
    },
    br1: {
      img: "assets/images/br.png",
      start: "a8",
      type: "rook",
      hasBeenMoved: false
    },
    br2: {
      img: "assets/images/br.png",
      start: "h8",
      type: "rook",
      hasBeenMoved: false
    },
    wk1: {
      img: "assets/images/wk.png",
      start: "b1",
      type: "knight"
    },
    wk2: {
      img: "assets/images/wk.png",
      start: "g1",
      type: "knight"
    },
    bk1: {
      img: "assets/images/bk.png",
      start: "b8",
      type: "knight"
    },
    bk2: {
      img: "assets/images/bk.png",
      start: "g8",
      type: "knight"
    },
    wb1: {
      img: "assets/images/wb.png",
      start: "c1",
      type: "bishop"
    },
    wb2: {
      img: "assets/images/wb.png",
      start: "f1",
      type: "bishop"
    },
    bb1: {
      img: "assets/images/bb.png",
      start: "c8",
      type: "bishop"
    },
    bb2: {
      img: "assets/images/bb.png",
      start: "f8",
      type: "bishop"
    },
    wq: {
      img: "assets/images/wq.png",
      start: "d1",
      type: "queen"
    },
    bq: {
      img: "assets/images/bq.png",
      start: "e8",
      type: "queen"
    },
    wki: {
      img: "assets/images/wki.png",
      start: "e1",
      type: "king",
      hasBeenMoved: false
    },
    bki: {
      img: "assets/images/bki.png",
      start: "d8",
      type: "king",
      hasBeenMoved: false
    }
  };
  const WHITEMOVEMENTOPTIONS = {
    pawn: (piece, location) => {
      let locArr = location.split("");
      let x = locArr[0];
      let y = locArr[1] - 1;
      let moveArr = [];
      if (chessboard[x][y + 1] === "empty") {
        if (y + 1 < 8) {
          moveArr.push([x, y + 1]);
        }
        if (piece.hasBeenMoved === false && chessboard[x][y + 2] === "empty") {
          moveArr.push([x, y + 2]);
        }
      }
      //capture/a passant
      if (x !== "a") {
        if (
          chessboard[letters[letters.indexOf(x) - 1]][y + 1].charAt(0) ===
            "b" ||
          PIECES[chessboard[letters[letters.indexOf(x) - 1]][y]]
            .hasBeenMoved === "justMoved"
        ) {
          moveArr.push([letters[letters.indexOf(x) - 1], y + 1]);
        }
      }
      //capture/a passant
      if (x !== "h") {
        if (
          chessboard[letters[letters.indexOf(x) + 1]][y + 1][0] === "b" ||
          PIECES[chessboard[letters[letters.indexOf(x) + 1]][y]]
            .hasBeenMoved === "justMoved"
        ) {
          moveArr.push([letters[letters.indexOf(x) + 1], y + 1]);
        }
      }
      return moveArr;
    }
  };
  const showMovementOptions = arr => {
    $(".hover").removeClass("hover");
    arr.forEach(opt => {
      opt[1]++;
      $(`#${opt.join("")}`).addClass("hover");
    });
  };
  const setUpGame = () => {
    Object.keys(PIECES).forEach(piece => {
      let currentPiece = PIECES[piece];
      $(`#${currentPiece.start}`)
        .attr("data-occupying", piece)
        .addClass(`${piece[0]} piece`);
      const imgFill = $("<img>").attr("src", currentPiece.img);
      $(`#${currentPiece.start}`).html(imgFill);
    });
  };
  let myTurn = true;
  let myColor = "white";
  setUpGame();
  $(document).on("click", ".piece", function() {
    let coordinate = $(this).attr("id");
    if (myTurn === true && myColor === "white") {
      if ($(this).hasClass("w")) {
        const thisPiece = PIECES[$(this).attr("data-occupying")];
        console.log(
          WHITEMOVEMENTOPTIONS[thisPiece.type](thisPiece, coordinate)
        );
        showMovementOptions(
          WHITEMOVEMENTOPTIONS[thisPiece.type](thisPiece, coordinate)
        );
      }
    } else if (myTurn === true && myColor === "black") {
      if ($(this).hasClass("b")) {
        //
      }
    }
  });
});
