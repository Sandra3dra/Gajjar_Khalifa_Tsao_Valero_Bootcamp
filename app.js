const express = require('express');
const path = require('path');
var router = express.Router();

// set the port
const port = process.env.PORT || 3005;

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

// app.use(express.static("public"));

// app.set("view engine", "");
// app.set("views", path.join(__dirname + "/views"));

app.get("/", (req, res) => {
    // res.render("index.html");
    console.log('sent back a static file');
    res.sendFile((path.join(__dirname, "index.html")));
})

// router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
//     console.log('sent back a static file');
//     res.sendFile((path.join(__dirname, "../views/index.html")));
//   });

app.get("/feature.html", (req, res) => {
    res.sendFile((path.join(__dirname, "feature.html")));
})


// app.use((req, res, next) => {
//     var err = new Error('not found');
//     err.status = 404;
//     err.customMessage = "Sorry, something has went wrong and the page is missing."

//     next(err);

// })

// app.use((err, req, res, next) => {
// res.render ('error',{ data: err, layout: 'errorPage'})
// })

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})

