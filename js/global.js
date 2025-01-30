const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

window.onload = () => {

    // carrega o html
    _("#wrap").innerHTML =  template();

    // Observa as mudanças de status do usuário
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user.displayName);
          // ...
        } else {
          // User is signed out
          // ...
        }
      });

    // pega o ano atual e atualiza
    let agora = new Date();
    let ano = agora.getFullYear();
   
    if (ano > site.ano){
        _('#footerAno').innerHTML = `${site.ano} ${ano}`;
    }
    else{
        _('#footerAno').innerHTML = `${site.ano}`;
    }

    _('#usuarioAcao').addEventListener('click', (evento) => {

        evento.preventDefault();

        let acao = _('#usuarioAcao').getAttribute('data-acao');
        switch (acao) {
            case 'login':
                fbSigIn();
                break;
            case 'logout':
                fbSignOut();
                break;
            case 'perfil':
                location.href = 'perfil.html';
        };  

    });

};