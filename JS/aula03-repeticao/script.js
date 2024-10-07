for(let d = 1; d < 32;  d++){
    dispatchEvent.innerHTML += `<option>${d}</option>`;
}

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

for(let m = 0; m < 12; m++){
    mes.innerHTML += `<option>${meses[m]}</option>`;
}

for(let a = 2024; a > 1973; a--){
    ano.innerHTML += `<option>${a}</option>`;
}