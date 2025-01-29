

db.collection("artigos")
    .where("status", "==", "on")
    .where("data", "<=", agoraISO())
    .orderBy("data", "desc")
    .get()
    .then((querySnapshot) => {

        /*
         Formata HTML de saida na var out.
        */
        out = /*html*/`
            <h2>Artigos Recentes</h2>
            <div class="lista-artigos">
        `;


        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            artigo = doc.data();
            artigo['id'] = doc.id;


            out += /*html*/`
            <div class="item-artigo" onclick="location.href='ler.html?artigo=${artigo.id}'" title="Clique para ler o artigo completo.">
            <img src="${artigo.imagem}" alt="${artigo.titulo}">
            <div>
                <h3>${artigo.titulo}</h3>
                <span>${artigo.resumo}</span>
            </div>
        </div>
        `;
       // console.log(artigo);
        });

        
        out += /*html*/'</div>';
       // console.log(out);
        _('#conteudo').innerHTML = out;
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });


