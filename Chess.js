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

    return {m_playerX, m_playerY};
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



var King = function(id, playerColor, xPos, yPos){

    Skeleton.call(this, id, playerColor, xPos, yPos);
    this.m_playerType = TYPE_KING;

}
King.prototype = Object.create(Skeleton.prototype);
King.prototype.constructor = King;


var Queen = function(id, playerColor, xPos, yPos){
    
    Skeleton.call(this, id, playerColor, xPos, yPos);
    this.m_playerType = TYPE_QUEEN;

}
Queen.prototype = Object.create(Skeleton.prototype);
Queen.prototype.constructor = Queen;
Queen.prototype.m_canTraversePath = function(finalX, finalY){

}

var Soldier = function(id, playerColor, xPos, yPos){

    Skeleton.call(this, id, playerColor, xPos, yPos);
    this.m_playerType = TYPE_SOLDIER;

}
Soldier.prototype = Object.create(Skeleton.prototype);
Soldier.prototype.constructor = Soldier;
Soldier.prototype.m_canTraversePath = function(finalX, finalY){

}

var Elephant = function(id, playerColor, xPos, yPos){

    Skeleton.call(this, id, playerColor, xPos, yPos);
    this.m_playerType = TYPE_ELEPHANT;

}
Elephant.prototype = Object.create(Skeleton.prototype);
Elephant.prototype.constructor = Elephant;
Elephant.prototype.m_canTraversePath = function(finalX, finalY){

   
}

var Horse = function(id, playerColor, xPos, yPos){

    Skeleton.call(this, id, playerColor, xPos, yPos);
    this.m_playerType = TYPE_HORSE;

}
Horse.prototype = Object.create(Skeleton.prototype);
Horse.prototype.constructor = Horse;

var Camel = function(id, playerColor, xPos, yPos){

    Skeleton.call(this, id, playerColor, xPos, yPos);
    this.m_playerType = TYPE_CAMEL;

}
Camel.prototype = Object.create(Skeleton.prototype);
Camel.prototype.constructor = Camel;
Camel.prototype.m_canTraversePath = function(finalX, finalY){

}


