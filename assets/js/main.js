const carregarFilmes = (catalogo) =>{
    catalogo[0].filmes.map((conteudo) => document.querySelector('#filmes .owl-carousel').innerHTML+= `<div class="item"><img src="${conteudo.url}" alt=""></div>`)
    catalogo[0].series.map((conteudo) => document.querySelector('#series .owl-carousel').innerHTML+= `<div class="item"><img src="${conteudo.url}" alt=""></div>`)
    catalogo[0].desenhos.map((conteudo) => document.querySelector('#desenhos .owl-carousel').innerHTML+= `<div class="item"><img src="${conteudo.url}" alt=""></div>`)
}
carregarFilmes(catalogo);

