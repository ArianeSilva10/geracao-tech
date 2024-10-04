function AddSelect(tag, limite) {
    for(let i = 1; i < limite; i++){
        tag.innerHTML += `<option>${i}</option>`
    }
}
AddSelect(dia, 32);
AddSelect(mes, 13);