//serve para mostrar os erros ocultos no terminal
"use strict"

async function pesquisarContinente (continente){
    const url = `https://restcountries.com/v3.1/region/${continente}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

function criarCard (link){
    const galeria = document.getElementById('galeria')
    const card = document.createElement('div')
    card.classList.add('cards')
    const novaImg = document.createElement('img')
    const novoNome =  document.createElement('h2')

    novaImg.src = link.flags.png
    novoNome.textContent = link.name.common
    
    card.appendChild(novaImg)
    card.appendChild(novoNome)

    galeria.appendChild(card)

}

async function preencherFotos (){
    const continente = document.getElementById('continente').value
    const fotos = await pesquisarContinente(continente)
    const galeria = document.getElementById('galeria')

    galeria.replaceChildren('')
    fotos.forEach(criarCard)
    
    console.log (fotos)
    

}

document.getElementById('buscar')
    .addEventListener('click', preencherFotos)