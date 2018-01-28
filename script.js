var i, butt = document.getElementsByClassName('butt'),
    formula = document.getElementById('formula'),
    result = document.getElementById('result'),
    answer, res;
for (i = 0; i < butt.length; i += 1) {
    butt[i].addEventListener('click', function (event) {
        /*console.log(event.target.value);*/
        if (event.target.name !== 'getAnswer') {
            /*console.log(formula.innerHTML);*/
            formula.innerHTML += event.target.value;
            answer = false;
        } else {
            /*console.log(eval(formula.innerHTML));*/
            res = eval(formula.innerHTML);
            if (res ^ 0) {
                result.innerHTML = eval(res);
            } else {
                result.innerHTML = parseFloat(eval(res)).toFixed(2);
            }
            answer = true;
        }
        if (answer === true) {
            clear();
        }
    });

}
document.getElementById('delDigit').onclick = del;
document.getElementById('root').onclick = getRoot;
document.getElementById('clearFormula').onclick = clear;

function clear() {
    formula.innerHTML = '';
}

function del() {
    let str = formula.innerHTML;
    formula.innerHTML = str.slice(0, -1);
}

function getRoot() {
    res = formula.innerHTML;
    if (res ^ 0) {
        result.innerHTML = Math.sqrt(res);
        clear();
    } else {
        result.innerHTML = parseFloat(Math.sqrt(res)).toFixed(2);
        clear();
    }
}







/*window.onload = function () {
    var formula = document.getElementById('formula');
    document.getElementById('buttons').onclick = function (event) {
        console.log(event.target.value);
        formula.innerHTML += event.target.value;
        if (event.target.name === "getAnswer") {
            getAnswer();
        }
    };
};

function getAnswer() {
    var formula = document.getElementById('formula');
    var result = document.getElementById('result');
    result.innerHTML = eval(formula.value);
    console.log(eval(result.innerHTML));
    formula.innerHTML = "";
}*/
