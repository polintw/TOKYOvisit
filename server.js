const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require("path");
const jsonfile = require('jsonfile');
const update = require('immutability-helper');

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const DOM = React.DOM;
  const head = DOM.head;
  const body = DOM.body;
  const main = DOM.main;
  const section = DOM.section;
  const div = DOM.div;
  const script = DOM.script;
  const meta = DOM.meta;
  const link = DOM.link;
  const style = DOM.style;
  const title = DOM.title

//Important!! babel-polyfill is here for the whole code after it!
require('babel-polyfill');
const browserify = require('browserify');
const babelify = require("babelify");

app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({transformViews: false }));
//parse .json came into this server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname+'/statics/public')));

app.use('/statics/:type/:file', function(req, res){
  let filetype = req.params.type;
  let filename = req.params.file;
  let options = {
      root: __dirname + '/statics/'+filetype
  };
  let mimetype = {
    'html' : 'text/html',
    'ico' : 'image/x-icon',
    'jpg' : 'image/jpeg',
    'png' : 'image/png',
    'gif' : 'image/gif',
    'css' : 'text/css',
    'js' : 'application/javascript',
    'json': 'application/json'
  }[filetype];
  console.log(mimetype)
  res.setHeader('Content-Type', mimetype)
  res.sendFile(filename, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }else {
      console.log('Sent:', filename);
    }
  });
})

app.get('/user/station/status', function(req, res){
    console.log('recieve "GET" request for station status');
    jsonfile.readFile(userData, function(err, data){
      if(err){
        throw err;
        res.end({
          success: false,
          err: err
        });
      }
      let station = req.query.station;
      res.json({
        success: true,
        status: data[station].status
      });
    })
})

app.use('/bundle',function(req, res){
  res.setHeader('Content-Type', 'application/javascript');
  console.log('requesting for index: 2nd, bundle.js');
  browserify({debug: true})
    .transform(babelify.configure({
      presets: [
        "react",
        "env"
      ],
      compact: false
    }))
    .require(__dirname + "/app.js", {entry: true})
    .bundle()
    .on("error", function (err) { console.log("Error: " + err.message); })
    .pipe(res);
})

app.use('/', function(req, res){
  console.log("requesting for index: 1st, html");
  let htmlHead = ReactDOMServer.renderToStaticMarkup(
    head(
     null,
     title({dangerouslySetInnerHTML:{__html: ""}}),
     meta({charSet: "utf-8"}),
	   meta({name: "title", content: ""}),
     meta({name: "description", content: ""}),
     meta({property: "og:url", content: ""}),
     meta({property: "og:image", content: ""}),
     script({src: "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js", type: "text/javascript"}),
     script({src: "https://unpkg.com/axios/dist/axios.min.js", type: "text/javascript"}),
     script({src: "catalogue.js", type: "text/javascript"}),
     link({type:'text/css', rel: "stylesheet", href: "https://fonts.googleapis.com/earlyaccess/notosanstc.css"}),
     link({type:'text/css', rel: "stylesheet", href: "http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext"})
   )
  );
  let htmlBody = ReactDOMServer.renderToStaticMarkup(
    body(
     null,
     main({id: 'root'}),
     script({src: '/bundle'})
   )
  );

  res.setHeader('Content-Type', 'text/html');
  res.end(htmlHead + htmlBody);
})

app.listen(process.env.port || 8081);
console.log("Running at Port 8081");
