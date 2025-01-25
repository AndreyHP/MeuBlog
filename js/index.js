let data = "";

db.collection("artigos")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            data = doc.data();
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

_('#artigos').innerHTML = `${data.artigos}`;

async function showData(){
    await data;
    console.log(data);
}

