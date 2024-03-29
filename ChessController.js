var whoseTurn = BLACK;

const FIRST_CLICK = 0;
const SECOND_CLICK = 1;

var numClicks = 0;

var srcCoordinateX      = undefined;
var srcCoordinateY      = undefined;

var targetCoordinateX   = undefined;
var targetCoordinateY   = undefined;

var srcPlayerPossibleMoves = new Array(CHESS_BOARD_SIZE * 4);
var numPossibleMoves = 0;

function findAllPossibleMoves(srcPlayer){
    numPossibleMoves = srcPlayer.m_findAllPossibleMoves(srcPlayerPossibleMoves);
}

function isMovePossible(targetCoordinateX, targetCoordinateY, srcPlayerPossibleMoves, numPossibleMoves){
    for(var i = 0; i < numPossibleMoves; ++i){
        if(srcPlayerPossibleMoves[i].x == targetCoordinateX && srcPlayerPossibleMoves[i].y == targetCoordinateY){
            return true;
        }
    }

    return false;
}

function iAmClicked(strCoordinate) {

    var indexX = parseInt(strCoordinate[0], 10);
    var indexY = parseInt(strCoordinate[1], 10);

    if(numClicks == FIRST_CLICK){


        srcCoordinateX = indexX;
        srcCoordinateY = indexY;

        var srcPlayer = virtualChessBoard[srcCoordinateX][srcCoordinateY];

        if(srcPlayer == undefined || srcPlayer.m_GetPlayerColor() != whoseTurn){
            if(DEBUG){
                console.log("ERROR: Select Player Properly!");
            }
            return;
        }

        findAllPossibleMoves(srcPlayer);

        if(numPossibleMoves == 0){
            if(DEBUG){
                console.log("ERROR: Selected Player has No Moves!");
            }
            return;
        }


        // highLightPossibleMoves(srcPlayerPossibleMoves, numPossibleMoves) TODO:

        if(DEBUG){
            console.log("INFO: Player Selected.");
            console.log("INFO: Possible Moves.");
            for(var i = 0; i < numPossibleMoves; ++i){
                console.log(srcPlayerPossibleMoves[i].x + " " + srcPlayerPossibleMoves[i].y);
            }
        }
    }
    else{

        targetCoordinateX = indexX;
        targetCoordinateY = indexY;


        if(targetCoordinateX == srcCoordinateX && targetCoordinateY == srcCoordinateY){
            // Un-Select Player
            if(DEBUG){
                console.log("INFO: Player Un-Selected.");
            }

            // highLightPossibleMoves(srcPlayerPossibleMoves, numPossibleMoves) TODO:
            numClicks = 0;
            return;

        }

        if(isMovePossible(targetCoordinateX, targetCoordinateY, srcPlayerPossibleMoves, numPossibleMoves)){

            var targetPlayer = virtualChessBoard[targetCoordinateX][targetCoordinateY];
            
            if(targetPlayer != undefined){
                
                targetPlayer.m_Death();
                
                if(targetPlayer.m_GetPlayerColor() == BLACK){
                    blackDeadPlayers[numBlackDeadPlayers] = targetPlayer;
                    numBlackDeadPlayers++;
                }   
                else{
                    whiteDeadPlayers[numWhiteDeadPlayers] = targetPlayer;
                    numWhiteDeadPlayers++;
                }

                if(DEBUG){
                    console.log("INFO: You Killed " + targetPlayer.m_GetPlayerID());
                }

            }

            var srcPlayer = virtualChessBoard[srcCoordinateX][srcCoordinateY];
            srcPlayer.m_SetPosition(targetCoordinateX, targetCoordinateY);

            virtualChessBoard[srcCoordinateX][srcCoordinateY] = undefined;
            virtualChessBoard[targetCoordinateX][targetCoordinateY] = srcPlayer;

            if(DEBUG){
                console.log("INFO: Player Moved.")
            }

            // highLightPossibleMoves(srcPlayerPossibleMoves, numPossibleMoves) TODO:


            // Next Player Turn
            whoseTurn = !whoseTurn;
            
            if(DEBUG){

                if(whoseTurn == BLACK){
                    console.log("INFO: BLACK PLAYER TURN...");
                }else{
                    console.log("INFO: WHITE PLAYER TURN...");
                }
            }

        }
        else{
            if(DEBUG){
                console.log("ERROR: Bad Move, Retry...!");
            }
            return;
        }
    }

    numClicks = (numClicks + 1) % 2;
    return;
}