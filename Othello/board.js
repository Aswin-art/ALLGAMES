/**@type {HTMLCanvasElement} */

const canvasBackground = document.getElementById('background')
const ctxBackground = canvasBackground.getContext('2d')

canvasBackground.width = 500
canvasBackground.height = 500

function drawBoards(){
    let boards = []

    for(let row = 0; row < 10; ++row){
        for(let column = 0; column < 10; ++column){
            const position = {
                x: column,
                y: row
            }

            boards.push(new Board(position))
        }
    }

    return boards
}

class Board{
    constructor(position){
        this.width = 50
        this.height = 50
        this.color = 'green'
        this.position = position
    }

    draw(){
        ctxBackground.fillStyle = this.color
        ctxBackground.fillRect(this.position.x * this.width, this.position.y * this.height, this.width, this.height)
        ctxBackground.strokeStyle = 'black'
        ctxBackground.strokeRect(this.position.x * this.width, this.position.y * this.height, this.width, this.height)
    }
}

class GameBakcground{
    constructor(){
        this.boards = drawBoards()
    }

    draw(){
        [...this.boards].forEach(e => e.draw())
    }
}

const gameBackground = new GameBakcground()

function animate(){
    ctxBackground.clearRect(0, 0, canvasBackground.width, canvasBackground.height)
    gameBackground.draw()
    requestAnimationFrame(animate)
}

animate()