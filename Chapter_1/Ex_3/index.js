function timSoChan(array){
    let result = [];

    for (let i = 0; i < array.length; i++ ){
        if (array[i] %2 == 0){
            result.push(array[i]);
        }
    }
    return result;
}


function sum(a, b){
    return a+b;
}

let t = [1,2,5,4,6,8,3];
let rl = findEven(t);

alert(`Số chẵn trong dãy là: ${rl}`);