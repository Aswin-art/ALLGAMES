/**@type {HTMLCanvasElement} */

const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

canvas.width = 500
canvas.height = 500

let turn = 1

let board = {
    x: 20,
    y: 20
}

let discs = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

function discsSetup(){
    let boardDiscs = []

    // for(let i = 0; i < 10; ++i){
    //     for(let j = 0; j < 10; ++j){
    //         if(discs[i][j] == 1){
    //             boardDiscs.push(new Disc('black', {x: 100, y: 100}))
    //         }else if(discs[i][j] == 2){
    //             boardDiscs.push(new Disc('white', {x: 100, y: 100}))
    //         }
    //     }
    // }
    // discs.forEach(e => {
    //     if(e == 1){
    //         boardDiscs.push(new Disc('black', {x: 100, y: 100}))
    //     }else if(e == 2){
    //         boardDiscs.push(new Disc('white', {x: 100, y: 100}))
    //     }
    // })

    return boardDiscs
}

function drawDiscs(){
    if(turn){
        let color = 'white'
    }else{
        let color = 'black'
    }
}

class Disc{
    constructor(color, position){
        this.color = color
        this.position = position
        this.radius = 15
    }
    
    draw(){
        ctx.fillStyle = this.color
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
    }

    update(){

    }
}

class Game{
    constructor(){
        this.setup()
    }
    
    setup() {
        this.discs = discsSetup()
    }

    draw(){
        [...this.discs].forEach(e => e.draw())
    }
    
    update(){
        [...this.discs].forEach(e => e.draw())
    }
}

const game = new Game()

let time = 0
let time_second_format = null
let time_minute_format = null
let time_hour_format = null
let time_format = null

let pause = false
let gameover = false

setInterval(() => {
    if(pause || gameover) return

    time++

    let second = Math.floor(time % 60)
    let minute = Math.floor(time / 60)
    let hour = Math.floor(time / 60 / 24)

    if(second < 10){
        time_second_format = '0' + second
    }else{
        time_second_format = second
    }
    if(minute < 10){
        time_minute_format = '0' + minute
    }else{
        time_minute_format = minute
    }
    if(hour < 10){
        time_hour_format = '0' + hour
    }else{
        time_hour_format = hour
    }

    time_format = `${time_hour_format}:${time_minute_format}:${time_second_format}`
}, 1000)

function animate(){
    if(pause || gameover) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.update()
    game.draw()

    requestAnimationFrame(animate)
}

animate()