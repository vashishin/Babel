let name  = "Dmitriy";
let heloo = "Heloo World";

if(true)
{
    var vES5 = 'ES5';
    let vES6 = 'ES6'
};

console.log(vES5);
//console.log(vES6);


let input = document.querySelectorAll('input');

for(var i = 0; i < input.length; i++){
    var btn = input[i];
    //console.log(i);
    btn.setAttribute('value',i);
    btn.onclick = function(){
        console.log(i)
    }
    //btn.addEventListener('click',function(){
    //    console.log(i);
    //})
}

//
//for(let i = 0; i < input.length; i++){
//    var btn = input[i];
//    btn.setAttribute('value',i);
//    btn.onclick = function(){
//        console.log(i)
//    }
//}


