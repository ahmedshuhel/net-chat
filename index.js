var app = require('app');
var BrowserWindow = require('browser-window');


app.on('ready', function(){
  var bw = new BrowserWindow({
    width: 800, 
    height: 600
  });

  bw.loadUrl('file://' + __dirname + '/index.html');

});
