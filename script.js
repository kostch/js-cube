// Для отображения того что в слайдере  происходит
// Размер игрока 1
var slide = document.getElementById("id1");
var y = document.getElementById("r");
y.innerHTML = slide.value;
slide.oninput = function() {
    y.innerHTML = this.value + ' px';
}
// скорость игрока 1
var slide2 = document.getElementById("id2");
var y1 = document.getElementById("s");
y1.innerHTML = slide2.value;
slide2.oninput = function() {
    y1.innerHTML = this.value + ' x';
}
// размер игрока 2
var slide3 = document.getElementById("id3");
var y3 = document.getElementById("r2");
y3.innerHTML = slide3.value;
slide3.oninput = function() {
    y3.innerHTML = this.value + ' px';
}
// скорость игрока 2
var slide4 = document.getElementById("id4");
var y4 = document.getElementById("s2");
y4.innerHTML = slide4.value;
slide4.oninput = function() {
    y4.innerHTML = this.value + ' x';
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var posX = 1;
var posY = 1;
var posX1 = 799 - slide3.value;
var posY1 = 799 - slide3.value;


function normalAlert(message) {
	setTimeout(() => alert(message), 0)
}

function myFunction() {
    document.getElementById("form1").style.display = "none";
    document.getElementById("canvas").style.display = "inline";
	posX1 = 799 - slide3.value;
	posY1 = 799 - slide3.value;

	setInterval(loop, 2)
}

function draw() {
    var sizePlayer1 = slide.value;
    var sizePlayer2 = slide3.value;
    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.fillStyle = "green";
    ctx.fillRect(posX, posY, sizePlayer1, sizePlayer1);
    ctx.fillStyle = "red";
    ctx.fillRect(posX1, posY1, sizePlayer2, sizePlayer2);
}

// Обработчик нажатия клавиш

var codeset = {
    38: false, //  up
    40: false, //  down
    37: false, //  left
    39: false, //  right
    87: false, //  w
    83: false, //  s
    65: false, //  a
    68: false  //  d
};

document.addEventListener('keydown', function (e){    
    if (e.keyCode in codeset) {
        codeset[e.keyCode] = true;
    }
})
document.addEventListener('keyup', function (e){
    if (e.keyCode in codeset) {
        codeset[e.keyCode] = false;
    }
});
let stopped = false;
function End() {
	draw();
    var sizePlayer1 = slide.value;
    var sizePlayer2 = slide3.value;
    if (posX + parseInt(sizePlayer1) >= posX1 && posX <= posX1 + parseInt(sizePlayer2)) {
        if (posY + parseInt(sizePlayer1) >= posY1 && posY <= posY1 + parseInt(sizePlayer2)){
			stopped = true;
            if (sizePlayer1 >= sizePlayer2) {
				draw();
                normalAlert('Победил игрок 1')
                location.reload()
            }
            else if (sizePlayer2 >= sizePlayer1) {
				draw();
                normalAlert('Победил игрок 2')
                location.reload()
            }
        }
    }
};

function loop() {
	if (stopped) return;
	draw();
	
			End()
	var sizePlayer1 = slide.value;
    var sizePlayer2 = slide3.value;
    var borderRB = 800 - sizePlayer1;
    var borderRB1 = 800 - sizePlayer2;
	var speed1 = 1 * slide2.value;
    var speed2 = 1 * slide4.value;
	if (codeset[87]) {
            posY -= speed1
            if (posY <= 0) {
				stopped = true;
                normalAlert('Игрок 1 проиграл!')
                location.reload()
            }
        }
        if (codeset[83]) {
            posY += speed1
            if (posY >= borderRB) {
				stopped = true;
                normalAlert('Игрок 1 проиграл!')
                location.reload()
            }
			End()
        }
        if (codeset[65]) {
            posX -= speed1
            if (posX <= 0) {
				stopped = true;
                normalAlert('Игрок 1 проиграл!')
                location.reload()
            }
			End()
        }
        if (codeset[68]) {
            posX += speed1
            if (posX >= borderRB) {
				stopped = true;
                normalAlert('Игрок 1 проиграл!')
                location.reload()
            }
			End()
        }
        if (codeset[38]) {
            posY1 -= speed2
            if (posY1 <= 0) {
                normalAlert('Игрок 2 проиграл!')
                location.reload()
            }
			End()
        }
        if (codeset[40]) {
            posY1 += speed2
            if (posY1 >= borderRB1) {
				stopped = true;
                normalAlert('Игрок 2 проиграл!')
                location.reload()
            }
			End()
        }
        if (codeset[37]) {
            posX1 -= speed2
            if (posX1 <= 0) {
				stopped = true;
                normalAlert('Игрок 2 проиграл!')
                location.reload()
            }
			End()
        }
        if (codeset[39]) {
            posX1 += speed2
            if (posX1 >= borderRB1) {
				stopped = true;
                normalAlert('Игрок 2 проиграл!')
                location.reload()
            }
			End()
        }
}