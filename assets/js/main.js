const carregarFilmes = (catalogo) =>{
    catalogo[0].filmes.map((conteudo) => document.querySelector('#filmes .cards').innerHTML+= `<div class="card"><img src="${conteudo.url}" alt=""></div>`)
    catalogo[0].series.map((conteudo) => document.querySelector('#series .cards').innerHTML+= `<div class="card"><img src="${conteudo.url}" alt=""></div>`)
    catalogo[0].desenhos.map((conteudo) => document.querySelector('#desenhos .cards').innerHTML+= `<div class="card"><img src="${conteudo.url}" alt=""></div>`)
}
carregarFilmes(catalogo)