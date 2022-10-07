function aleatrio(min,max) {
        return Math.random()*(max-min)+min
        
}
let humao =  parseInt(prompt("coloque lo que desea \n piedra = 1 papel = 2 tijera = 3"))
console.log(humao)
let movHumano = humao
pc = Math.floor(aleatrio(1,4))


if(pc == 1){
    mopc="piedra"
}

if(pc == 2){
    mopc="papel"
}

if(pc == 3){
    mopc="tijera"
}
if(humao == 1){
    mopc="piedra"
}

if(humao == 2){
    mopc="papel"
}

if(humao == 3){
    mopc="tijera"
}
if(humao === pc){
    res = "empate"
}else if(humao == 1 && pc==2){
    res = "win"
}if(humao == 1 && pc==3){
    res = "loss"
}else if(humao == 2 && pc==1){
    res = "win"
}if(humao == 2 && pc==3){
    res = "loss"
}else if(humao == 3 && pc==1){
    res = "win"
}if(humao == 3 && pc==2){
    res = "loss"
}
alert(res)