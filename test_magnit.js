let newFunc = function(x) {
    let lastN;
    for (let key in x) {
        x[key] = Math.round((x[key] * 15 / 100) + x[key]) + '';
        //получить последнюю цифру?
        lastN = parseInt(x[key][x[key].length - 1]);
        //console.log(lastN);
        switch (lastN) {
            case 6:
                x[key] = parseInt(x[key]) + 4;
                break;
            case 7:
                x[key] = parseInt(x[key]) + 3;
                break;
            case 8:
                x[key] = parseInt(x[key]) + 2;
                break;
            case 9:
                x[key] = parseInt(x[key]) + 1;
                break;
            case 1:
                x[key] = parseInt(x[key]) + 4;
                break;
            case 2:
                x[key] = parseInt(x[key]) + 3;
                break;
            case 3:
                x[key] = parseInt(x[key]) + 2;
                break;
            case 4:
                x[key] = parseInt(x[key]) + 1;
                break;
        }
        //console.log(x[key]);
    }
    return x;
};

console.log(newFunc({'apple': 800, 'banana': 600, 'milk': 700}));