 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyApiR7Wi6k7t8dlpwcFxkicMkEThYFCrDc",
    authDomain: "anderson-oficial.firebaseapp.com",
    databaseURL: "https://anderson-oficial.firebaseio.com",
    projectId: "anderson-oficial",
    storageBucket: "anderson-oficial.appspot.com",
    messagingSenderId: "346874877851"
  };
  firebase.initializeApp(config);

// Criação da base de dados email no email
  var emailFirebase = firebase.database().ref('email')




// O getElementById faz com que peguemos o formulário e o addEventListener permite saber queando o botão do tipo submit do formulário 
// foi clicado e já chama a função que será executada após o clique do botão.
document.getElementById('formulario').addEventListener('submit',submeter);

function submeter(e) {
    // e.preventDefault permite que possamos dar uma pausa no código, ele entra na função, quando executa ele para. Adicionar a letra "e" na função
    e.preventDefault();
    // o sinal de igual significa que esta variavel vai receber alguma informação
    var email = document.getElementById('emaildigitado').value;
    var nome = document.getElementById('nomedigitado').value;
    var telefone = document.getElementById('telefonedigitado').value;
    var msg = document.getElementById('msgdigitado').value;
    salvarFirebase(email, nome, telefone, msg);
    
  
}

function salvarFirebase(email, nome, telefone, msg) {
    // newEmail está recebendo a função do push do Firebase 
    var newEmail = emailFirebase.push()
    // A variavel email do firebase vai receber a nossa variavel email
    newEmail.set({
        email: email,
        nome: nome,
        telefone: telefone,
        msg: msg
    }); 
    console.log("Mensagem enviada para o Firebase");
}