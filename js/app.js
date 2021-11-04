
// INDEX
document.getElementById('first-btn').addEventListener("click", function(){
    window.location.href = 'second.html';
})



// SECOND


// RAM 
function v1(){
    var word = ["R","A","M"];
    var palavra = [];
    var i = 0;
    var x = document.getElementsByClassName("inpt_ram");
    for(var l = 0; l < x.length; l++) {
        palavra += [x[l].value];
    }  
    for(var c = 0; c < word.length; c++){
        if(palavra[c] == word[c]){
            i++;
        }
    }
    if(i == 3){
        for(var o = 0; o < x.length; o++){
            x[o].style.backgroundColor = 'green';
            x[o].disabled = true;
        }
    }else if(i != 3){
        for(var p = 0; p < x.length; p++){
            x[p].value = '';
        }
        alert('Resposta errada!')
    }
}