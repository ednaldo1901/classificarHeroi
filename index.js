
let nomeHeroi = 'sushi';
let xp = 9000;
let nivel = ''

if(xp < 1000){
    nivel = 'ferro'
}else if(xp >= 1001 && xp <= 2000){
    nivel = 'Bronze'
}else if(xp >= 2001 && xp <= 5000){
    nivel = 'Prata'
}else if(xp >= 7001 && xp <= 8000){
    nivel = 'Ouro'
}else if(xp >= 8001 && xp <= 9000){
    nivel = 'Platina'
}else if(xp >= 9001 && xp <= 10000){
    nivel = 'Imortal'
}else{
    xp > 10000;
    nivel = 'Radiante'
}


console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel} `)
