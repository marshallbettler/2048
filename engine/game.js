/*
Add your code for Game here
 */
export default class Game {
    constructor(size) {
        this.size = size;
        this.wonArray = [];
        this.overArray = [];
        this.moveArray =[];
        this.gameState = {
            board: new Array(this.size * this.size).fill(0),
            score: 0,
            won: false,
            over: false,
            
        }
        this.addingValues();
        this.addingValues();

        
    }
    addingValues(){
           let randomTileValue = Math.floor((Math.random()*10)+1);
           let index = Math.floor(Math.random()*(this.size*this.size));
           if(this.gameState.board[index] == 0) {
               if(randomTileValue == 1) {
                   this.gameState.board[index] = 4;
               } else {
                   this.gameState.board[index] = 2;
               }
           } else {
               this.addingValues();
           }
            
         
    }
    setupNewGame(){
        this.gameState.board = new Array(this.size * this.size).fill(0);
        this.gameState.score = 0;
        this.gameState.won = false;
        this.gameState.over = false;
        this.addingValues();
        this.addingValues();
        
    }
    loadGame(gameState) {
        this.gameState = gameState;
    }
    move(direction) {
        let copy = this.gameState.board.slice();
        if(direction == "up") {
            
        for(let i = 0; i < this.size; i++) {
            let move = [];
            for(let k = 0; k < this.size; k++){ 
                if(copy[(k*this.size) + i] != 0) {
                    move.push(copy[(k*this.size) + i]);
                }  
            }
            //make variable to hold value that was last merged to prevent most recent test result
            let prevent;
            for(let j = 0; j < move.length -1; j++) {
                if(move[j]==move[j+1]) {
                    if(j == prevent) {
                        continue;
                    }else {
                        move[j] += move[j+1];
                        this.gameState.score += move[j];
                        prevent = j;
                        move.splice(j+1,1);
                    }
                }
            }
            
            while(move.length != this.size) {
                move.push(0);
            }
            for(let j = 0; j < move.length; j++) {
                if(move[j] == 2048) {
                    this.gameState.won = true;
                }
                copy[(j*this.size)+i] = move[j];
            }  
        }
        
        
        let counter = 0;
        for(let i = 0; i < this.size*this.size; i++) {
            if(copy[i] == this.gameState.board[i]) {
                counter += 1;
            }
        }
        if(counter != this.size*this.size) {
            this.gameState.board = copy;
            this.addingValues();
        }
                  
       }

    if (direction == "down") {
        for(let i = 0; i < this.size; i++) {
            let move = [];
            for(let k = 0; k < this.size; k++){ 
                if(copy[(k*this.size) + i] != 0) {
                    move.push(copy[(k*this.size) + i]);
                }  
            }
            let prevent;
            for(let j = move.length - 1; j > 0; j--) {
                if(move[j]==move[j-1]) {
                    if(j == prevent) {
                        continue;
                    } else {
                        move[j-1] += move[j];
                        this.gameState.score += move[j-1];
                        prevent = j -1;
                        move.splice(j,1);
                    }
                }
            }
            while(move.length != this.size) {
                move.unshift(0);
            }
            for(let j = 0; j < move.length; j++) {
                if(move[j] == 2048) {
                    this.gameState.won = true;
                }
                copy[(j*this.size)+i] = move[j];
            }
        }
        
        let counter = 0;
        for(let i = 0; i < this.size*this.size; i++) {
            if(copy[i] == this.gameState.board[i]) {
                counter += 1;
            }
        }
        if(counter != this.size*this.size) {
            this.gameState.board = copy;
            this.addingValues();
        }
        
    } 
    if (direction == "right") {
        for(let i = 0; i < this.size*this.size; i+=this.size) {
            let move = [];
            for(let k = 0; k < this.size; k++){ 
                if(copy[i+k] != 0) {
                    move.push(copy[i+k]);
                }  
            }
            let prevent;
            for(let j = move.length -1; j > 0; j--) {
                if(move[j]==move[j-1]) {
                    if(j == prevent) {
                        continue;
                    } else {
                        move[j-1] += move[j];
                        this.gameState.score += move[j-1];
                        prevent = j-1;
                        move.splice(j,1);
                    }
                    
                }
            }
            while(move.length != this.size) {
                move.unshift(0);
            }
            for(let j = 0; j < move.length; j++) {
                if(move[j] == 2048) {
                    this.gameState.won = true;
                }
                copy[i+j] = move[j];
            }
        }
        
        
        let counter = 0;
        for(let i = 0; i < this.size*this.size; i++) {
            if(copy[i] == this.gameState.board[i]) {
                counter += 1;
            }
        }
        if(counter != this.size*this.size) {
            this.gameState.board = copy;
            this.addingValues();
        }
          
    } 


    if (direction == "left") {
        for(let i = 0; i < this.size*this.size; i+=this.size) {
            let move = [];
            for(let k = 0; k < this.size; k++){ 
                if(copy[i+k] != 0) {
                    move.push(copy[i+k]);
                }  
            }
            let prevent;
            for(let j = 0; j < move.length; j++) {
                if(move[j]==move[j+1]) {
                    if(j == prevent) {
                        continue;
                    }else {
                        move[j] += move[j+1];
                        this.gameState.score += move[j];
                        prevent = j;
                        move.splice(j+1,1);
                    }
                    
                }
            }
            while(move.length != this.size) {
                move.push(0);
            }
            for(let j = 0; j < move.length; j++) {
                if(move[j] == 2048) {
                    this.gameState.won = true;
                }
                copy[i+j] = move[j];
            }
        }
        
        let counter = 0;
        for(let i = 0; i < this.size*this.size; i++) {
            if(copy[i] == this.gameState.board[i]) {
                counter += 1;
            }
        }
        if(counter != this.size*this.size) {
            this.gameState.board = copy;
            this.addingValues();
        }
        
    } 

    let zeroCount = 0;
    let fullBoard = false;
    let legalMove = false;
    for(let i = 0; i < this.gameState.board.length; i++) {
        if(this.gameState.board[i] == 0) {
            zeroCount += 1;
        }
    }
    if(zeroCount == 0) {
        fullBoard = true;
    }
    
    for(let i = 0; i < this.gameState.board.length; i+=4) {
        for( let k = 0; k <this.size -1; k++) {
            if(this.gameState.board[i+k] == this.gameState.board[(i+k)+1]){
                legalMove = true;
                break;
            }
        }
    }
    for(let i = 0; i < this.size; i++) {
        for( let k = 0; k <this.size -1; k++) {
            if(this.gameState.board[(k*this.size)+i] == this.gameState.board[(k*this.size)+(i+this.size)]) {
                legalMove = true;
                break;
            }
        }
    }
    if(zeroCount != 0) {
        legalMove = true;
    }
    
    if(legalMove == false && fullBoard == true) {
        this.gameState.over = true;
        this.overArray.forEach(e => {
            e(this.getGameState());
        });
    }
    
    if(this.gameState.won == true) {
        this.wonArray.forEach(e => {
            e(this.getGameState());
        });
    }
        
    this.moveArray.forEach(e => {
        e(this.getGameState());
    });
    
    }
    onMove(callback) {
        this.moveArray.push(callback);
    }
    onLose(callback) {
        this.overArray.push(callback);
    }
    onWin(callback) {
        this.wonArray.push(callback);
    }
    getGameState() {
        return this.gameState;
    }    
}
