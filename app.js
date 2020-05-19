var express = require('express');

// create express app
const app = express();
var path = require('path');

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/index', function (req, res) {
    res.render('./theme pages/index', { title: 'PurchaseEntry' });
})



// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

module.exports = app;