// https://spreadsheets.google.com/feeds/list/0AtGV2K5hN9UZdGhKci1IWlNwS2hObU95YTdKN1Z4OEE/1/public/values?alt=json

window.ba || (window.ba = {});
var ba = window.ba;

// get a list of all the beers
ba.obtain = function () {

  var feed = 'http://beer/templates/json_format.php';

  $.ajax({
    url: feed,
    async: false,
    dataType: 'json',
    success: function (json) {
      ba.beers = json;
    }
  });

  return ba.beers;
};

// use mustache to render the data
ba.renderList = function (data) {

  var $main = $('#main');

  // $main.fadeOut(200);

  var items = {
      beers: data
  };

  var template = $('#itemlist').html();

  // makes it look nicer
  var rendered = Mustache.to_html(template, items);
  $main.html(rendered);
  /*window.setTimeout(function () {
    var rendered = Mustache.to_html(template, items);
    $main.html(rendered);
    // $main.fadeIn(200);
  }, 200);*/

};

ba.sortBy = {

  name: function () {
    var beers = _.sortBy(ba.beers, function (item) {
        return item.beerName;
    });
    ba.renderList(beers);
  },

  abv: function () {
    var beers = _.chain(ba.beers)
      .filter(function(item){
        if (item.abv != '') {
          return item.abv;
        }
      })
      .value();
    ba.renderList(beers);
  },

  breweryLocation: function () {
    var beers = _.sortBy(ba.beers, function (item) {
        return item.breweryLocation;
    });
    ba.renderList(beers);
  },

  isDomestic: function () {
    var beers = _.sortBy(ba.beers, function (item) {
        return item.isDomestic;
    });
    ba.renderList(beers);
  },

  rating: function () {
    var beers = _.sortBy(ba.beers, function (item) {
        return item.rating;
    });
    ba.renderList(beers);
  }

};

$('#name').on('click', function () {
  ba.sortBy.name();
});

$('#abv').on('click', function () {
  ba.sortBy.abv();
});

$('#breweryLocation').on('click', function () {
  ba.sortBy.breweryLocation();
});

$('#isDomestic').on('click', function () {
  ba.sortBy.isDomestic();
});

$('#rating').on('click', function () {
  ba.sortBy.rating();
});


jQuery(document).ready(function () {

  ba.renderList(ba.obtain);

});
