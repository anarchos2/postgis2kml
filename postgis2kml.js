var pg = require('pg');
var conString = "postgres://ADMIN:snowmake4321@159.203.96.25/wbgis";
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * FROM snowmaking.test', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }


  var builder = require('xmlbuilder');
  function kml(kmlname, kmldescription, kmlcoordinates) {
  var kml = builder.create('kml').att('xmlns', 'http://www.opengis.net/kml/2.2')

    .ele('Placemark')
    .ele('name', kmlname).up()
    .ele('description', kmldescription).up()
    .ele('Point')
    .ele('coordinates', kmlcoordinates).up()

     .end({ pretty: true});
      console.log(kml);
    }

    for(var i = 0; i < result.rows.length;i++){
          (function(j){
              kml(result.rows[i].title, "The Description!", "The Coords!");
          })(i);
    }

    client.end();
  });
});
