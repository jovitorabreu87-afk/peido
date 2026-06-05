let pagina = Number(localStorage.getItem("pgAT")) || 1

window.onload = function(){

    document.getElementById("pag").innerText = pagina

    procurarJogos()

}
function procurarJogos(){

    fetch(`https://api.rawg.io/api/games?page=${pagina}&page_size=40&key=da6b29d1d1bb4707bc3f569800fc2273`)

    .then(response => response.json())

    .then(dados => {

        console.log(dados)

        mostrarJogo(dados.results)

    })
}
function mostrarJogo(jogos){
const div = document.getElementById("games")
        div.innerHTML = ""
        jogos.forEach(jogo => {
        div.innerHTML += ` 
            <div class="card" onclick = "detalJg(${jogo.id})">
                    <img src="${jogo.background_image}">                 
                    <h2 class = "text">${jogo.name}</h2>
                    <p class = "text">🌟${jogo.rating}</p>  
            </div>
        
        `
    })
}
function proximaP(){
    pagina++
    document.getElementById("pag").innerText = pagina
    localStorage.setItem("pgAT",pagina)
    procurarJogos()
     window.scrollTo({
                top: 0,
                behavior: "smooth"
             })
}
function voltarP(){
    if(pagina > 1){
        pagina--
        document.getElementById("pag").innerText = pagina
        localStorage.setItem("pgAT",pagina)
        procurarJogos()
        window.scrollTo({
                top: 0,
                behavior: "smooth"
             })
}
}
function detalJg(id){
     localStorage.setItem("pgAT", pagina)
     window.location.href = `Ghub.html?id=${id}`
}
function buscaInt(){
    const pesquisa = 
    document.getElementById("pesquisa").value
    if(pesquisa.trim() === ""){
        pagina = Number(localStorage.getItem("pgAT")) || 1;
        document.getElementById("pag").innerText = pagina;
        procurarJogos()
        return
    }  fetch(
    `https://api.rawg.io/api/games?search=${pesquisa}&page_size=40&key=da6b29d1d1bb4707bc3f569800fc2273`
    ) 
    
    
    .then(response => response.json())

    .then(dados => {

        mostrarJogo(dados.results)

    })

}


