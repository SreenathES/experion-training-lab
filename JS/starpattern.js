let star  = '';
for(let i = 1; i <= 6; i++){
    for(let j = 1; j <= i; j++){
        star += '*';
    }
    star += '\n';
}

console.log(star);