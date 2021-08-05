# snake_game_in_JavaScript

Jogo da cobrinha - projeto baseado na aula da Digital Innovation One - bugs do projeto original corrigido.

O código original contia os seguintes comandos:

    if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;
    
    O código não estava errado, porém no jogo durante a travessia de uma borda para outra o play que estivesse jogando apertasse uma seta para baixo ou para cima, 
    a cobrinha andaria em uma linha invisivel.
    
    Correção feita para o código:
    
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
    
![Lâmpada](https://raw.githubusercontent.com/PauloSantos1109/snake_game_in_JavaScript/main/project_gif.gif)
