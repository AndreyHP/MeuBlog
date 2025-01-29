/***********************************************
 * Nome do Arquivo: funcoes.js
 * Descrição: Biblioteca de funções JavaScript de uso geral.
 * Autor: Andrey Marins
 * Data de Criação: 13/01/2025
 * Última Modificação: 13/01/2025
 * Versão: 1.0
 ***********************************************/

/**
 * Formata uma data no formato especificado.
 * @param {Date} data - A data a ser formatada.
 * @param {string} formato - O formato desejado ('ISO' ou 'BR').
 * @returns {string} A data formatada conforme o formato especificado.
 */

function formatarData(data, formato) {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');

    if (formato === 'ISO') {
        return `${ano}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
    } else if (formato === 'BR') {
        return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
    } else {
        throw new Error('Formato inválido. Use "ISO" ou "BR".');
    }
}

/**
 * Obtém a data e hora atual no formato ISO.
 * @returns {string} A data e hora atual no formato ISO.
 */
function agoraISO() {
    const agora = new Date();
    return formatarData(agora, 'ISO');
}


function _(seletor) {
    if (seletor.startsWith('#') || seletor.startsWith('.') || seletor.includes(' ')) {
        const resultado = document.querySelectorAll(seletor);
        return resultado.length === 1 ? resultado[0] : resultado;
    }
    return document.querySelectorAll(seletor);
}

/**
 * Converte uma data do formato ISO para o formato BR.
 * @param {string} dataISO - A data no formato ISO (YYYY-MM-DD HH:MM:SS).
 * @returns {string} A data no formato BR (DD/MM/YYYY HH:MM).
 */
function dataISOparaBR(dataISO) {
    const data = new Date(dataISO);
    return formatarData(data, 'BR');
}

/**
 * Converte uma data do formato JavaScript para o formato ISO.
 * @param {Date} dataJS - A data no formato JavaScript.
 * @returns {string} A data no formato ISO (YYYY-MM-DD HH:MM:SS).
 */
function dataJStoISO(dataJS) {
    const data = new Date(dataJS);
    return formatarData(data, 'ISO');
}


function template(){


    return /*html*/`
    
    
    <header>
            <div class="header-class">
                <a href="/">
                    <img class="logo"  src=${site.logo} alt="${site.titulo}">
                </a>  
                <h1>Meu Blog statico</h1> 
            </div>
            <form action="https://www.google.com/search?" method="get">
                <input type="search" name="q" placeholder="Buscar..">
                <button type="submit" class="search-button">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
            
        </header>

        <nav>
            <a href="" class="menu-link" title="inicio">
                <img class="nav-img" src="./img/home.png" alt="home">
            </a>
            <a href="" class="menu-link" title="sobre">
             <img class="nav-img" src="./img/user.png" alt="user">  
            </a>
        </nav>

        <main>
            <div id="conteudo"></div>
        </main>

        <footer>
            ${site.licensa}
            
            <a href="politica-de-privacidade.html">Politica de privacidade</a>
            
            <a href="#wrap" title="ir para o começo da pagina">
                <i class="fa-solid fa-arrow-up"></i>
            </a>
        </footer> 
    `;

};