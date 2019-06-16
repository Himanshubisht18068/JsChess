var whoseTurn = BLACK;

const FIRST_CLICK = 0;
const SECOND_CLICK = 1;

var numClicks = 0;

var srcCoordinateX      = undefined;
var srcCoordinateY      = undefined;

var targetCoordinateX   = undefined;
var targetCoordinateY   = undefined;


function iAmClicked(strCoordinate) {

    var indexX = parseInt(strCoordinate[0], 10);
    var indexY = parseInt(strCoordinate[1], 10);

    if(numClicks == FIRST_CLICK){


    }
    else{

    }

    numClicks = (numClicks + 1) % 2;
    return true;
}