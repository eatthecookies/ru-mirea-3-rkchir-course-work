
// Генерация случайной буквы верхнего или нижнего регистра
function randomLetter() {
    let randomNumber = Math.floor(Math.random() * 26);
    let randomCase = Math.random() < 0.5 ? 'lower' : 'upper';
    let asciiOffset = randomCase === 'lower' ? 97 : 65;
    let randomLetter = String.fromCharCode(asciiOffset + randomNumber);

    return randomLetter;
}
  
var capcha = document.getElementById("capcha-image");
capcha.textContent = randomLetter() + randomLetter() + randomLetter() + randomLetter();

function isEmpty(obj){
    return obj.value.trim() === "";
}

let inputButton = document.getElementById("inp-btn");
inputButton.addEventListener("click", checkInput);

function checkInput(){
    inputButton.removeEventListener("click", checkInput);
    var capcha = document.getElementById("capcha-image");
    let input = document.getElementById('capcha-input');
    
    let submitButton = document.getElementById("sbm-btn");
    
    if (isEmpty(input)){
        alert("Вы ничего не ввели!");
        inputButton.addEventListener("click", checkInput);
    }
    else if (input.value == capcha.innerText){
        submitButton.disabled = false;
    } 
    else{
        input.value = '';
        let n1 = Math.floor(Math.random() * 26);
        let n2 = Math.floor(Math.random() * 26);
        const res = n1 + n2;
        var capcha = document.getElementById("capcha-image");
        capcha.textContent = n1 + " + " + n2;
        
        window.eventHandler = function() {
            // Вызываем функцию checkInput и передаем аргументы
            checkMath(res);
        };
        inputButton.addEventListener("click", eventHandler);
    }
    
}

function checkMath(res){
    
    inputButton.removeEventListener("click", eventHandler);

    let input = document.getElementById('capcha-input');
    let submitButton = document.getElementById("sbm-btn");

    if (isEmpty(input)) {
        alert("Вы ничего не ввели!");
        inputButton.addEventListener("click", eventHandler);
    } else if (parseInt(input.value) === res) {
        submitButton.disabled = false;
    } else {
        alert("Ошибка");
        inputButton.disabled = true;
    }
}