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

  var emailRef = firebase.database().ref('emails');
  
//Colocando um escutador para saber quando houve o click no botão
document.getElementById('emailforms').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var email = document.getElementById('Email').value;

    saveEmail(email)
}

function saveEmail(email){
    var newemailRef = emailRef.push();

    newemailRef.set({
        email: email
    });
}