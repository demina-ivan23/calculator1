const input = document.querySelector('.input')
const output = document.querySelector('.output')
const numbers = document.querySelectorAll('#number');
const percentage = document.querySelector('#percentage')
const change_sign = document.querySelector('#change-sign')
const reset = document.querySelector('#reset')
const divide = document.querySelector('#divide')
const multiply = document.querySelector('#multiply')
const substract = document.querySelector('#substract')
const add = document.querySelector('#add')
const comma = document.querySelector('#comma')
const equals = document.querySelector('#equals')
let equation = '';
const togglableOperators = ['-', '%']
const operators = ['*', '/', '+', '-', '.']
function isInArray(item, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (item === arr[i]) {

            return true;
        }
    }

    return false;
}
function toggleElement(el){
    for (let i = 0; i < togglableOperators.length; i++){
        if (isInArray(equation[equation.length - 1], togglableOperators) && isInArray(el, togglableOperators)){
            console.log('true');
             equation = equation.slice(0, -1);
            input.innerText = input.innerText.slice(0, -1);
            break;
        }
        else{
            console.log('false')
            equation += el;
            input.innerText += el;
            break;
        }
    }
}
function addIfAlowed(char) {
    for (let i = 0; i < operators.length; i++) {
        if (isInArray(equation[equation.length - 1], operators) && isInArray(char, operators)) {

        } else {
            equation += char;
            if (char === '*') {
                input.innerText += 'x'
            } else {
                input.innerText += char
            }
            break;
        }
    }

}

for (let number of numbers) {
    number.addEventListener('click', function () {
        if (input.innerText === '0') {

            input.innerText = '';
            equation = '';
        }
        if(equation[equation.length - 1] === '%'){
           return false
        }
        input.innerText += number.innerText;
        equation += number.innerText;
        if(input.innerText.length > 15){
            input.innerText = 'char limit reached';
            equation = '0';
        }
    })
}
reset.addEventListener('click', function () {
    output.innerText = '';
    equation = 0;
    input.innerText = 0;
})


divide.addEventListener('click', function () {
    if(equation != '')
    {
        addIfAlowed('/');
    }

    if (input.innerText.length > 15) {
        input.innerText = 'char limit reached';
        equation = '0';
    }

})
multiply.addEventListener('click', function () {
    if(equation != '')
    {
        addIfAlowed('*');
    }
    if (input.innerText.length > 15) {
        input.innerText = 'char limit reached';
        equation = '0';
    }
})

add.addEventListener('click', function () {
    if(equation != '')
    {
        addIfAlowed('+');
    }
    if (input.innerText.length > 15) {
        input.innerText = 'char limit reached';
        equation = '0';
    }
})
substract.addEventListener('click', function () {
    if(equation != '')
    {
        addIfAlowed('-');
    }
    if (input.innerText.length > 15) {
        input.innerText = 'char limit reached';
        equation = '0';
    }
})
comma.addEventListener('click', function () {
    equationArr = equation.split("");
    if (!isInArray('.', equationArr)) {
        if(equation != '')
        {
            addIfAlowed('.');
        }
    }
    if (input.innerText.length > 15) {
        input.innerText = 'char limit reached';
        equation = '0';
    }
})

percentage.addEventListener('click', function () {
    if(equation != '' && equation != '0')
    {
        toggleElement('%')
    }
    if (input.innerText.length > 15) {
        input.innerText = 'char limit reached';
        equation = '0';
    }
})

change_sign.addEventListener('click', function () {
    
    if(input.innerText === '0'){ 
     input.innerText = ''; 
    }
    toggleElement('-');

    if (input.innerText.length > 15) {
        input.innerText = 'char limit reached';
        equation = '0';
    }
})

equals.addEventListener('click', function () {
    equationArr = equation.split("");
    if (isInArray('%', equationArr)) {
        equation = equation.replace(/%/g, '/100')
        output.innerText = eval(equation);
        console.log('in development')

    }
    if (isInArray(equation[equation.length - 1], operators)) {
        output.innerText = 'wrong format';

        return false;
    }
    output.innerText = eval(equation);
    equation = '';
      input.innerText += '';

    if (eval(equation).length > 24) {
        output.innerText = 'more than 24 char is not displayed'
    }
})
