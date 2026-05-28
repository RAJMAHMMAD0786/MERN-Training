function populateDiv() {

    let first = Number(document.getElementById("firstNumber").value);

    let second = Number(document.getElementById("secondNumber").value);

    let sum = first + second;

    document.getElementById("finalsum").innerHTML = "Sum = " + sum;
}
