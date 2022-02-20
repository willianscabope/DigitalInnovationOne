//Funcao para Enserir valor no storage
var contador = 0;

function inputVal() {

    var valLD = document.getElementById("valor1").value;



    var tbody = document.getElementById("vall");
    var tr = document.createElement("tr");

    var td = document.createElement("td");
    td.setAttribute("id", contador);
    td.appendChild(document.createTextNode(valLD));

    var tdDel = document.createElement("button");
    tdDel.appendChild(document.createTextNode("Apagar"));

    tdDel.setAttribute('class', 'btn btn-success');
    tdDel.setAttribute('type', 'button');
    tdDel.setAttribute('id', contador);
    tdDel.setAttribute('onclick', 'removerButao(' + contador + ')');


    tr.appendChild(td);
    tr.appendChild(tdDel);
    tbody.appendChild(tr);
    contador++;


}



//Funcao para remover 
function removerButao(a) {


    
    var botao = 0;
    while (botao < 2) {
        var rem = valInput = document.getElementById(a);
        rem.remove();

        botao++;
    }
}


//--------------------------------------------------------------------------------
