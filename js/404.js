
document.title = `${site.nome} - Erro 404`


setTimeout(()=>{


    _('#conteudo').innerHTML =/*html*/ `

<h2>Oooops!</h2>

<p>O conteúdo que você está tentando acessar, não existe...</p>

<img class="imgErro404" src="img/404_img.jpg" alt="Erro 404">

    
    `;
    
}, 300);


