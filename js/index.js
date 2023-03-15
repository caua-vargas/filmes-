let inputBuscarFilme = document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

    btnBuscarFilme.onclick = async() =>{
        event.preventDefault()
    if(inputBuscarFilme.value.length>0){
    let filmes = new Array();
    fetch("https://www.omdbapi.com/?apikey=f9f61240&s="+inputBuscarFilme.value)
    .then((resp)=> resp.json())
    .then((resp)=>{ console.log(resp)
    resp.Search.forEach((item)=>{
    console.log(item);
    let filme=new Filme(
    item.imdbID,
    item.Title,
    item.Year,
    null,
    null,
    item.Poster,
    null,
    null,
    null,
    null,
    null
    );
    filmes.push(filme);
});
listarFilmes(filmes);
    })

    }
return false;   
}

let listarFilmes = (filmes) =>{
    let listaFilmes = document.querySelector("#lista-filmes");
    listaFilmes.innerHTML = "";
    console.log(listaFilmes);
    if (filmes.length > 0) {
    filmes.forEach(async(filme)=> {
    listaFilmes.appendChild( filme.getCard());
    });
}
}

let detalhelFilme = async (id)=>{
    fetch("https://www.omdbapi.com/?apikey=f9f61240&s="+id)
    .then((resp)=> resp.json())
    .then((resp)=>{
        
    })
}
//filme=new filme (botar isso dnentro do botão detalhe filme)
