document.getElementById("loginForm").addEventListener("submit", event => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    let isValid = true;
  
    // Validação do campo de usuário
    if (username === "") {
      usernameError.textContent = "Por favor, insira um nome de usuário.";
      isValid = false;
    } else {
      usernameError.textContent = "";
    }
  
    // Validação do campo de senha
    if (password === "") {
      passwordError.textContent = "Por favor, insira uma senha.";
      isValid = false;
    } else {
      passwordError.textContent = "";
    }
  
    // Se não houver erros, envie o formulário
    if (!isValid) {
      event.preventDefault(); // Impede o envio do formulário se houver erros
    }
  });