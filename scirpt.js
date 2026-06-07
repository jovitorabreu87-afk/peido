function cadastrar() {
    let usuario = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;

    localStorage.setItem("nome", usuario);
    localStorage.setItem("senha", senha);

    alert("Cadastro realizado!");
    window.location.href = "login.html";
}

function login() {
    let usuario = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;

    let usuarioSalvo = localStorage.getItem("nome");
    let senhaSalva = localStorage.getItem("senha");

    if (usuario === usuarioSalvo && senha === senhaSalva) {

        localStorage.setItem("usuarioLogado", usuario);

        alert("Login realizado com sucesso!");

        window.location.href = "jgs.html";

    } else {

        alert("Usuário ou senha incorretos");

    }
}
