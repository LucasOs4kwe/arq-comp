
// // INDEX
// document.getElementById('first-btn').addEventListener("click", function(){
//     window.location.href = 'second.html';
// })



// SECOND

function v1(){
    var word = ["R","A","M"];
    var l1 = document.getElementById('inpt1').value;
    var l2 = document.getElementById('inpt2').value;
    var l3 = document.getElementById('inpt3').value;
    var palavra = [l1,l2,l3];
    var i = 0;
    for(var c = 0; c < word.length; c++){
        if(palavra[c] == word[c]){
            i++;
        }
    }
    if(i == 3){
        document.getElementById('inpt1').style.backgroundColor = 'green';
        document.getElementById('inpt2').style.backgroundColor = 'green';
        document.getElementById('inpt3').style.backgroundColor = 'green';
        var dis = document.getElementById('inpt1');
        var dis2 = document.getElementById('inpt2');
        var dis3 = document.getElementById('inpt3');
        dis.disabled = true;
        dis2.disabled = true;
        dis3.disabled = true;
    }else if(i != 3){
        inpt1.value = '';
        inpt2.value = '';
        inpt3.value = '';
        alert('Resposta errada!')
    }
    // FAZER O BOTÃO SUMIR E APARECER UM ITEM CHECK NO LUGAR QND A RESPOSTA ESTIVER CORRETA
}