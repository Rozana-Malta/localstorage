let btn = document.querySelector("#versenha")
let btnconfirm = document.querySelector("#confirmversenha")


let nome = document.querySelector("#nome")
let labelNome = document.querySelector("#labelNome")
let validNome = false

let email = document.querySelector("#email")
let labelEmail = document.querySelector("#labelEmail")
let validEmail = false

let telefone = document.querySelector("#telefone")
let labelTelefone = document.querySelector("#labelTelefone")
let validTelefone = false

let senha = document.querySelector("#senha")
let labelSenha = document.querySelector("#labelSenha")
let validSenha = false

let confirmarsenha = document.querySelector("#confirmarsenha")
let labelConfirmSenha = document.querySelector("#labelConfirmSenha")
let validConfirmSenha = false

//não está funcionando
nome.addEventListener("Keyup", () => {
    if(nome.nodeValue.length == 2) {
        labelNome.setAttribute("style", "color: red")
        labelNome.innerHTML = "<strong>Nome*Insira no minimo 3 caracterese</strong>"
        nome.setAttribute("style", "border-color: red")
    } else {
        labelNome.setAttribute("style", "color: green")
        labelNome.innerHTML = "Nome"
        nome.setAttribute("style", "border-color: red")

    }
})

email.addEventListener("Keyup", () => {
    if(email.value.length <= 2) {
        labelEmail.setAttribute("style", "color: red")
        labelEmail.innerHTML = "<strong>Nome*Insira no minimo 3 caracterese</strong>"
        email.setAttribute("style", "border-color: red");
    } else {
        labelEmail.setAttribute("style", "color: green")
        labelEmail.innerHTML = "Nome"
        email.setAttribute("style", "border-color: red")

    }
})

// não está funcionando



function cadastrar(){
   let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]")

   listaUser.push(
    {
        nomeCad: nome.value,
        emailCad: email.value,
        telefoneCad: telefone.value,
        senhaCad: senha.value,
    }
    )
    localStorage.setItem("listaUser", JSON.stringify(listaUser))
}

btn.addEventListener("click", () => {
    let inputSenha = document.querySelector("#senha")

    if(inputSenha.getAttribute("type") == "password"){
        inputSenha.setAttribute("type", "text")
    } else {
        inputSenha.setAttribute("type", "password")
    }
})


btnconfirm.addEventListener("click", () => {
    let inputConfirmSenha = document.querySelector("#confirmarsenha")

    if(inputConfirmSenha.getAttribute("type") == "password"){
        inputConfirmSenha.setAttribute("type", "text")
    } else {
        inputConfirmSenha.setAttribute("type", "password")
    }
})
