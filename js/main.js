// DECLARAÇÕES DE VARIAVEIS *****************************************

let canvas  = document.getElementById("snake");
let context = canvas.getContext("2d");
let box     = 32;
var contFood = 0;
var contador = document.getElementById('contador');
let jogo
var gameOver = document.getElementById('gameOver')


let snake   = [];
snake[0] = {
    x: 5 * box,
    y: 5 * box
}
let direction = "right";

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
}
// FIM DAS DECLARAÇÕES *********************************************

//FUNÇÕES

function criarBG(){
    //CRIAR background
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}
function createrSnake(){
    //CRIANDO A COBRINHA
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);        
    }
}

function drawFood(){
    //COMIDA DO JOGO
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

//FUNÇÕES DO TECLADO
document.addEventListener('keydown', update);

function update(event){
    /* 37 É PARA ESQUERDA
       38 É PARA CIMA
       39 É PARA DIREITA
       40 É PARA BAIXO
     */
    if (event.keyCode == 37 && direction != 'right')direction = 'left';
    if (event.keyCode == 38 && direction != 'down')direction = 'up';
    if (event.keyCode == 39 && direction != 'left')direction = 'right';
    if (event.keyCode == 40 && direction != 'up')direction = 'down';
}
// FIM DAS CHAMADAS DAS FUNÇÕES DO TECLADO


function fimGame (){
    
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            document.getElementById('contador').style.display = 'none';
              
            alert("GAME OVER :(");            
            window.location.reload()
        }
    }
}




//INICIANDO O JOGO
function iniciarJogo(){
    document.getElementById('contador').style.display = 'block';

    // EFEITO DISPLAY CONTADOR
    // FIM DO EFEITO DISPLAY CONTADOR
    fimGame();

    

    //MOVIMENTAÇÃ0 LATERA PARA OUTRO LADO
    if(snake[0].x > 15 * box && direction == 'right') snake[0].x = 0
    if(snake[0].x > 15 * box && direction == 'up') snake[0].x = 0
    if(snake[0].x > 15 * box && direction == 'down') snake[0].x = 0

    if(snake[0].x < 0  && direction == 'left') snake[0].x = 15 * box
    if(snake[0].x < 0  && direction == 'up') snake[0].x = 15 * box
    if(snake[0].x < 0  && direction == 'down') snake[0].x = 15 * box

    if(snake[0].y > 15 * box && direction == 'down') snake[0].y = 0
    if(snake[0].y > 15 * box && direction == 'right') snake[0].y = 0
    if(snake[0].y > 15 * box && direction == 'left') snake[0].y = 0

    if(snake[0].y < 0 && direction == 'up') snake[0].y = 15 * box
    if(snake[0].y < 0 && direction == 'right') snake[0].y = 15 * box
    if(snake[0].y < 0 && direction == 'left') snake[0].y = 15 * box
 
    // FIM DA DECLARAÇÃO

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;
    
    //FUNÇÃO PARA INCREMENTA DA COMIDA
    
    var placar = document.getElementById('placar');
    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
    }else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
        contFood ++
        
        
    }
    placar.innerHTML = contFood;

    //FIM DA FUNÇÃO


    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
    criarBG();
    createrSnake();
    drawFood();
    
}
// FIM DAS FUNÇÕES

