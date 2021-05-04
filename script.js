script.js
let canvas = document.getElementById ("snake");
deixe context = canvas.getContext ("2d");
deixe caixa = 32;
deixe cobra = [];
cobra [0] = {
    x: 8 * caixa,
    y: 8 * caixa
}

deixe direção = "certo";
deixe comida = {
    x: Math.floor (Math.random () * 15 + 1) * caixa,
    y: Math.floor (Math.random () * 15 + 1) * caixa
}

function criarBG () {
    context.fillStyle = "luz verde";
    context.fillRect (0, 0, 16 * caixa, 16 * caixa);

}

function criarCobrinha () {
    para (i = 0; i <comprimento da serpente; i ++) {
        context.fillStyle = "verde";
        context.fillRect (cobra [i] .x, cobra [i] .y, caixa, caixa);
    }
}

function drawFood () {
    context.fillStyle = "vermelho";
    context.fillRect (food.x, food.y, box, box)
}

document.addEventListener ('keydown', update);

atualização de função (evento) {
    if (event.keyCode == 37 && direction! = "right") direction = "left";
    if (event.keyCode == 38 && direction! = "down") direction = "up";
    if (event.keyCode == 39 && direction! = "left") direction = "right";
    if (event.keyCode == 40 && direction! = "up") direction = "down";
}

function iniciarJogo () {
    if (cobra [0] .x> 15 * caixa && direção == "direita") cobra [0] .x = 0;
    if (cobra [0] .x <0 && direção == "esquerda") cobra [0] .x = 16 * caixa;
    if (cobra [0] .y> 15 * caixa && direção == "para baixo") cobra [0] .y = 0;
    if (cobra [0] .y <0 && direção == "para cima") cobra [0] .y = 16 * caixa;

    para (i = 1; i <comprimento da serpente; i ++) {
        if (cobra [0] .x == cobra [i] .x && cobra [0] .y == cobra [i] .y) {
            clearInterval (jogo);
            alerta ('Game Over');
        }
    }
    
    criarBG ();
    criarCobrinha ();
    drawFood ();

    deixe snakeX = snake [0] .x;
    deixe snakeY = snake [0] .y;

    if (direção == "direita") snakeX + = caixa;
    if (direção == "esquerda") snakeX - = caixa;
    if (direção == "para cima") snakeY - = caixa;
    if (direção == "para baixo") snakeY + = caixa;

    if (snakeX! = food.x || snakeY! = food.y) {
        snake.pop ();
    }
    senão{
        food.x = Math.floor (Math.random () * 15 + 1) * caixa;
        food.y = Math.floor (Math.random () * 15 + 1) * caixa;
    }

    deixe newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift (newHead);
}

deixe jogo = setInterval (iniciarJogo, 100);