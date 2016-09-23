var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    'article-one': {
        title: 'article-one | Ram',
        date: '23 sep 2016',
        heading: 'Article One',
        content: `
        <p> the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.
        </p>
        <p> the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.
        </p>
        <p> the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.
        </p>
        `},
    'article-two': {
        title: 'article-two | Ram',
        date: '19 sep 2016',
        heading: 'Article Two',
        content: `
        <p> Article twos content page is here. All its content will be displayed in this area.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.
        </p>
        `},
    'article-three' : {
        title: 'article-Three | Ram',
        date: '22 sep 2016',
        heading: 'Article Three',
        content: `
        <p> Article threes content will be displayed here.  the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.the content will be displayed here.
        </p>
        `}
};

var createTemplate = function(data) {
    var date = data.date;
    var content = data.content;
    var heading = data.heading;
    var title = data.title;
   
    var htmlTemplate = `
    <html>
        <head>
            <title>
                    ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class ="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <div>
                    ${date}
                </div>
                <div>
                    <h1> ${heading}</h1>
                    <h2> You just reached article one</h2>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
};
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
