let express = require('express');
let app = express();
let path = require('path');

app.use(express.static(path.join(__dirname + '/dist/javascript')));

app.get('/', function (req, res) {
    console.log(path.join(__dirname + '/dist/index.html'));
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})