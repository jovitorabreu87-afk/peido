let pagina = 1
function procurarJogos(){
        fetch("https://api.rawg.io/api/games?page=2&page_size=100&key=da6b29d1d1bb4707bc3f569800fc2273")
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
}function procurarJogos(){

    fetch(`https://api.rawg.io/api/games?page=${pagina}&page_size=8000&key=da6b29d1d1bb4707bc3f569800fc2273`)

    .then(response => response.json())

    .then(dados => {

        console.log(dados)

        mostrarJogo(dados.results)

    })
}
function proximaP(){
    pagina++
    document.getElementById("pag").innerText = pagina
    procurarJogos()
}
function voltarP(){
    if(pagina > 1){
        pagina--
        document.getElementById("pag").innerText = pagina
        procurarJogos()
}
}
function detalJg(id){
     window.location.href = `Ghub.html?id=${id}`
}
