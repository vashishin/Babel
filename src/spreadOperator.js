let arr = [1,2,3];
let arr2 = [4,5,6];
let newArr = [...arr,...arr2];


console.log(newArr);


function test(newArr){
    console.log(arguments.length);
    for(let i = 0; i<arguments.length; i++){
        console.log(arguments[i]);
    }
}
test(newArr);       // return array [1, 2, 3, 4, 5, 6]
test(...newArr);    // return int 1, 2, 3, 4, 5, 6
