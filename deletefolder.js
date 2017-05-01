const del = require('del');
 
del(['dist/javascript']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
});