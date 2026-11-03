//board
let board;
const rowCount = 21;
const columnCount =19;
const tileSize = 32;
const boardWidth = columnCount * tileSize;
const boardHeight = rowCount*tileSize;

let context;

//images
let blueGhostImage;
let orangeGhostImage;
let pinkGhostImage;
let redGhostImage;
let pacmanUpImage;
let pacmanDownImage;
let pacmanLeftImage;
let pacmanRightImage;
let wallImage;






window.onload = function(){
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");// used to draw on board
    loadImages();

}

//X = wall, O = skip, P = pac man, ' ' = food
//Ghosts: b = blue, o = orange, p = pink, r = red
const tileMap = [
    "XXXXXXXXXXXXXXXXXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X                 X",
    "X XX X XXXXX X XX X",
    "X    X       X    X",
    "XXXX XXXX XXXX XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXrXX X XXXX",
    "O       bpo       O",
    "XXXX X XXXXX X XXXX",
    "OOOX X       X XOOO",
    "XXXX X XXXXX X XXXX",
    "X        X        X",
    "X XX XXX X XXX XX X",
    "X  X     P     X  X",
    "XX X X XXXXX X X XX",
    "X    X   X   X    X",
    "X XXXXXX X XXXXXX X",
    "X                 X",
    "XXXXXXXXXXXXXXXXXXX" 
];

const walls = new Set();
const foods = new Set();
const ghosts = new Set ();
let pacman;


function loadImages(){
    wallImage = new Image();
    wallImage.src ="./wall.png";

    blueGhostImage = new Image();
    blueGhostImage.src = "./blueghost.png";
    orangeGhostImage = new Image();
    orangeGhostImage.src = "./orangeghost.png";
    pinkGhostImage = new Image ();
    pinkGhostImage.src = "./pinkghost.png";
    redGhostImage = new Image ();
    redGhostImage.src = "./redghost.png";

    pacmanUpImage = new Image();
    pacmanUpImage.src = "./pacmanup.png";
    pacmanDownImage = new Image();
    pacmanDownImage.src = "./pacmandown.png";
    pacmanLeftImage = new Image();
    pacmanLeftImage.src = "./pacmanleft.png";
    pacmanRightImage = new Image();
    pacmanRightImage.src = "./pacmanright.png";

}

function loadMap() {
    walls.clear();
    foods.clear();
    ghosts.clear(); 

    for (let r = 0; r < rowCount; r++) {
        for (let c = 0; c , columnCount;c++){
            const row = tileMap[r];
            const tileMapChar = row[c];

            const x = c * tileSize;
            const y = r * tileSize;

            if (tileMapChar == 'X') {// block wall
                const wall= new Block (wallImage, x, y , tileSize, tileSize);
               walls.add(wall);

            }
            else if (tileMapChar == 'o') {// orange ghost
                const ghost = new Block (orangeGhostImage, x, y, tileSize, tileSize);
                ghosts.add(ghost);
             }
            else if (tileMapChar == 'b') {// blue ghost
                const ghost = new Block (blueGhostImage, x, y, tileSize, tileSize);
                ghosts.add(ghost);
            }
            else if (tileMapChar == 'p') {//pink ghost
                const ghost = new Block (pinkGhostImage, x, y, tileSize, tileSize);
                ghosts. add(ghost);
            }
            else if (tileMapChar == 'r') {// red ghost 
                const ghost = new Block (redGhostImage, x, y, tileSize, tileSize);
                ghost.add(ghost);

            }
            else if (tileMapChar == 'P') {//pacman
                pacman = new Block(pacmanRightImage, x, y, titleSize, tileSize);
            }
            else if (tileMapChar == ' ') {// empty spaces are food
                const food = new Block(null, x + 14, Y + 14, 4 ,4 );
                foods.add(food);
                

            }
    }
}
class Block{
    constructor(image, x, y, width, height){
        this.image = image;
        this.x = x;
        this.width = width;
        this.y = y;
        this.height = height;

        this.startX = x;
        this.startY = y;


    }
}