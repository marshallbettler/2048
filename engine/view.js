import Game from "./game.js"


export const renderNewGame = function(game) {
    const $root = $('#root');

    let board = `<div class="grid-container">`;
    for(let i = 0; i < game.gameState.board.length; i++) {
        board +=`<div class="grid-item">${game.gameState.board[i]}</div>`;
    }

    $root.append(board);

}
export const renderScoreWinLose =function(game) {
    const $root = $('#root');
    let score = `<h1 class="score">Score: ${game.gameState.score}</h1>`
    let won = ``
    if(game.gameState.won == true) {
        won = `<h1 class ="win">You won!</h1>`;
    }
    let lose = ``
    if(game.gameState.over == true) {
        lose = `<h1 class = "lose">You lost ):</h1>`;
    }
    
    $root.append(score);
    $root.append(won);
    $root.append(lose);
}

export const handleResetButtonPress = function() {
    const $root = $('#root');
    let button = `<button class="button" type="reset" value="Reset">Reset Game</button>`;
    $root.append(button);
}

$(function() {
    let currentGame = new Game(4);
    renderNewGame(currentGame);
    handleResetButtonPress();
    renderScoreWinLose(currentGame);
        $(document).on('keydown', function(e) {
            if(e.keyCode == '37') {
                currentGame.move("left");
            }
            if(e.keyCode == "38") {
                currentGame.move("up");
            }
            if(e.keyCode == "39") {
                currentGame.move("right");
            }
            if(e.keyCode == "40") {
                currentGame.move("down");
            }
            $(".win").remove();
            $(".lose").remove();
            $(".grid-container").remove();
            $(".score").remove();
            $(".button").remove();
            renderNewGame(currentGame);
            handleResetButtonPress();
            renderScoreWinLose(currentGame);
    });

    $(document).on("click", ".button", function() {
        currentGame.setupNewGame();
        $(".win").remove();
        $(".lose").remove();
        $(".grid-container").remove();
        $(".score").remove();
        $(".button").remove();
        renderNewGame(currentGame);
        handleResetButtonPress();
        renderScoreWinLose(currentGame);

    });

});