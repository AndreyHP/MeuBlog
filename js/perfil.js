firebase.auth().onAuthStateChanged((user) => {
    if (user) {

        telefone = '';
        verificado = 'Não';

        if (user.phoneNumber) 
            telefone = `<li><strong>Telefone:</strong> ${user.phoneNumber}</li>`;
        if (user.emailVerified)
            verificado = `Sim`;


        let out = /*html*/`

            <div id="perfilID">
            <h2>Olá ${user.displayName}</h2>
            <img class="fotoPerfil" src="${user.photoURL}" alt="Avatar de ${user.displayName}" referrerpolicy="no-referrer">

            <ul class="ulDados">
                <li><strong>E-mail:</strong> ${user.email}</li>
                <li><strong>ID:</strong> ${user.uid}</li>
                ${telefone}
                <li><strong>Cadastro:</strong> ${dataISOparaBR(dataJStoISO(user.metadata.creationTime))}</li>
                <li><strong>Último login:</strong> ${dataISOparaBR(dataJStoISO(user.metadata.lastSignInTime))}</li>
            </ul>
           
            <p class="p-center">Clique no botão abaixo para ver/editar seu perfil no Google.</p>
            <button class="btnPerfil" type="button" onclick="verPerfil()"><i class="fa-brands fa-google fa-fw"></i> Perfil no Google</button>

            <p class="p-center">Clique no botão abaixo para fazer logout/sair do aplicativo.</p>
            <button class="btnLogout" type="button" onclick="fbSignOut()"><i class="fa-solid fa-right-from-bracket fa-fw"></i> Logout / Sair</button>


            
            </div>
            
        `;

        _('#conteudo').innerHTML = out;
    } else {
        location.href = './index.html';
    }
});

/**
 * Abre o perfil do usuário no Google em um nova guia do navegador.
 */
function verPerfil() {
    window.open('https://myaccount.google.com/', '_blank');
}