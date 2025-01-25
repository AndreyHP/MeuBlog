const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


window.onload = () => {

    // carrega o html
    _("#wrap").innerHTML =  template();

    // pega o ano atual e atualiza
    let agora = new Date();
    let ano = agora.getFullYear();
   
    if (ano > site.ano){
        _('#footerAno').innerHTML = `${site.ano} ${ano}`;
    }
    else{
        _('#footerAno').innerHTML = `${site.ano}`;
    }

};