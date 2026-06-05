function detalhesJG(){
 const parametros = new URLSearchParams(window.location.search)
 const id = parametros.get("id") 
    fetch(`https://api.rawg.io/api/games/${id}?key=da6b29d1d1bb4707bc3f569800fc2273`)
    .then(response => response.json())
    .then(dados => {
            console.log(dados)
            mostrarJogo(dados)
    })
}
function mostrarJogo(jogo){
    const descricao = jogo.description_raw
    .split("Español")[0]
    .split("Русский")[0]
    const div = document.getElementById("detalhes")
    div.innerHTML = `           
            <img src="${jogo.background_image}">    
            <h1>${jogo.name}<h1>
            <p>🌟${jogo.rating}<p>
            <p>${descricao}<p>
    `
}
function voltar(){
      window.history.back()
}
