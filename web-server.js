let express = require('express');
let app = express();
let path = require('path');
let opn = require('opn');
let port = 8080;

app.use(express.static(path.join(__dirname + '/dist/javascript')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

app.listen(port, function () {
    console.log(`App listening to port ${port}`);
    opn(`http://localhost:${port}`);
})  