const CHESS_BOARD_SIZE = 8;

const BLACK = 0;
const WHITE = 1;

var virtualChessBoard = new Array(CHESS_BOARD_SIZE);

var whiteDeadPlayers  = new Array(CHESS_BOARD_SIZE*2);
var numWhiteDeadPlayers = 0;

var blackDeadPlayers  = new Array(CHESS_BOARD_SIZE*2);
var numBlackDeadPlayers = 0;


function init(){
    
    for (var i = 0; i < virtualChessBoard.length; ++i){

        virtualChessBoard[i] = new Array(CHESS_BOARD_SIZE);
    }
    
    virtualChessBoard[0][0] = new Elephant 	("whiteElephant_0", WHITE, 0, 0);
    virtualChessBoard[0][1] = new Horse    	("whiteHorse_0",    WHITE, 0, 1);
    virtualChessBoard[0][2] = new Camel    	("whiteCamel_0",    WHITE, 0, 2);
    virtualChessBoard[0][3] = new King     	("whiteKing",       WHITE, 0, 3);
    virtualChessBoard[0][4] = new Queen    	("whiteQueen_0",    WHITE, 0, 4);
    virtualChessBoard[0][5] = new Camel    	("whiteCamel_1",    WHITE, 0, 5);
    virtualChessBoard[0][6] = new Horse    	("whiteHorse_1",    WHITE, 0, 6);
    virtualChessBoard[0][7] = new Elephant 	("whiteElephant_1", WHITE, 0, 7);

    virtualChessBoard[1][0] = new Soldier   ("whiteSoldier_0",  WHITE, 1, 0); 
    virtualChessBoard[1][1] = new Soldier   ("whiteSoldier_1",  WHITE, 1, 1);
    virtualChessBoard[1][2] = new Soldier   ("whiteSoldier_2",  WHITE, 1, 2);
    virtualChessBoard[1][3] = new Soldier   ("whiteSoldier_3",  WHITE, 1, 3);
    virtualChessBoard[1][4] = new Soldier   ("whiteSoldier_4",  WHITE, 1, 4);
    virtualChessBoard[1][5] = new Soldier   ("whiteSoldier_5",  WHITE, 1, 5);
    virtualChessBoard[1][6] = new Soldier   ("whiteSoldier_6",  WHITE, 1, 6);
    virtualChessBoard[1][7] = new Soldier   ("whiteSoldier_7",  WHITE, 1, 7);

    virtualChessBoard[6][0] = new Soldier   ("blackSoldier_0",  BLACK, 6, 0);
    virtualChessBoard[6][1] = new Soldier   ("blackSoldier_1",  BLACK, 6, 1);
    virtualChessBoard[6][2] = new Soldier   ("blackSoldier_2",  BLACK, 6, 2);
    virtualChessBoard[6][3] = new Soldier   ("blackSoldier_3",  BLACK, 6, 3);
    virtualChessBoard[6][4] = new Soldier   ("blackSoldier_4",  BLACK, 6, 4);
    virtualChessBoard[6][5] = new Soldier   ("blackSoldier_5",  BLACK, 6, 5);
    virtualChessBoard[6][6] = new Soldier   ("blackSoldier_6",  BLACK, 6, 6);
    virtualChessBoard[6][7] = new Soldier   ("blackSoldier_7",  BLACK, 6, 7);

    virtualChessBoard[7][0] = new Elephant 	("blackElephant_0", BLACK, 7, 0);
    virtualChessBoard[7][1] = new Horse    	("blackHorse_0",    BLACK, 7, 1);
    virtualChessBoard[7][2] = new Camel    	("blackCamel_0",    BLACK, 7, 2);
    virtualChessBoard[7][3] = new King     	("blackKing",       BLACK, 7, 3);
    virtualChessBoard[7][4] = new Queen    	("blackQueen_0",    BLACK, 7, 4);
    virtualChessBoard[7][5] = new Camel    	("blackCamel_1",    BLACK, 7, 5);
    virtualChessBoard[7][6] = new Horse    	("blackHorse_1",    BLACK, 7, 6);
    virtualChessBoard[7][7] = new Elephant 	("blackElephant_1", BLACK, 7, 7);

}

init();

if(DEBUG){
    console.log("INFO: BLACK PLAYER TURN...");
}

