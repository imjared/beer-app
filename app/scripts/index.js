// https://spreadsheets.google.com/feeds/list/0AtGV2K5hN9UZdGhKci1IWlNwS2hObU95YTdKN1Z4OEE/1/public/values?alt=json

jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
    return function( elem ) {
        return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});

window.ba || (window.ba = {});
var ba = window.ba;

// get a list of all the beers
ba.obtain = function () {

  // var feed = 'http://beer/templates/json_format.php';
  var feed = 'http://beer/beer-app/app/templates/json_format.php';

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
  var timer = 200;

  // $main.fadeOut(timer);

  var items = {
      beers: data
  };

  var template = $('#itemlist').html();

  // makes it look nicer
  var rendered = Mustache.to_html(template, items);

  $main.html(rendered);
  ba.moreInfo();  
/*  window.setTimeout(function () {
    var rendered = Mustache.to_html(template, items);
    $main.html(rendered);
    $main.fadeIn(timer);
  }, timer);*/

};

var abvSortDirection = '';
var nameSortDirection = '';
var styleSortDirection = '';
var ratingSortDirection = 'up';
var locationSortDirection = '';

ba.sortBy = {

  name: function () {
    var beers = _.sortBy(ba.beers, function (item) {
        return item.beerName;
    });

    if ( nameSortDirection == "up" ) {
      nameSortDirection = "down";
      beers.reverse();
    } else {
      nameSortDirection = "up";
    }

    ba.renderList(beers);
  },

  abv: function () {
    
    var beers = _.chain(ba.beers)
      .filter(function(item){
        if (item.abv != '') {
          return item.abv;
        }
      })
      .sortBy(function(item){
        return parseInt(item.abv);
      })
      .value();

    if ( abvSortDirection == "up" ) {
      abvSortDirection = "down";
      beers.reverse();
    } else {
      abvSortDirection = "up";
    }

    ba.renderList(beers);
  },

  breweryLocation: function () {
    var beers = _.sortBy(ba.beers, function (item) {
        return item.locationAbbrev;
    });

    if ( locationSortDirection == "up" ) {
      locationSortDirection = "down";
      beers.reverse();
    } else {
      locationSortDirection = "up";
    }

    ba.renderList(beers);
  },

  isDomestic: function () {
    var beers = _.sortBy(ba.beers, function (item) {
        return item.isDomestic;
    });
    ba.renderList(beers);
  },

  rating: function () {
    var beers = _.chain(ba.beers)
      .filter(function(item){
        if (item.rating != '') {
          return item.rating;
        }
      })
      .sortBy(function(item){
        return item.rating;
      })
      .value();

    if ( ratingSortDirection == "up" ) {
      ratingSortDirection = "down";
      beers.reverse();
    } else {
      ratingSortDirection = "up";
    }

    ba.renderList(beers);
  },

  style: function () {
    var beers = _.chain(ba.beers)
      .filter(function(item){
        if (item.style != '') {
          return item.style;
        }
      })
      .sortBy(function(item){
        return item.style;
      })
      .value();

    if ( styleSortDirection == "up" ) {
      styleSortDirection = "down";
      beers.reverse();
    } else {
      styleSortDirection = "up";
    }

    ba.renderList(beers);
  }

};

$('#name').on('click', function () {
  ba.sortBy.name();
});

$('#abv').on('click', function () {
  ba.sortBy.abv();
});

$('#locationAbbrev').on('click', function () {
  ba.sortBy.breweryLocation();
});

$('#rating').on('click', function () {
  ba.sortBy.rating();
});

$('#style').on('click', function () {
  ba.sortBy.style();
});

ba.moreInfo = function () {
  $('.more-info').on('click', function(e){
    e.preventDefault();
    $button = $(this);
    $button.toggleClass('active');
    $button.siblings().slideToggle(400,function(){
      if ($button.hasClass('active')) {
        $button.text('Less Info -');
      } else {
        $button.text('More Info +');
      }
    });
  });
};

ba.searchResults = function (searchTerm) {

  var filteredItems = $('.entry').filter(function(searchResult) {
    return $(this).find('.beer-headline h1:Contains(' + searchTerm + ')').length != 0;
  });

  return filteredItems;
}

ba.search = function () {
  var searchTerms = [];
  ba.obtain();
  
  ba.beers.forEach(function (item) {
    searchTerms.push(item.beerName);
  });

  $('#item-search').autocomplete({
    source: searchTerms,
    delay: 300,
    search: function (event) {
      ba.filterSearchItems(event.target.value);
    },
    select: function (event, ui) {
      ba.filterSearchItems(event.target.value);
    }
  });
}

ba.filterSearchItems = function (searchText) {
  
  // console.log(searchText);
  var beers = _.filter(ba.beers, function (item) {
      var s = item.beerName;
      return s.indexOf(searchText) > -1;
  });

  // ba.renderList(beers);
  ba.renderList(beers);

}

jQuery(document).ready(function () {

  ba.renderList(ba.obtain);
  ba.search();

});
