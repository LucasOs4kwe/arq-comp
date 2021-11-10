// INDEX
document.getElementById('first-btn').addEventListener("click", function () {
    window.location.href = 'second.html';
})

// SECOND
// 1
function v1() {
    var word = ["C", "P", "U"];
    var palavra = [];
    var i = 0;
    var x = document.getElementsByClassName("question1");
    for (var l = 0; l < x.length; l++) {
        palavra += [x[l].value];
    }
    for (var c = 0; c < word.length; c++) {
        if (palavra[c] == word[c]) {
            i++;
        }
    }
    if (i == word.length) {
        for (var o = 0; o < x.length; o++) {
            x[o].style.backgroundColor = 'green';
            x[o].disabled = true;
        }
    } else if (i != word.length) {
        for (var p = 0; p < x.length; p++) {
            x[p].value = '';
        }
        alert('Resposta errada!')
    }
}

//2
function v2() {
    var word = ["U", "L", "A"];
    var palavra = [];
    var i = 0;
    var x = document.getElementsByClassName("question2");
    for (var l = 0; l < x.length; l++) {
        palavra += [x[l].value];
    }
    for (var c = 0; c < word.length; c++) {
        if (palavra[c] == word[c]) {
            i++;
        }
    }
    if (i == word.length) {
        for (var o = 0; o < x.length; o++) {
            x[o].style.backgroundColor = 'green';
            x[o].disabled = true;
        }
    } else if (i != word.length) {
        for (var p = 0; p < x.length; p++) {
            x[p].value = '';
        }
        alert('Resposta errada!')
    }
}
// 3
function v3() {
    var word = ['D', 'M', 'A'];
    var palavra = [];
    var i = 0;
    var x = document.getElementsByClassName("question3");
    for (var l = 0; l < x.length; l++) {
        palavra += [x[l].value];
    }
    for (var c = 0; c < word.length; c++) {
        if (palavra[c] == word[c]) {
            i++;
        }
    }
    if (i == 3) {
        for (var o = 0; o < x.length; o++) {
            x[o].style.backgroundColor = 'green';
            x[o].disabled = true;
        }
    } else if (i != 3) {
        for (var p = 0; p < x.length; p++) {
            x[p].value = '';
        }
        alert('Resposta errada!')
    }
}
// 4
function v4() {
    var word = ['C', 'S'];
    var palavra = [];
    var i = 0;
    var x = document.getElementsByClassName("question4");
    for (var l = 0; l < x.length; l++) {
        palavra += [x[l].value];
    }
    for (var c = 0; c < word.length; c++) {
        if (palavra[c] == word[c]) {
            i++;
        }
    }
    if (i == 2) {
        for (var o = 0; o < x.length; o++) {
            x[o].style.backgroundColor = 'green';
            x[o].disabled = true;
        }
    } else if (i != 2) {
        for (var p = 0; p < x.length; p++) {
            x[p].value = '';
        }
        alert('Resposta errada!')
    }
}
// 5
function v5() {
    var word = ['R', 'A', 'M'];
    var palavra = [];
    var i = 0;
    var x = document.getElementsByClassName("question5");
    for (var l = 0; l < x.length; l++) {
        palavra += [x[l].value];
    }
    for (var c = 0; c < word.length; c++) {
        if (palavra[c] == word[c]) {
            i++;
        }
    }
    if (i == 3) {
        for (var o = 0; o < x.length; o++) {
            x[o].style.backgroundColor = 'green';
            x[o].disabled = true;
        }
    } else if (i != 3) {
        for (var p = 0; p < x.length; p++) {
            x[p].value = '';
        }
        alert('Resposta errada!')
    }
}
// 6
function v6() {
    var word = ['R', 'O', 'M'];
    var palavra = [];
    var i = 0;
    var x = document.getElementsByClassName("question6");
    for (var l = 0; l < x.length; l++) {
        palavra += [x[l].value];
    }
    for (var c = 0; c < word.length; c++) {
        if (palavra[c] == word[c]) {
            i++;
        }
    }
    if (i == 3) {
        for (var o = 0; o < x.length; o++) {
            x[o].style.backgroundColor = 'green';
            x[o].disabled = true;
        }
    } else if (i != 3) {
        for (var p = 0; p < x.length; p++) {
            x[p].value = '';
        }
        alert('Resposta errada!')
    }
}
// 7
function v7() {
    var word = ['E', 'P', 'R', 'O', 'M'];
    var palavra = [];
    var i = 0;
    var x = document.getElementsByClassName("question7");
    for (var l = 0; l < x.length; l++) {
        palavra += [x[l].value];
    }
    for (var c = 0; c < word.length; c++) {
        if (palavra[c] == word[c]) {
            i++;
        }
    }
    if (i == 5) {
        for (var o = 0; o < x.length; o++) {
            x[o].style.backgroundColor = 'green';
            x[o].disabled = true;
        }
    } else if (i != 5) {
        for (var p = 0; p < x.length; p++) {
            x[p].value = '';
        }
        alert('Resposta errada!')
    }
}
// 8
function v8() {
    var word = ['F', 'L', 'A', 'S', 'H'];
    var palavra = [];
    var i = 0;
    var x = document.getElementsByClassName("question8");
    for (var l = 0; l < x.length; l++) {
        palavra += [x[l].value];
    }
    for (var c = 0; c < word.length; c++) {
        if (palavra[c] == word[c]) {
            i++;
        }
    }
    if (i == 5) {
        for (var o = 0; o < x.length; o++) {
            x[o].style.backgroundColor = 'green';
            x[o].disabled = true;
        }
    } else if (i != 5) {
        for (var p = 0; p < x.length; p++) {
            x[p].value = '';
        }
        alert('Resposta errada!')
    }
}
// 9
function v9() {
    var word = ['M', 'E', 'M', 'O', 'R', 'I', 'A', 'D', 'E', 'M', 'A', 'S', 'S', 'A'];
    var palavra = [];
    var i = 0;
    var x = document.getElementsByClassName("question9");
    for (var l = 0; l < x.length; l++) {
        palavra += [x[l].value];
    }
    for (var c = 0; c < word.length; c++) {
        if (palavra[c] == word[c]) {
            i++;
        }
    }
    if (i == 14) {
        for (var o = 0; o < x.length; o++) {
            x[o].style.backgroundColor = 'green';
            x[o].disabled = true;
        }
    } else if (i != 14) {
        for (var p = 0; p < x.length; p++) {
            x[p].value = '';
        }
        alert('Resposta errada!')
    }
}
// 10
function v10() {
    var word = ['D', 'U', 'A', 'L', 'C', 'O', 'R', 'E'];
    var palavra = [];
    var i = 0;
    var x = document.getElementsByClassName("question10");
    for (var l = 0; l < x.length; l++) {
        palavra += [x[l].value];
    }
    for (var c = 0; c < word.length; c++) {
        if (palavra[c] == word[c]) {
            i++;
        }
    }
    if (i == 8) {
        for (var o = 0; o < x.length; o++) {
            x[o].style.backgroundColor = 'green';
            x[o].disabled = true;
        }
    } else if (i != 8) {
        for (var p = 0; p < x.length; p++) {
            x[p].value = '';
        }
        alert('Resposta errada!')
    }
}
// 11
function v11() {
    var word = ['Q', 'U', 'A', 'D', 'C', 'O', 'R', 'E'];
    var palavra = [];
    var i = 0;
    var x = document.getElementsByClassName("question11");
    for (var l = 0; l < x.length; l++) {
        palavra += [x[l].value];
    }
    for (var c = 0; c < word.length; c++) {
        if (palavra[c] == word[c]) {
            i++;
        }
    }
    if (i == 8) {
        for (var o = 0; o < x.length; o++) {
            x[o].style.backgroundColor = 'green';
            x[o].disabled = true;
        }
    } else if (i != 8) {
        for (var p = 0; p < x.length; p++) {
            x[p].value = '';
        }
        alert('Resposta errada!')
    }
}
// 12
function v12() {
    var word = ['A', 'D', 'D', 'R', 'E', 'S', 'S', 'B', 'U', 'S'];
    var palavra = [];
    var i = 0;
    var x = document.getElementsByClassName("question12");
    for (var l = 0; l < x.length; l++) {
        palavra += [x[l].value];
    }
    for (var c = 0; c < word.length; c++) {
        if (palavra[c] == word[c]) {
            i++;
        }
    }
    if (i == 10) {
        for (var o = 0; o < x.length; o++) {
            x[o].style.backgroundColor = 'green';
            x[o].disabled = true;
        }
    } else if (i != 10) {
        for (var p = 0; p < x.length; p++) {
            x[p].value = '';
        }
        alert('Resposta errada!')
    }
}
// 13
function v13() {
    var word = ['D', 'A', 'T', 'A', 'B', 'U', 'S'];
    var palavra = [];
    var i = 0;
    var x = document.getElementsByClassName("question13");
    for (var l = 0; l < x.length; l++) {
        palavra += [x[l].value];
    }
    for (var c = 0; c < word.length; c++) {
        if (palavra[c] == word[c]) {
            i++;
        }
    }
    if (i == 7) {
        for (var o = 0; o < x.length; o++) {
            x[o].style.backgroundColor = 'green';
            x[o].disabled = true;
        }
    } else if (i != 7) {
        for (var p = 0; p < x.length; p++) {
            x[p].value = '';
        }
        alert('Resposta errada!')
    }
}
// 14
function v14() {
    var word = ['I', '5'];
    var palavra = [];
    var i = 0;
    var x = document.getElementsByClassName("question14");
    for (var l = 0; l < x.length; l++) {
        palavra += [x[l].value];
    }
    for (var c = 0; c < word.length; c++) {
        if (palavra[c] == word[c]) {
            i++;
        }
    }
    if (i == 2) {
        for (var o = 0; o < x.length; o++) {
            x[o].style.backgroundColor = 'green';
            x[o].disabled = true;
        }
    } else if (i != 2) {
        for (var p = 0; p < x.length; p++) {
            x[p].value = '';
        }
        alert('Resposta errada!')
    }
}
// 15
function v15() {
    var word = ['I', '7'];
    var palavra = [];
    var i = 0;
    var x = document.getElementsByClassName("question15");
    for (var l = 0; l < x.length; l++) {
        palavra += [x[l].value];
    }
    for (var c = 0; c < word.length; c++) {
        if (palavra[c] == word[c]) {
            i++;
        }
    }
    if (i == 2) {
        for (var o = 0; o < x.length; o++) {
            x[o].style.backgroundColor = 'green';
            x[o].disabled = true;
        }
    } else if (i != 2) {
        for (var p = 0; p < x.length; p++) {
            x[p].value = '';
        }
        alert('Resposta errada!')
    }
}
// 16
function v16() {
    var word = ['R', 'E', 'G', 'I', 'S', 'T', 'R', 'A', 'D', 'O', 'R', 'E', 'S'];
    var palavra = [];
    var i = 0;
    var x = document.getElementsByClassName("question16");
    for (var l = 0; l < x.length; l++) {
        palavra += [x[l].value];
    }
    for (var c = 0; c < word.length; c++) {
        if (palavra[c] == word[c]) {
            i++;
        }
    }
    if (i == 13) {
        for (var o = 0; o < x.length; o++) {
            x[o].style.backgroundColor = 'green';
            x[o].disabled = true;
        }
    } else if (i != 13) {
        for (var p = 0; p < x.length; p++) {
            x[p].value = '';
        }
        alert('Resposta errada!')
    }
}