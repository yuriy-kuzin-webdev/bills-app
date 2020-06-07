module.exports = function(id){
    let result;
    require('fs').readFileSync('./data/info.txt', 'utf-8').split(/\r?\n/).forEach(function(line) {
        if(line[0] == id){
               result = line;
        }
    });
    return result;
}
