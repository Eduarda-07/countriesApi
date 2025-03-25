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

    //dataset serve para guardar o nome do pais no objeto novaImg
    novaImg.dataset.infoPais = link.name.common
    
    card.appendChild(novaImg)
    card.appendChild(novoNome)

    galeria.appendChild(card)

    novaImg.addEventListener('click', async function(){
        await criarPais(pais)
    })
  
}

async function buscarPais(pais){
    const url = `https://restcountries.com/v3.1/name/${pais}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

function criarPais (link){
    const tela3 = document.getElementById('tela3')
    const box = document.getElementById('box')
    const conteudo1 = document.createElement('div')

    conteudo1.classList.add('conteudo1')
    const nomePais =  document.createElement('h1')
    const novaImg = document.createElement('img')
    const flag =  document.createElement('h2')

    nomePais.textContent = link.name.common
    novaImg.src = link.flags.png
    flag.textContent = 'Flag'

    const conteudo2 = document.createElement('div')

    conteudo2.classList.add('conteudo2')
    const nomeOficial =  document.createElement('h2')
    const nome =  document.createElement('h3')
    const independente =  document.createElement('h2')
    const status =  document.createElement('h3')
    const coin =  document.createElement('h2')
    const nomeCoin =  document.createElement('h3')
    const capital =  document.createElement('h2')
    const nomeCapital =  document.createElement('h3')

    nomeOficial.textContent = 'Official name:'
    nome.textContent = link.name.official
    independente.textContent = 'Independent:'
    status.textContent = link.independente
    coin.textContent = 'Coin:'
    nomeCoin.textContent = link.currencies[0].name
    capital.textContent = 'Capital:'
    nomeCapital.textContent = link.capital

    const conteudo3 = document.createElement('div')

    conteudo3.classList.add('conteudo3')
    const subRegiao =  document.createElement('h2')
    const nomeSubRegiao =  document.createElement('h3')
    const lingua =  document.createElement('h2')
    const idioma =  document.createElement('h3')
    const nativos =  document.createElement('h2')
    const nomeNativos =  document.createElement('h3')
    const populacao =  document.createElement('h2')
    const numeroPopulacao =  document.createElement('h3')

    subRegiao.textContent = 'Subregion:'
    nomeSubRegiao.textContent = link.subregion
    lingua.textContent = 'Language:'
    idioma.textContent = link.languages[0]
    nativos.textContent = 'Natives:'
    nomeNativos.textContent = link.demonyms.eng.m
    populacao.textContent = 'Population:'
    numeroPopulacao.textContent = link.population

    conteudo1.appendChild( nomePais)
    conteudo1.appendChild(novaImg)
    conteudo1.appendChild(flag)

    conteudo2.appendChild(nomeOficial)
    conteudo2.appendChild(nome)
    conteudo2.appendChild(independente)
    conteudo2.appendChild(status)
    conteudo2.appendChild(coin)
    conteudo2.appendChild(nomeCoin)
    conteudo2.appendChild(capital)
    conteudo2.appendChild(nomeCapital)

    conteudo3.appendChild(subRegiao)
    conteudo3.appendChild(nomeSubRegiao)
    conteudo3.appendChild(lingua)
    conteudo3.appendChild(idioma)
    conteudo3.appendChild(nativos)
    conteudo3.appendChild(nomeNativos)
    conteudo3.appendChild(populacao)
    conteudo3.appendChild(numeroPopulacao)

    box.appendChild(conteudo1)
    box.appendChild(conteudo2)
    box.appendChild(conteudo3)

    tela3.appendChild(box)
    tela3.style.display = 'block'

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

    //tornando tela 2 visível
    tela2.style.display = 'block'

    // modificando as configurações do header
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