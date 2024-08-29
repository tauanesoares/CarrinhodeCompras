var limite = 0 

function Item(nomeItem, quantidade, preco) {
    this.nomeItem = nomeItem;
    this.quantidade = quantidade;
    this.preco = preco;
}

var itens = [];

function adicionarItem() {
    var nomeitemnovo = $("#nome").val();
    var quantidadenovo = $("#quantidade").val();
    var preconovo = $("#preco").val();
    var novoitem = new Item(nomeitemnovo, quantidadenovo, preconovo);
    itens.push(novoitem);
    atualizaTabela(novoitem);
    verificalimite()
}

function verificalimite(){

    limite += 1; 
    if(limite > 10){
        alert("limite de itens alcançado!")
    }

}

function atualizaTabela(item) {

    var htmlFinal = "<tr>";
    htmlFinal += "<td>" + item.nomeItem + "</td>";
    htmlFinal += "<td>" + item.quantidade + "</td>";
    htmlFinal += "<td>" + item.preco + "</td>";
    htmlFinal += "</tr>";
    $("#tabelaItensId").append(htmlFinal);
}

function fecharconta(){

    var htmlFinal = "você comprou: ";
    var soma = 0;
    for (var y = 0; y < itens.length; y++){

        htmlFinal += itens[y].quantidade + " " + itens[y].nomeItem + "- ";
        soma += itens[y].quantidade * itens[y].preco;
        
    }

    htmlFinal += "total: R$ " + soma; 
    $("#fechamentolabel").text(htmlFinal);

} 
