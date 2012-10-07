// https://spreadsheets.google.com/feeds/list/0AtGV2K5hN9UZdGhKci1IWlNwS2hObU95YTdKN1Z4OEE/1/public/values?alt=json

window.ba || (window.ba = {});
var ba = window.ba;

// get a list of all the beers
ba.obtain = function(){

  var feed = 'http://beer/beer-app/app/templates/json_format.php';

  var mydata = [];
  $.ajax({
    url: feed,
    async: false,
    dataType: 'json',
    success: function (json) {
      ba.beers = json;
    }
  });

  return ba.beers;
}

// use mustache to render the data
ba.renderList = function(data) {
  
  $main = $('#main');

  $main.fadeOut(200);
  
  var items = {
      beers: data
  }

  var template = $('#itemlist').html();
  
  // makes it look nicer
  window.setTimeout(function(){
    var rendered = Mustache.to_html(template, items);
    $main.html(rendered);
    $main.fadeIn(200);
  }, 200);

}

ba.sortBy = {
  
  name: function(){
    beers = _.sortBy(ba.beers, function(item) {
        return item.beerName
    });
    ba.renderList(beers);
  }

};

$('#buttons button').on('click',function(){
  ba.sortBy.name();
});

jQuery(document).ready(function() {

  ba.renderList(ba.obtain);

});
