<!DOCTYPE html>
<html lang="en">
  <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <title>Find a beer! Beerzu</title>
        <link rel="stylesheet" href="styles/56920314.main.css">
        <script type="text/javascript" src="//use.typekit.net/sok5ryj.js"></script>
        <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
        <script type="text/javascript">

          var _gaq = _gaq || [];
          _gaq.push(['_setDomainName', 'beerzu.herokuapp.com']);
          _gaq.push(['_setAccount', 'UA-35546810-1']);
          _gaq.push(['_trackPageview']);

          (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
          })();

        </script>
    </head>

    <body id="home">
        <div id="home-cont">
            <div id="fixed-cont">
                <header class="snapp-head">
                    <h1>Beer Sorter <a id="about-btn" class="button" href="#">?</a></h1>
                </header>
                <div id="controls">
                    <input type="text" class="ui-widget" id="item-search" placeholder="Find a beer">
                    <div id="buttons-cont">
                        <button id="name" data-sort="name">name</button>
                        <button id="abv" data-sort="abv">abv</button>
                        <button id="locationAbbrev" data-sort="breweryLocation">location</button>
                        <button id="rating" data-sort="rating">rating</button>
                        <button id="style" data-sort="style">style</button>
                    </div><!--/#buttons-cont-->
                </div><!--/#controls-->
            </div><!--/#fixed-cont-->
            <div class="main">
            </div>
        </div><!--/#home-cont-->

        <div id="about-cont" class="hidden">
            <header class="snapp-head">
                <h1>About <a id="about-btn-close" class="button" href="#">x</a></h1>
            </header>
            <div class="about-main entry">
                <p>This was designed by <a href="http://www.twitter.com/grafxnerd">Laura</a> and developed by <a href="http://www.twitter.com/imjared">Jared</a> for fun using beer data from <a href="http://snallygasterdc.com/">The Snallygaster Beer Jamboree</a>.</p>
                <p>Rating data was obtained from <a href="http://www.beeradvocate.com">BeerAdvocate</a> and is based on a scale of 1-100; the higher the better.</p>
                <p>For app details, check out the repo at <a href="https://github.com/imjared/beer-app">github.com/imjared/beer-app</a>.</p>
            </div>
        </div><!--/#about-->

    <script id="itemlist" type="text/template">
    {{#beers}}
    <article class="entry">
        <div class="clearfix beer-title">
            <div class="beer-headline">
                <h1>{{beerName}}</h1>
                {{#style}}
                <h2>{{style}}</h2>
                {{/style}}
            </div><!--/.beer-headline-->
            {{#serveStyle}}
            <div class="beer-serve-style">
                <figure class="ir {{serveStyle}}"></figure>
            </div><!--/.beer-serve-style-->
            {{/serveStyle}}
        </div><!--/.beer-title-->
        <div class="beer-info clearfix">

            {{#locationAbbrev}}
            <div class="beer-info-cont" id="location-cont">
                <h3 class="info-header">Location</h3>
                <h4 class="info-specific">{{locationAbbrev}}</h4>
            </div><!--/.beer-info-cont-->
            {{/locationAbbrev}}

            {{#rating}}
            <div class="beer-info-cont" id="rating-cont">
                <h3 class="info-header">Rating</h3>
                <h4 class="info-specific">{{rating}}</h4>
            </div><!--/.beer-info-cont-->
            {{/rating}}
            
            {{#abv}}
            <div class="beer-info-cont" id="abv-cont">
                <h3 class="info-header">ABV</h3>
                <h4 class="info-specific">{{abv}}</h4>
            </div><!--/.beer-info-cont-->
            {{/abv}}
        </div><!--/.beer-info-->
        <div class="details">
            <div class="more-details">
                <div class="more-details-cont">
                    <h3 class="info-header">Brewery</h3>
                    <h5>{{brewery}}</h5>
                </div><!--/.more-details-cont-->
                {{#description}}
                <div class="more-details-cont">
                    <h3 class="info-header">About this brew</h3>
                    <p>{{description}}</p>
                </div><!--/.more-details-cont-->
                {{/description}}
            </div><!--/.more-details-->
            <a class="more-info" href="#">More Info +</a>
        </div><!--/.details-->
    </article><!--/.entry-->
    {{/beers}}
    </script>

    <script src="scripts/vendor/8bc61845.jquery.min.js"></script>
    <script src="scripts/vendor/b4f386fb.jquery-ui-1.8.24.custom.min.js"></script>
    <script src="scripts/vendor/9160f94b.underscore-min.js"></script>
    <script src="scripts/vendor/085ba7ec.mustache.js"></script>
    <script src="scripts/11856514.index.js"></script>
    </body>
</html>