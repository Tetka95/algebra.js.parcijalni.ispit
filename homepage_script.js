function randomNum1 () {
    let input1 = document.getElementById("prvi");
    input1.value = Math.floor(Math.random()*1000) + 1;
}

function randomNum2 () {
    let input2 = document.getElementById("drugi");
    input2.value = Math.floor(Math.random()*1000) + 1;
}

function veciBroj () {
    let input1 = document.getElementById("prvi");
    let input2 = document.getElementById("drugi");

    if (input1.value > input2.value) {
        return alert(input1.value + " je veći od " + input2.value)
    } else {
        return alert(input2.value + " je veći od " + input1.value);
    }
}

