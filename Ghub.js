function detalhesJG(){
 const parametros = new URLSearchParams(window.location.search)
 const id = parametros.get("id") 
    fetch(`https://api.rawg.io/api/games/${id}?key=da6b29d1d1bb4707bc3f569800fc2273`)
    .then(response => response.json())
    .then(dados => {
            console.log(dados)
            mostrarJogo(dados)
            carregarReviews();
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
function salvarReview(){

    const usuario = localStorage.getItem("usuarioLogado");
    const texto = document.getElementById("review").value;
    const estrelas = document.getElementById("estrelas").value;

    const idJogo = new URLSearchParams(window.location.search).get("id");

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.push({
        jogo: idJogo,
        usuario: usuario,
        texto: texto,
        estrelas: estrelas
    });

    localStorage.setItem("reviews", JSON.stringify(reviews));

    carregarReviews();
}
function carregarReviews(){

    const idJogo = new URLSearchParams(window.location.search).get("id");

    const lista = document.getElementById("listaReviews");

    lista.innerHTML = "";

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    let reviewsJogo = reviews.filter(review => review.jogo == idJogo);

    reviewsJogo.forEach((review ,index) => {
        lista.innerHTML += `
            <div class="review">
                <h3>${review.usuario}</h3>
                <p>${"⭐".repeat(review.estrelas)}</p>
                <p>${review.texto}</p>
                <button onclick="apagar(${index})">Excluir Review</button>
            </div>
        `;
    });
}
function apagar(indice){
    let reviews = JSON.parse(localStorage.getItem("reviews")) || []
    const idJogo  = new 
    URLSearchParams(window.location.search).get("id")
    let reviewsJogo = reviews.filter(review => 
            review.jogo == idJogo);        
        let  reviewApa = reviewsJogo[indice]
        reviews = reviews.filter(review => !(review.jogo == reviewApa.jogo
            && 
            review.usuario == reviewApa.usuario &&
                review.texto == reviewApa.texto)
        );
        localStorage.setItem("reviews" , JSON.stringify(reviews));
        carregarReviews()
    



}
