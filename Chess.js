const DEBUG  = true;

const TYPE_SOLDIER   = 0;
const TYPE_KING      = 1;
const TYPE_QUEEN     = 2;
const TYPE_ELEPHANT  = 3;
const TYPE_HORSE     = 4;
const TYPE_CAMEL     = 5;

var Skeleton = function(id,playerColor, xPos, yPos){

    this.m_playerAlive  = true;
    this.m_playerID     = id;
    this.m_playerColor  = playerColor;
    this.m_playerX      = xPos;
    this.m_playerY      = yPos;

}
Skeleton.prototype.m_GetPosition = function(){

    return {
                x: this.m_playerX, 
                y: this.m_playerY
            };
}

Skeleton.prototype.m_SetPosition = function(xPos, yPos){

    this.m_playerX = xPos;
    this.m_playerY = yPos;
}
Skeleton.prototype.m_Death = function(){

    this.m_playerAlive = false;
}

Skeleton.prototype.m_GetPlayerColor = function(){

    return this.m_playerColor;
}
Skeleton.prototype.m_GetPlayerType = function(){

    return this.m_playerType;
}

Skeleton.prototype.m_GetPlayerID = function(){

    return this.m_playerID;
}

Skeleton.prototype.m_findAllUpwardPossibleMoves = function(srcPlayerPossibleMoves, numPossibleMoves){

    var i   = this.m_playerX - 1;
    const j = this.m_playerY;

    while(i >= 0){
        
        if(virtualChessBoard[i][j] == undefined){
            srcPlayerPossibleMoves[numPossibleMoves] = {    x: i,
                                                            y: j
                                                        };
            numPossibleMoves++;
        }
        else if(virtualChessBoard[i][j].m_GetPlayerColor() != this.m_playerColor){
            srcPlayerPossibleMoves[numPossibleMoves] = {    x: i,
                                                            y: j
                                                        };
            numPossibleMoves++;
            break;
        }
        else{
            break;
        }
    
        --i;

    }

    return numPossibleMoves;
}

Skeleton.prototype.m_findAllDownwardPossibleMoves = function(srcPlayerPossibleMoves, numPossibleMoves){

    var i   = this.m_playerX + 1;
    const j = this.m_playerY;

    while(i < CHESS_BOARD_SIZE){
        

        if(virtualChessBoard[i][j] == undefined){
            srcPlayerPossibleMoves[numPossibleMoves] = {    x: i,
                                                            y: j
                                                        };
            numPossibleMoves++;
        }
        else if(virtualChessBoard[i][j].m_GetPlayerColor() != this.m_playerColor){
            srcPlayerPossibleMoves[numPossibleMoves] = {    x: i,
                                                            y: j
                                                        };
            numPossibleMoves++;
            break;
        }
        else{
            break;
        }
        
        ++i;

    }

    return numPossibleMoves;
}

Skeleton.prototype.m_findAllLeftsidePossibleMoves = function(srcPlayerPossibleMoves, numPossibleMoves){

    const i   = this.m_playerX;
    var j     = this.m_playerY - 1;

    while(j >= 0){
        

        if(virtualChessBoard[i][j] == undefined){
            srcPlayerPossibleMoves[numPossibleMoves] = {    x: i,
                                                            y: j
                                                        };
            numPossibleMoves++;
        }
        else if(virtualChessBoard[i][j].m_GetPlayerColor() != this.m_playerColor){
            srcPlayerPossibleMoves[numPossibleMoves] = {    x: i,
                                                            y: j
                                                        };
            numPossibleMoves++;
            break;
        }
        else{
            break;
        }

        --j;

    }

    return numPossibleMoves;
}

Skeleton.prototype.m_findAllRightsidePossibleMoves= function(srcPlayerPossibleMoves, numPossibleMoves){

    const i   = this.m_playerX;
    var j     = this.m_playerY + 1;

    while(j < CHESS_BOARD_SIZE){
        

        if(virtualChessBoard[i][j] == undefined){
            srcPlayerPossibleMoves[numPossibleMoves] = {    x: i,
                                                            y: j
                                                        };
            numPossibleMoves++;
        }
        else if(virtualChessBoard[i][j].m_GetPlayerColor() != this.m_playerColor){
            srcPlayerPossibleMoves[numPossibleMoves] = {    x: i,
                                                            y: j
                                                        };
            numPossibleMoves++;
            break;
        }
        else{
            break;
        }
        
        ++j;

    }

    return numPossibleMoves;
}

Skeleton.prototype.m_findAllForwardDiagonalUpPossibleMoves = function(srcPlayerPossibleMoves, numPossibleMoves){

    var i = this.m_playerX - 1;
    var j = this.m_playerY + 1;

    // Upwards
    while(i >= 0 && j < CHESS_BOARD_SIZE){

        if(virtualChessBoard[i][j] == undefined){
            srcPlayerPossibleMoves[numPossibleMoves] = {    x: i,
                                                            y: j
                                                        };
            numPossibleMoves++;
        }
        else if(virtualChessBoard[i][j].m_GetPlayerColor() != this.m_playerColor){
            srcPlayerPossibleMoves[numPossibleMoves] = {    x: i,
                                                            y: j
                                                        };
            numPossibleMoves++;
            break;
        }
        else{
            break;
        }
        
        --i;
        ++j;


    }

    return numPossibleMoves;
}

Skeleton.prototype.m_findAllForwardDiagonalDownPossibleMoves = function(srcPlayerPossibleMoves, numPossibleMoves){

    var i = this.m_playerX + 1;
    var j = this.m_playerY - 1;

    // Downwards
    while(i < CHESS_BOARD_SIZE && j >= 0){

        if(virtualChessBoard[i][j] == undefined){
            srcPlayerPossibleMoves[numPossibleMoves] = {    x: i,
                                                            y: j
                                                        };
            numPossibleMoves++;
        }
        else if(virtualChessBoard[i][j].m_GetPlayerColor() != this.m_playerColor){
            srcPlayerPossibleMoves[numPossibleMoves] = {    x: i,
                                                            y: j
                                                        };
            numPossibleMoves++;
            break;
        }
        else{
            break;
        }
        
        ++i;
        --j;


    }
    return numPossibleMoves;
}

Skeleton.prototype.m_findAllBackwardDiagonalUpPossibleMoves = function(srcPlayerPossibleMoves, numPossibleMoves){

    var i = this.m_playerX - 1;
    var j = this.m_playerY - 1;

    // Downwards
    while(i >= 0 && j >= 0){

        if(virtualChessBoard[i][j] == undefined){
            srcPlayerPossibleMoves[numPossibleMoves] = {    x: i,
                                                            y: j
                                                        };
            numPossibleMoves++;
        }
        else if(virtualChessBoard[i][j].m_GetPlayerColor() != this.m_playerColor){
            srcPlayerPossibleMoves[numPossibleMoves] = {    x: i,
                                                            y: j
                                                        };
            numPossibleMoves++;
            break;
        }
        else{
            break;
        }
        
        --i;
        --j;


    }

    return numPossibleMoves;
}
Skeleton.prototype.m_findAllBackwardDiagonalDownPossibleMoves = function(srcPlayerPossibleMoves, numPossibleMoves){

    var i = this.m_playerX + 1;
    var j = this.m_playerY + 1;

    // Downwards
    while(i < CHESS_BOARD_SIZE && j < CHESS_BOARD_SIZE){

        if(virtualChessBoard[i][j] == undefined){
            srcPlayerPossibleMoves[numPossibleMoves] = {    x: i,
                                                            y: j
                                                        };
            numPossibleMoves++;
        }
        else if(virtualChessBoard[i][j].m_GetPlayerColor() != this.m_playerColor){
            srcPlayerPossibleMoves[numPossibleMoves] = {    x: i,
                                                            y: j
                                                        };
            numPossibleMoves++;
            break;
        }
        else{
            break;
        }
        
        ++i;
        ++j;


    }
    return numPossibleMoves;
}



var King = function(id, playerColor, xPos, yPos){

    Skeleton.call(this, id, playerColor, xPos, yPos);
    this.m_playerType = TYPE_KING;

}
King.prototype = Object.create(Skeleton.prototype);
King.prototype.constructor = King;
King.prototype.m_findAllPossibleMoves = function(srcPlayerPossibleMoves){
    var numPossibleMoves = 0;

    return numPossibleMoves;
}



var Queen = function(id, playerColor, xPos, yPos){
    
    Skeleton.call(this, id, playerColor, xPos, yPos);
    this.m_playerType = TYPE_QUEEN;

}
Queen.prototype = Object.create(Skeleton.prototype);
Queen.prototype.constructor = Queen;
Queen.prototype.m_findAllPossibleMoves = function(srcPlayerPossibleMoves){
    var numPossibleMoves = 0;

    numPossibleMoves = this.m_findAllUpwardPossibleMoves     (srcPlayerPossibleMoves, numPossibleMoves);
    numPossibleMoves = this.m_findAllDownwardPossibleMoves   (srcPlayerPossibleMoves, numPossibleMoves);
    numPossibleMoves = this.m_findAllLeftsidePossibleMoves   (srcPlayerPossibleMoves, numPossibleMoves);
    numPossibleMoves = this.m_findAllRightsidePossibleMoves  (srcPlayerPossibleMoves, numPossibleMoves);

    numPossibleMoves = this.m_findAllForwardDiagonalUpPossibleMoves     (srcPlayerPossibleMoves, numPossibleMoves);
    numPossibleMoves = this.m_findAllForwardDiagonalDownPossibleMoves   (srcPlayerPossibleMoves, numPossibleMoves);
    numPossibleMoves = this.m_findAllBackwardDiagonalUpPossibleMoves    (srcPlayerPossibleMoves, numPossibleMoves);
    numPossibleMoves = this.m_findAllBackwardDiagonalDownPossibleMoves  (srcPlayerPossibleMoves, numPossibleMoves);

    return numPossibleMoves;
}

var Soldier = function(id, playerColor, xPos, yPos){

    Skeleton.call(this, id, playerColor, xPos, yPos);
    this.m_playerType = TYPE_SOLDIER;

}
Soldier.prototype = Object.create(Skeleton.prototype);
Soldier.prototype.constructor = Soldier;
Soldier.prototype.m_findAllPossibleMoves = function(srcPlayerPossibleMoves){
    
    var numPossibleMoves = 0;

    var direction;
    if(this.m_playerColor == BLACK){
        direction   = -1;
    }else{
        direction   = 1;
    }


    // Forward Movement of Soldier
    if(virtualChessBoard[this.m_playerX + direction][this.m_playerY] == undefined){
        srcPlayerPossibleMoves[numPossibleMoves] = { x : this.m_playerX + direction,
                                                     y : this.m_playerY};
        numPossibleMoves++;
    }

    // Left Side Movement
    if(this.m_playerY-1 >= 0 &&  virtualChessBoard[this.m_playerX + direction][this.m_playerY - 1] != undefined && virtualChessBoard[this.m_playerX + direction][this.m_playerY - 1].m_GetPlayerColor() != this.m_playerColor ){

        srcPlayerPossibleMoves[numPossibleMoves] = { x : this.m_playerX + direction,
                                                     y : this.m_playerY - 1};
        numPossibleMoves++;
    }

    // Right Side Movement
    if(this.m_playerY+1 < CHESS_BOARD_SIZE &&  virtualChessBoard[this.m_playerX + direction][this.m_playerY + 1] != undefined && virtualChessBoard[this.m_playerX + direction][this.m_playerY + 1].m_GetPlayerColor() != this.m_playerColor ){

        srcPlayerPossibleMoves[numPossibleMoves] = { x : this.m_playerX + direction,
                                                     y : this.m_playerY + 1};
        numPossibleMoves++;
    }

    return numPossibleMoves;
}

var Elephant = function(id, playerColor, xPos, yPos){

    Skeleton.call(this, id, playerColor, xPos, yPos);
    this.m_playerType = TYPE_ELEPHANT;

}
Elephant.prototype = Object.create(Skeleton.prototype);
Elephant.prototype.constructor = Elephant;
Elephant.prototype.m_findAllPossibleMoves = function(srcPlayerPossibleMoves){
    var numPossibleMoves = 0;

    numPossibleMoves = this.m_findAllUpwardPossibleMoves     (srcPlayerPossibleMoves, numPossibleMoves);
    numPossibleMoves = this.m_findAllDownwardPossibleMoves   (srcPlayerPossibleMoves, numPossibleMoves);
    numPossibleMoves = this.m_findAllLeftsidePossibleMoves   (srcPlayerPossibleMoves, numPossibleMoves);
    numPossibleMoves = this.m_findAllRightsidePossibleMoves  (srcPlayerPossibleMoves, numPossibleMoves);

    return numPossibleMoves;
   
}

var Horse = function(id, playerColor, xPos, yPos){

    Skeleton.call(this, id, playerColor, xPos, yPos);
    this.m_playerType = TYPE_HORSE;

}
Horse.prototype = Object.create(Skeleton.prototype);
Horse.prototype.constructor = Horse;
Horse.prototype.m_findAllPossibleMoves = function(srcPlayerPossibleMoves){
    var numPossibleMoves = 0;

    const i = this.m_playerX;
    const j = this.m_playerY;

    // Forward
    if(i-2 >= 0 && virtualChessBoard[i-1][j] == undefined && virtualChessBoard[i-2][j] == undefined){

        //Left Step
        if((j-1 >= 0) && (virtualChessBoard[i-2][j-1] == undefined || virtualChessBoard[i-2][j-1].m_GetPlayerColor() != this.m_playerColor)){

            srcPlayerPossibleMoves[numPossibleMoves] = { x: i-2, y: j-1 };
            numPossibleMoves++;
        }

        //Right Step
        if((j+1 < CHESS_BOARD_SIZE) && (virtualChessBoard[i-2][j+1] == undefined || virtualChessBoard[i-2][j+1].m_GetPlayerColor() != this.m_playerColor)){

            srcPlayerPossibleMoves[numPossibleMoves] = { x: i-2, y: j+1 };
            numPossibleMoves++;
        }
    }


    // Backward
    if(i+2 < CHESS_BOARD_SIZE && virtualChessBoard[i+1][j] == undefined && virtualChessBoard[i+2][j] == undefined){

        //Left Step
        if((j-1 >= 0) && (virtualChessBoard[i+2][j-1] == undefined || virtualChessBoard[i+2][j-1].m_GetPlayerColor() != this.m_playerColor)){

            srcPlayerPossibleMoves[numPossibleMoves] = { x: i+2, y: j-1 };
            numPossibleMoves++;
        }
        //Right Step
        if((j+1 < CHESS_BOARD_SIZE ) && (virtualChessBoard[i+2][j+1] == undefined || virtualChessBoard[i+2][j+1].m_GetPlayerColor() != this.m_playerColor)){

            srcPlayerPossibleMoves[numPossibleMoves] = { x: i+2, y: j+1 };
            numPossibleMoves++;
        }
    }


    // RightSide
    if(j+2 < CHESS_BOARD_SIZE && virtualChessBoard[i][j+1] == undefined && virtualChessBoard[i][j+2] == undefined){

        // Upward Step 
        if((i-1 >= 0) && (virtualChessBoard[i-1][j+2] == undefined || virtualChessBoard[i-1][j+2].m_GetPlayerColor() != this.m_playerColor)){

            srcPlayerPossibleMoves[numPossibleMoves] = { x: i-1, y: j+2 };
            numPossibleMoves++;
        }

        // Downward Step
        if((i+1 < CHESS_BOARD_SIZE) && (virtualChessBoard[i+1][j+2] == undefined || virtualChessBoard[i+1][j+2].m_GetPlayerColor() != this.m_playerColor)){

            srcPlayerPossibleMoves[numPossibleMoves] = { x: i+1, y: j+2 };
            numPossibleMoves++;
        }

    }

    // LeftSide
    if(j-2 >= 0 && virtualChessBoard[i][j-1] == undefined && virtualChessBoard[i][j-2] == undefined){

        // Upward Step 
        if((i-1 >= 0) && (virtualChessBoard[i-1][j-2] == undefined || virtualChessBoard[i-1][j-2].m_GetPlayerColor() != this.m_playerColor)){

            srcPlayerPossibleMoves[numPossibleMoves] = { x: i-1, y: j-2 };
            numPossibleMoves++;
        }

        // Downward Step
        if((i+1 < CHESS_BOARD_SIZE) && (virtualChessBoard[i+1][j-2] == undefined || virtualChessBoard[i+1][j-2].m_GetPlayerColor() != this.m_playerColor)){

            srcPlayerPossibleMoves[numPossibleMoves] = { x: i+1, y: j-2 };
            numPossibleMoves++;
        }

    }

    return numPossibleMoves;
}


var Camel = function(id, playerColor, xPos, yPos){

    Skeleton.call(this, id, playerColor, xPos, yPos);
    this.m_playerType = TYPE_CAMEL;

}
Camel.prototype = Object.create(Skeleton.prototype);
Camel.prototype.constructor = Camel;
Camel.prototype.m_findAllPossibleMoves = function(srcPlayerPossibleMoves){
    var numPossibleMoves = 0;

    numPossibleMoves = this.m_findAllForwardDiagonalUpPossibleMoves     (srcPlayerPossibleMoves, numPossibleMoves);
    numPossibleMoves = this.m_findAllForwardDiagonalDownPossibleMoves   (srcPlayerPossibleMoves, numPossibleMoves);
    numPossibleMoves = this.m_findAllBackwardDiagonalUpPossibleMoves    (srcPlayerPossibleMoves, numPossibleMoves);
    numPossibleMoves = this.m_findAllBackwardDiagonalDownPossibleMoves  (srcPlayerPossibleMoves, numPossibleMoves);

    return numPossibleMoves;
}


