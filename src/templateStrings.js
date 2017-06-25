// Шаблонные строки

let name = 'Dmitriy';
let age = 25;

console.log('Меня зовут '+ name + ' мне ' + age + ' лет');
console.log(`Меня зовут ${name} мне ${age} лет`);



function sum(a,b)
{

    console.log(`${parseInt(a) + parseInt(b)}`);
}

sum('1','22');


// строковые литералы

console.log(toUpp `hello ${name}`); // toUpperCase

function toUpp(literals, val){
    return literals[0].toUpperCase() + val.toUpperCase();
}



