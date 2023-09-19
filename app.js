function login(){
    var username = document.getElementById("nameInput").value

    if(username != ""){
        localStorage.setItem("username", username)

        window.location = "siteMainPage.html"
    }
    else{
        document.getElementById("erro1").innerHTML = "Erro: Você precisa inserir um nome de usuário."
    }
}