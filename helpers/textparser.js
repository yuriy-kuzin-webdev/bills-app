module.exports = function(line){
    const arr = line.split('#');
    const billType = arr.pop().split("@");
    
    let result = {
        name    : arr[1],
        adress  : arr[2],
        apt     : arr[3],
        date    : arr[4],
        account : arr[5],
        balance : arr[6],
        amount  : arr[7],
        paid    : arr[8],
        total   : arr[9],
        nbal    : arr[10],
        types   : []
    }

    for (const row of billType) {
        result.types.push(row.split("$"));
    }

    
    return result;
}