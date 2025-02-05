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
          console.log(user.photoURL);
          _('#usuarioAcao img').src = user.photoURL;

            if (site.verPerfil) {
                _('#usuarioAcao').title = 'Ver seu perfil';
                _('#usuarioAcao').href = './perfil.html';
                _('#usuarioAcao').setAttribute('data-acao', 'perfil');
            }else {
                _('#usuarioAcao').title = 'Faça logout';
                _('#usuarioAcao').href = './perfil.html';
                _('#usuarioAcao').setAttribute('data-acao', 'logout');
            }


        } else {
            // Se está fazendo logout
            // console.log('não logado')

            // Se está logado
            _('#usuarioAcao img').src = './img/user.png'; // Mostra a imagem
            _('#usuarioAcao img').alt = 'Faça login'; // Troca o alt da imagem
            _('#usuarioAcao').title = 'Faça login'; // Troca o title
            _('#usuarioAcao').href = './login.html'; // Troca o link ao clicar (inútil)
            _('#usuarioAcao').setAttribute('data-acao', 'login'); // Troca o valor de `data-acao`
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
                location.href = './perfil.html';
        };  

    });

};