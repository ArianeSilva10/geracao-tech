function BuscarRegioes() {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes`)
    .then(res => res.json())
    .then(res => {
        res.map(regiao => {
            regioes.innerHTML += `<option value="${regiao.id}">${regiao.nome}</option>`;
        })
})
}

BuscarRegioes();


function BuscarEstados() {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regioes.value}/estados`)
    .then(res => res.json())
    .then(res => {
        estados.innerHTML = "";
        res.map(estado => {
            estados.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`;
        })
    })
}
