//serve para mostrar os erros ocultos no terminal
"use strict"

async function pesquisarContinente (continente){
    const url = `https://restcountries.com/v3.1/region/${continente}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

function criarimagem (link){
    const galeria = document.getElementById('galeria')
    const novaImg = document.createElement('img')
    const novoNome =  document.createElement('h2')

    novaImg.src = link.flags.png
    novoNome.textContent = link.name.common

    galeria.appendChild(novaImg)
    galeria.appendChild(novoNome)

}

async function preencherFotos (){
    const continente = document.getElementById('continente').value
    const fotos = await pesquisarContinente(continente)
    const galeria = document.getElementById('galeria')

    galeria.replaceChildren('')
    fotos.forEach(criarimagem)
        
    
    console.log (fotos)
    

}

document.getElementById('buscar')
    .addEventListener('click', preencherFotos)