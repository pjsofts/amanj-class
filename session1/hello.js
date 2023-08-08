function add(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let result = Number(number1) + Number(number2);
    document.getElementById("result").textContent = result;
}