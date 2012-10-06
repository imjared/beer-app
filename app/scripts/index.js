// https://spreadsheets.google.com/feeds/list/0AtGV2K5hN9UZdGhKci1IWlNwS2hObU95YTdKN1Z4OEE/1/public/values?alt=json

window.ba || (window.ba = {});
var ba = window.ba;

ba.feed = 'http://beer/beer-app/app/templates/json_format.php';

ba.list = function(){

/*keys:
    abv, 
    beerName,
    brewery,
    breweryLocation,
    description,
    id,
    isDomestic,
    rating,
    serveStyle,
    style
    */

  $.getJSON(ba.feed, function(data) {
    ba.renderList(data);
  });

}

ba.renderList = function(data) {

  var items = {
      beers: data
  }
  var template = $('#itemlist').html();
  var rendered = Mustache.to_html(template, items);
  $('#main').html(rendered);
}


jQuery(document).ready(function() {

  ba.list();

});
