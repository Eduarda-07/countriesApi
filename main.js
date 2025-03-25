//serve para mostrar os erros ocultos no terminal
"use strict"

async function pesquisarContinente (continente){
    const url = `https://restcountries.com/v3.1/region/${continente}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

function criarCard (link, galeria){
    // const galeria = document.getElementById('galeria')
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
    const tela2 = document.getElementById('tela2')
    const galeria = document.getElementById('galeria')

    tela2.replaceChildren('')
    galeria.replaceChildren('')
   
    fotos.forEach((foto) => criarCard(foto, galeria))
    tela2.appendChild(galeria)
    tela2.style.display = 'block'

    const h1_modificado = document.querySelector('.h1_original')
    const input = document.getElementById('continente');
    const button = document.getElementById('buscar');

    h1_modificado.classList.remove('h1_original');
    h1_modificado.classList.add('h1_modificado');
    input.classList.remove('pesquisar_original');
    input.classList.add('pesquisar_modificado');
    button.classList.remove('buscar_original');
    button.classList.add('buscar_modificado');


    console.log (fotos) 
}

document.getElementById('buscar')
    .addEventListener('click', preencherFotos)