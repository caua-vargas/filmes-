class Ator
{
    constructor(id,nome){
        this.nome=nome
        this.id=id
    }
}

class Diretor 
{
    constructor(id,nome){
        this.nome=nome
        this.id=id
    }
}

class Filme
{
    constructor(id, titulo, ano, genero, duracao, cartaz, sinopse, direcao, elenco, classificacao, avaliacao){
        this.id=id;
        this.titulo=titulo;
        this.ano=ano;
        this.genero=genero;
        this.duracao=duracao;
        this.cartaz=cartaz;
        this.sinopse=sinopse;
        this.direcao=direcao;
        this.elenco=elenco;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao;   
        this.btnDetalhes=null;
        
    }
    getCard = () => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        let imgCartaz= document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src",this.cartaz);
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
        let hCardTitle=document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");
        let divDetalhes= document.createElement("div");
        divDetalhes.setAttribute("style", "display:flex; justify-content:space-aroud;");
        let divGenero= document. createElement("div");
        divGenero.setAttribute ("style", "flex-grow:1;");
        let divAnoProducao= document.createElement("div");
        divAnoProducao.setAttribute("style", "flex-grow:1;");
        let divClassificacao= document.createElement("div");
        divClassificacao.setAttribute("style", "flex-grow:1;");
        hCardTitle.appendChild (document.createTextNode(this.titulo))
        divGenero.appendChild(document.createTextNode(this.genero))
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao))
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild (divAnoProducao);
        divDetalhes.appendChild(divClassificacao);
        card.appendChild (imgCartaz);
        card.appendChild (cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);
        
        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());

        return card;
        
    }
            
    setBtnDetalhes= () => {
        this.btnDetalhes = document.createElement('button');
        this.btnDetalhes.appendChild(document.createTextNode("detalhes"));
        this.btnDetalhes.setAttribute("id",this.id);
        this.btnDetalhes.setAttribute("class","btnDetalhesFilme");
    }

    getBtnDetalhes=()=>{
        return this.btnDetalhes
    }   
    
    getDetalhesFilmes=()=>{
        let cardDetalhes = document.createElement("div")
        cardDetalhes.setAttribute("class","cardDetalhes")
        let imgCartaz= document.createElement("img");
        imgCartaz.setAttribute("class", "img");
        imgCartaz.setAttribute("src",this.cartaz);
        let hCardTitle=document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");
        let divDetalhes= document.createElement("div");
        divDetalhes.setAttribute("style", "display:block;");
        let divGenero= document. createElement("div");
        divGenero.setAttribute ("style", "flex-grow:1;");
        let divAnoProducao= document.createElement("div");
        divAnoProducao.setAttribute("style", "flex-grow:1;");
        let divClassificacao= document.createElement("div");
        divClassificacao.setAttribute("style", "flex-grow:1;");
        let divDuracao= document.createElement("div");
        divDuracao.setAttribute("style", "flex-grow:1;");
        let divSinopse= document.createElement("div");
        divSinopse.setAttribute("style", "flex-grow:1;");
        let divDirecao= document.createElement("div");
        divDirecao.setAttribute("style", "flex-grow:1;");
        let divElenco= document.createElement("div");
        divElenco.setAttribute("style", "flex-grow:1;");
        let divAvaliacao= document.createElement("div");
        divAvaliacao.setAttribute("style", "flex-grow:1;");
        let btnFechar = document.createElement("button");
        let btnSalvar = document.createElement("button");
        btnSalvar.appendChild(document.createTextNode("Salvar"));
        btnSalvar.setAttribute("id","btnSalvar");
        btnFechar.appendChild(document.createTextNode("Fechar"));
        btnFechar.setAttribute("id","btnFechar");
        hCardTitle.appendChild (document.createTextNode(this.titulo))
        divGenero.appendChild(document.createTextNode(this.genero))
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao))
        divDuracao.appendChild(document.createTextNode(this.duracao))
        divSinopse.appendChild(document.createTextNode(this.sinopse))
        divDirecao.appendChild(document.createTextNode(this.direcao))
        divElenco.appendChild(document.createTextNode(this.elenco))
        divAvaliacao.appendChild(document.createTextNode(this.avaliacao))
        divDetalhes.appendChild(btnSalvar);
        divDetalhes.appendChild(btnFechar);
        divDetalhes.appendChild(divSinopse);
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild (divAnoProducao);
        divDetalhes.appendChild(divClassificacao);
        divDetalhes.appendChild(divDuracao);
        divDetalhes.appendChild(divDirecao);
        divDetalhes.appendChild(divElenco);
        divDetalhes.appendChild(divAvaliacao);
        cardDetalhes.appendChild (imgCartaz);
        cardDetalhes.appendChild (hCardTitle);
        cardDetalhes.appendChild(divDetalhes);
        cardDetalhes.append(imgCartaz)
        cardDetalhes.append(hCardTitle)
        cardDetalhes.append(divDetalhes)
        return cardDetalhes
    }
}