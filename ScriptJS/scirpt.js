function login(){
    const user = document.getElementById("nome").value
    const pass = document.getElementById("senha").value
        const corretoN = "admin"
        const corretoS = "123"
        if(user === corretoN && pass === corretoS ){
              localStorage.setItem("loged","true")
               window.location.href = "./P1/jgs.html"    
            }else if(user.length == 0 || pass.length == 0){
                document.getElementById("err").innerHTML = ("Preencha todas as areas de login!!")
            }else {
            document.getElementById("err").innerHTML = ("Senha ou usuario incorreto, tente novamente!")        
            }
}