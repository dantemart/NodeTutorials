var fs = require('fs');

module.exports = function(dir, filter, callbackFn) {
    let extension = filter;
    if (extension == '') return callbackFn('errorEmpty');
    let files = fs.readdir(dir, (err, list) => {
        if (err) return callbackFn(err)
        if(list) {
            list.filter((value) => value.includes('.'+extension)).forEach(res => console.log(res))
            return callbackFn(null, list.filter((value) => value.includes('.'+extension)))
        }
    });
}