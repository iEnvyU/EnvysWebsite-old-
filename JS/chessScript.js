let Canvas1 = document.getElementById("chessCanvas");
let Context1 = Canvas1.getContext("2d");

for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
        Context1.moveTo(0, 70 * j);
        Context1.lineTo(550, 70 * j);
        Context1.stroke();

        Context1.moveTo(70 * i, 0);
        Context1.lineTo(70 * i, 560);
        Context1.stroke();

        let left = 0;
        for (let a = 0; a < 8; a++) {
            for (let b = 0; b < 8; b += 2) {
                startX = b * 70;
                if (a % 2 == 0)
                    startX = (b + 1) * 70;

                Context1.fillStyle = "white";
                Context1.fillRect(startX + left, (a * 70), 70, 70);
            }
        }
        let right = -70;
        for (let a = 0; a < 9; a++) {
            for (let b = 0; b < 9; b += 2) {
                startX = b * 70;
                if (a % 2 == 0)
                    startX = (b + 1) * 70;

                Context1.fillStyle = "black";
                Context1.fillRect(startX + right, (a * 70), 70, 70);
            }
        }
    }
}

let Canvas2 = document.getElementById("ChessPiece");
let Context2 = Canvas2.getContext("2d");

let img = new Image();
img.src = '../ChessPieces/Chess_rlt60.png';

var spriteWidth = 60,
    spriteHeight = 60,
    pixelsLeft = 170,
    pixelsTop = 10, 

    canvasPosX = 20,
    canvasPosY = 20;

Context2.drawImage(img, pixelsLeft, pixelsTop, spriteWidth, spriteHeight, canvasPosX, canvasPosY, spriteWidth, spriteHeight);