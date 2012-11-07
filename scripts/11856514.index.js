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

  var feed = '/templates/json_format.php';
  // var feed = [{"beerName":"hoppeditz","brewery":"Freigeist Bierkutur","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"7.5","rating":"","style":"Altbier","description":"","":"hoppeditz","id":0},{"beerName":"red hoptober","brewery":"New Belgium Brewing Company","breweryLocation":"Colorado","locationAbbrev":"CO","serveStyle":"draft","isDomestic":"Domestic","abv":"6","rating":"87","style":"American Amber \/ Red Ale","description":"","":"red hoptober","id":1},{"beerName":"peak organic fall summit","brewery":"Peak Organic Brewing Company","breweryLocation":"Maine","locationAbbrev":"ME","serveStyle":"draft","isDomestic":"Domestic","abv":"5.6","rating":"83","style":"American Amber \/ Red Ale","description":"","":"peak organic fall summit","id":2},{"beerName":"otter creek oktoberfest","brewery":"Otter Creek Brewing Company","breweryLocation":"Vermont","locationAbbrev":"VT","serveStyle":"draft","isDomestic":"Domestic","abv":"4.8","rating":"79","style":"American Amber \/ Red Ale","description":"","":"otter creek oktoberfest","id":3},{"beerName":"coney island freaktoberfest","brewery":"Schmaltz Brewing Company","breweryLocation":"New York","locationAbbrev":"NY","serveStyle":"draft","isDomestic":"Domestic","abv":"6.66","rating":"73","style":"American Amber \/ Red Lager","description":"","":"coney island freaktoberfest","id":4},{"beerName":"firestone walker wookey jack","brewery":"Firestone Walker Brewing Company","breweryLocation":"California","locationAbbrev":"CA","serveStyle":"draft","isDomestic":"Domestic","abv":"8.3","rating":"93","style":"American Black Ale","description":"","":"firestone walker wookey jack","id":5},{"beerName":"beer of the gods","brewery":"High & Mighty Brewing Company","breweryLocation":"Massachusetts","locationAbbrev":"MA","serveStyle":"draft","isDomestic":"Domestic","abv":"4.5","rating":"73","style":"American Blonde Ale","description":"","":"beer of the gods","id":6},{"beerName":"tumbler","brewery":"Sierra Nevada Brewing Company","breweryLocation":"California","locationAbbrev":"CA","serveStyle":"cask","isDomestic":"Domestic","abv":"5.5","rating":"86","style":"American Brown Ale","description":"","":"tumbler","id":7},{"beerName":"dogfish head india brown ale","brewery":"Dogfish Head Craft Brewery","breweryLocation":"Delaware","locationAbbrev":"DE","serveStyle":"draft","isDomestic":"Domestic","abv":"7.2","rating":"92","style":"American Brown Ale","description":"Forget about the car companies, this is the original hybrid. A cross between a Scotch Ale, an India Pale Ale and an American Brown, Indian Brown Ale is well-hopped and malty at the same time (It's magical!). The beer has characteristics of each style that inspired it: the color of an American Brown, the caramel notes of a Scotch Ale, and the hopping regiment of an India Pale Ale. We dry-hop the Indian Brown Ale in a similar fashion to our 60 Minute IPA and 90 Minute IPA. This beer is brewed with Aromatic barley and organic brown sugar. ","":"dogfish head india brown ale","id":8},{"beerName":"samuel adams hazel brown","brewery":"Boston Beer Company","breweryLocation":"Massachusetts","locationAbbrev":"MA","serveStyle":"draft","isDomestic":"Domestic","abv":"5.2","rating":"84","style":"American Brown Ale","description":"","":"samuel adams hazel brown","id":9},{"beerName":"long trail harvest ale","brewery":"Long Trail Brewing Company","breweryLocation":"Vermont","locationAbbrev":"VT","serveStyle":"draft","isDomestic":"Domestic","abv":"4.6","rating":"82","style":"American Brown Ale","description":"","":"long trail harvest ale","id":10},{"beerName":"avery ale to the chief","brewery":"Avery Brewing Company","breweryLocation":"Colorado","locationAbbrev":"CO","serveStyle":"draft","isDomestic":"Domestic","abv":"8.75","rating":"91","style":"American Double \/ Imperial IPA","description":"","":"avery ale to the chief","id":11},{"beerName":"alpha dog imperial ipa","brewery":"Laughing Dog Brewing Company","breweryLocation":"Idaho","locationAbbrev":"ID","serveStyle":"draft","isDomestic":"Domestic","abv":"8.5","rating":"86","style":"American Double \/ Imperial IPA","description":"A true hop bomb brewed plenty of Columbus and Mt Hood hops for a piney hop character. Premium Pale, Honey and Munich malt make this beer a little less malty but packing plenty of hop punch. ","":"alpha dog imperial ipa","id":12},{"beerName":"uncle jacob\u2019s stout","brewery":"Avery Brewing Company","breweryLocation":"Colorado","locationAbbrev":"CO","serveStyle":"draft","isDomestic":"Domestic","abv":"17.42","rating":"93","style":"American Double \/ Imperial Stout","description":"In the quest to create a collection of barrel-aged beers to be reproduced annually, Avery Brewing Company is releasing Uncle Jacob\u2019s Stout, the second member of its Annual Barrel Series. The collection began with Rumpkin rum barrel-aged pumpkin ale in the fall of 2011, and now continues with this 17.4% ABV stout that was aged in first-use Bourbon barrels for 6 months. While the Avery Barrel-Aged Series features one-time-only batches, such as the recent Muscat d\u2019Amour and R\u00e9colte Sauvage, the Annual Barrel Series features a selection of cellarable barrel-aged beers that fans can return to and get to know every year.","":"uncle jacob\u2019s stout","id":13},{"beerName":"bitches brew","brewery":"Dogfish Head Craft Brewery","breweryLocation":"Delaware","locationAbbrev":"DE","serveStyle":"draft","isDomestic":"Domestic","abv":"9","rating":"92","style":"American Double \/ Imperial Stout","description":"","":"bitches brew","id":14},{"beerName":"torpedo extra ipa","brewery":"Sierra Nevada Brewing Company","breweryLocation":"California","locationAbbrev":"CA","serveStyle":"cask","isDomestic":"Domestic","abv":"7.2","rating":"92","style":"American IPA","description":"","":"torpedo extra ipa","id":15},{"beerName":"founders harvest ale","brewery":"Founders Brewing Company","breweryLocation":"Michigan","locationAbbrev":"MI","serveStyle":"cask","isDomestic":"Domestic","abv":"6.5","rating":"93","style":"American IPA","description":"","":"founders harvest ale","id":16},{"beerName":"lagunitas daytime ipa","brewery":"Lagunitas Brewing Company","breweryLocation":"California","locationAbbrev":"CA","serveStyle":"draft","isDomestic":"Domestic","abv":"4.65","rating":"91","style":"American IPA","description":"","":"lagunitas daytime ipa","id":17},{"beerName":"sierra nevada northern hemisphere harvest ale","brewery":"Sierra Nevada Brewing Company","breweryLocation":"California","locationAbbrev":"CA","serveStyle":"draft","isDomestic":"Domestic","abv":"6.7","rating":"93","style":"American IPA","description":"","":"sierra nevada northern hemisphere harvest ale","id":18},{"beerName":"rocket dog rye ipa","brewery":"Laughing Dog Brewing Company","breweryLocation":"Idaho","locationAbbrev":"ID","serveStyle":"draft","isDomestic":"Domestic","abv":"6.9","rating":"84","style":"American IPA","description":"","":"rocket dog rye ipa","id":19},{"beerName":"samuel adams brewing tasman red ipa","brewery":"Boston Beer Company","breweryLocation":"Massachusetts","locationAbbrev":"MA","serveStyle":"draft","isDomestic":"Domestic","abv":"6.75","rating":"86","style":"American IPA","description":"","":"samuel adams brewing tasman red ipa","id":20},{"beerName":"schla\ufb02y tasmanian ipa","brewery":"TIPA","breweryLocation":"Missouri","locationAbbrev":"MO","serveStyle":"draft","isDomestic":"Domestic","abv":"7.2","rating":"","style":"American IPA","description":"","":"schla\ufb02y tasmanian ipa","id":21},{"beerName":"bitter american","brewery":"21st Amendment","breweryLocation":"California","locationAbbrev":"CA","serveStyle":"draft","isDomestic":"Domestic","abv":"4.4","rating":"88","style":"American Pale Ale","description":"","":"bitter american","id":22},{"beerName":"second wind pale ale","brewery":"Mother Earth Brewing Company","breweryLocation":"North Carolina","locationAbbrev":"NC","serveStyle":"draft","isDomestic":"Domestic","abv":"5","rating":"82","style":"American Pale Ale","description":"","":"second wind pale ale","id":23},{"beerName":"fest devious","brewery":"Epic Brewing Company","breweryLocation":"Utah","locationAbbrev":"UT","serveStyle":"draft","isDomestic":"Domestic","abv":"6","rating":"","style":"American Pale Ale","description":"","":"fest devious","id":24},{"beerName":"3 stars harvest ale","brewery":"3 Stars Brewing Company","breweryLocation":"Washington, DC","locationAbbrev":"DC","serveStyle":"draft","isDomestic":"Domestic","abv":"6.6","rating":"","style":"American Pale Ale","description":"Fresh Citra Hops added at boil and then the beer was run thru a hopback filled with freshly harvested Citra Hops Big hop character in the nose and finish without a lot of lingering bitterness Light pale malt backbone with a dry hop finish","":"3 stars harvest ale","id":25},{"beerName":"blue star wheat","brewery":"North Coast Brewing Company","breweryLocation":"California","locationAbbrev":"CA","serveStyle":"draft","isDomestic":"Domestic","abv":"4.5","rating":"81","style":"American Pale Wheat Ale","description":"","":"blue star wheat","id":26},{"beerName":"sierra nevada porter","brewery":"Sierra Nevada Brewing Company","breweryLocation":"California","locationAbbrev":"CA","serveStyle":"cask","isDomestic":"Domestic","abv":"5.6","rating":"","style":"American Porter","description":"","":"sierra nevada porter","id":27},{"beerName":"dead reckoning porter","brewery":"Tr\u00f6eg's Brewing Company","breweryLocation":"Pennsylvania","locationAbbrev":"PA","serveStyle":"draft","isDomestic":"Domestic","abv":"5.4","rating":"87","style":"American Porter","description":"","":"dead reckoning porter","id":28},{"beerName":"zambo imperial red ale","brewery":"21st Amendment","breweryLocation":"California","locationAbbrev":"CA","serveStyle":"draft","isDomestic":"Domestic","abv":"8.9","rating":"","style":"American Strong Ale","description":"","":"zambo imperial red ale","id":29},{"beerName":"minx belgian imperial ipa","brewery":"Goose Island","breweryLocation":"Illinois","locationAbbrev":"IL","serveStyle":"draft","isDomestic":"Domestic","abv":"8","rating":"90","style":"Belgian IPA","description":"","":"minx belgian imperial ipa","id":30},{"beerName":"allagash hugh malone","brewery":"Allagash Brewing Company","breweryLocation":"Maine","locationAbbrev":"ME","serveStyle":"draft","isDomestic":"Domestic","abv":"7.8","rating":"87","style":"Belgian IPA","description":"","":"allagash hugh malone","id":31},{"beerName":"harpoon 100 barrel series: white ipa","brewery":"Harpoon Brewery","breweryLocation":"Massachusetts","locationAbbrev":"MA","serveStyle":"draft","isDomestic":"Domestic","abv":"6.2","rating":"88","style":"Belgian IPA","description":"","":"harpoon 100 barrel series: white ipa","id":32},{"beerName":"hardywood singel","brewery":"Hardywood Park Craft Brewery","breweryLocation":"Virginia","locationAbbrev":"VA","serveStyle":"draft","isDomestic":"Domestic","abv":"6.2","rating":"87","style":"Belgian Pale Ale","description":"","":"hardywood singel","id":33},{"beerName":"le canard","brewery":"The Brewer\u2019s Art","breweryLocation":"Maryland","locationAbbrev":"MD","serveStyle":"draft","isDomestic":"Domestic","abv":"8","rating":"88","style":"Belgian Strong Ale","description":"","":"le canard","id":34},{"beerName":"adoration","brewery":"Brewery Ommegang","breweryLocation":"New York","locationAbbrev":"NY","serveStyle":"draft","isDomestic":"Domestic","abv":"10","rating":"90","style":"Belgian Strong Dark Ale","description":"","":"adoration","id":35},{"beerName":"matilda","brewery":"Goose Island","breweryLocation":"Illinois","locationAbbrev":"IL","serveStyle":"draft","isDomestic":"Domestic","abv":"7","rating":"89","style":"Belgian Strong Pale Ale","description":"","":"matilda","id":36},{"beerName":"fluxus 2012","brewery":"Allagash Brewing Company","breweryLocation":"Maine","locationAbbrev":"ME","serveStyle":"draft","isDomestic":"Domestic","abv":"7.7","rating":"","style":"Belgian Strong Pale Ale","description":"","":"fluxus 2012","id":37},{"beerName":"berliner weisse with brettanomyces","brewery":"Bayerischer Bahnhof","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"3","rating":"92","style":"Berliner Weissbier","description":"","":"berliner weisse with brettanomyces","id":38},{"beerName":"strawberry short weisse","brewery":"Smuttynose Brewing Company","breweryLocation":"New Hampshire","locationAbbrev":"NH","serveStyle":"draft","isDomestic":"Domestic","abv":"3","rating":"88","style":"Berliner Weissbier","description":"","":"strawberry short weisse","id":39},{"beerName":"scythe & sickel","brewery":"Brewery Ommegang","breweryLocation":"New York","locationAbbrev":"NY","serveStyle":"draft","isDomestic":"Domestic","abv":"5.8","rating":"86","style":"Bi\u00e8re de Garde","description":"Scythe & Sickle is an-amber ale brewed with a variety of malts, including pils, rye flakes and oat flakes, for incredible depth of flavor and a hint of natural sweetness. Scythe & Sickle brings a new life and flavor to autumn beer lists traditionally filled with Oktoberfests and pumpkin ales. The flavors of the hard work of summer and the celebration of autumn harvest are captured in Scythe & Sickle, creating a unique but traditional Ommegang farmhouse harvest ale. ","":"scythe & sickel","id":40},{"beerName":"lips of faith: cocoa mole","brewery":"New Belgium Brewing Company","breweryLocation":"Colorado","locationAbbrev":"CO","serveStyle":"draft","isDomestic":"Domestic","abv":"9","rating":"90","style":"Chile Beer","description":"","":"lips of faith: cocoa mole","id":41},{"beerName":"etienne dupont cidre bouche brut","brewery":"Domaine Familial Dupont","breweryLocation":"France","locationAbbrev":"FR","serveStyle":"cask","isDomestic":"Domestic","abv":"5.5","rating":"","style":"Cider","description":"","":"etienne dupont cidre bouche brut","id":42},{"beerName":"angry orchard crisp apple cider","brewery":"Boston Beer Company","breweryLocation":"Massachusetts","locationAbbrev":"MA","serveStyle":"draft ","isDomestic":"Domestic","abv":"5","rating":"","style":"Cider","description":"This crisp and refreshing cider mixes the sweetness of the apples with a subtle dryness for a balanced cider taste. The fresh apple aroma and slightly sweet, ripe apple flavor make this cider hard to resist.","":"angry orchard crisp apple cider","id":43},{"beerName":"hansel & gretel pumpkin pils","brewery":"Elysian Brewing Company","breweryLocation":"Washington","locationAbbrev":"WA","serveStyle":"draft","isDomestic":"Domestic","abv":"4.7","rating":"","style":"Czech Pilsner","description":"","":"hansel & gretel pumpkin pils","id":44},{"beerName":"bonator doppelbock","brewery":"Klausterbrauerei Wei\u00dfenohe","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"8.2","rating":"87","style":"Doppelbock","description":"","":"bonator doppelbock","id":45},{"beerName":"schl\u00e4gl doppel bock","brewery":"Stiftsbrauerei Schl\u00e4gl","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"8.3","rating":"84","style":"Doppelbock","description":"","":"schl\u00e4gl doppel bock","id":46},{"beerName":"wei\u00dfenoher classic export","brewery":"Klausterbrauerei Wei\u00dfenohe","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"rubber-gravity-keg","isDomestic":"","abv":"5","rating":"","style":"Dortmunder \/ Export Lager","description":"","":"wei\u00dfenoher classic export","id":47},{"beerName":"wei\u00dfenoher classic export","brewery":"Klosterbrauerei Wei\u00dfenohe","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"rubber-gravity-keg","isDomestic":"","abv":"5","rating":"","style":"Dortmunder \/ Helles","description":"CLASSIC EXPORT ist die bernsteinfarbene Bierspezialit\u00e4t aus der Wei\u00dfenoher Klosterbrauerei. Unverwechselbar durch sein feinw\u00fcrziges Aroma. Gebraut nach den modernen Bio-Standards. Unter Verwendung bester Rohstoffe aus der Region. (translation: Unmistakable thanks to its fine spicy aroma. Brewed according to the modern organic standards. Using the best raw materials from the region.)","":"wei\u00dfenoher classic export","id":48},{"beerName":"kulmbacher eisbock","brewery":"Kulmbacher Brauerei","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"9.2","rating":"92","style":"Eisbock","description":"","":"kulmbacher eisbock","id":49},{"beerName":"anchor small beer","brewery":"Anchor Brewing Company","breweryLocation":"California","locationAbbrev":"CA","serveStyle":"draft","isDomestic":"Domestic","abv":"3.3","rating":"72","style":"English Bitter","description":"","":"anchor small beer","id":50},{"beerName":"zymaster series #2: mark's mild","brewery":"Anchor Brewing Company","breweryLocation":"California","locationAbbrev":"CA","serveStyle":"draft","isDomestic":"Domestic","abv":"4","rating":"","style":"English Dark Mild Ale","description":"","":"zymaster series #2: mark's mild","id":51},{"beerName":"boxcar pumpkin porter","brewery":"Starr Hill Brewery","breweryLocation":"Virginia","locationAbbrev":"VA","serveStyle":"draft","isDomestic":"Domestic","abv":"5.2","rating":"76","style":"English Porter","description":"","":"boxcar pumpkin porter","id":52},{"beerName":"winter storm","brewery":"Heavy Seas Brewing Company","breweryLocation":"Maryland","locationAbbrev":"MD","serveStyle":"draft","isDomestic":"Domestic","abv":"7.5","rating":"87","style":"ESB","description":"","":"winter storm","id":53},{"beerName":"autumn maple","brewery":"The Bruery","breweryLocation":"California","locationAbbrev":"CA","serveStyle":"draft","isDomestic":"Domestic","abv":"10","rating":"85","style":"Fruit \/ Vegetable Beer","description":"Brewed with 17 lbs. of yams per barrel (in other words, a lot of yams!), this autumn seasonal is a different take on the \"pumpkin\" beer style. Brewed with cinnamon, nutmeg, allspice, vanilla, molasses, and maple syrup, and fermented with our traditional Belgian yeast strain, this bold and spicy beer is perfect on a cold autumn evening. ","":"autumn maple","id":54},{"beerName":"lilikoi kepolo wit","brewery":"Avery Brewing Company","breweryLocation":"Colorado","locationAbbrev":"CO","serveStyle":"draft","isDomestic":"Domestic","abv":"5.6","rating":"","style":"Fruit Beer","description":"","":"lilikoi kepolo wit","id":55},{"beerName":"mahr's unfiltered pilsner","brewery":"Mahrs Br\u00e4u","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"rubber-gravity-keg","isDomestic":"","abv":"4.9","rating":"87","style":"German Pilsener","description":"","":"mahr's unfiltered pilsner","id":56},{"beerName":"leipziger gose","brewery":"Bayerischer Bahnhof","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"4.6","rating":"87","style":"Gose","description":"","":"leipziger gose","id":57},{"beerName":"flying dog gose w\/ old bay","brewery":"Flying Dog Brewery","breweryLocation":"Maryland","locationAbbrev":"MD","serveStyle":"draft","isDomestic":"Domestic","abv":"4.7","rating":"","style":"Gose","description":"","":"flying dog gose w\/ old bay","id":58},{"beerName":"freigeist pimock","brewery":"Freigeist Bierkutur","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"5.3","rating":"","style":"Hefeweizen","description":"","":"freigeist pimock","id":59},{"beerName":"kapuziner weissbier","brewery":"Kulmbacher Brauerei","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"5.4","rating":"90","style":"Hefeweizen","description":"","":"kapuziner weissbier","id":60},{"beerName":"jakobi wei\u00dfbier hell","brewery":"Brauerei Hacklberg","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"5.5","rating":"","style":"Hefeweizen","description":"","":"jakobi wei\u00dfbier hell","id":61},{"beerName":"saphir weisse","brewery":"Mahrs Br\u00e4u","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"5.6","rating":"88","style":"Hefeweizen","description":"","":"saphir weisse","id":62},{"beerName":"erdinger oktoberfest weizen","brewery":"Erdinger Weissbr\u00e4u","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"5.7","rating":"81","style":"Hefeweizen","description":"","":"erdinger oktoberfest weizen","id":63},{"beerName":"schneider wiesen edel-weisse","brewery":"Weissbierbrauerie G. Schneider & Sohn","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"wood-gravity-keg","isDomestic":"","abv":"6.2","rating":"","style":"Hefeweizen","description":"","":"schneider wiesen edel-weisse","id":64},{"beerName":"l\u00f6wenbr\u00e4u buttenheim kellerbier","brewery":"L\u00f6wenbr\u00e4u Buttenheim","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"rubber-gravity-keg","isDomestic":"","abv":"4.8","rating":"87","style":"Keller Bier \/ Zwickel Bier","description":"","":"l\u00f6wenbr\u00e4u buttenheim kellerbier","id":65},{"beerName":"mahr's ungespundet","brewery":"Mahrs Br\u00e4u","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"rubber-gravity-keg","isDomestic":"","abv":"5.2","rating":"87","style":"Keller Bier \/ Zwickel Bier","description":"","":"mahr's ungespundet","id":66},{"beerName":"nikl-br\u00e4u michala","brewery":"Brauerei Nickl","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"rubber-gravity-keg","isDomestic":"","abv":"5.6","rating":"","style":"Keller Bier \/ Zwickel Bier","description":"","":"nikl-br\u00e4u michala","id":67},{"beerName":"sauer urbr\u00e4u","brewery":"Brauerei Sauer","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"rubber-gravity-keg","isDomestic":"","abv":"4.6","rating":"","style":"Keller Bier \/ Zwickel Bier","description":"","":"sauer urbr\u00e4u","id":68},{"beerName":"hofstettner hochzeitsbier von 1810","brewery":"Brauerei Hofstetten-Krammer","breweryLocation":"Austria","locationAbbrev":"AUT","serveStyle":"draft","isDomestic":"","abv":"6.3","rating":"86","style":"Keller Bier \/ Zwickel Bier","description":"","":"hofstettner hochzeitsbier von 1810","id":69},{"beerName":"mahrs br\u00e4u kellerbier ungespundet hefetr\u00fcb","brewery":"Mahrs Br\u00e4u","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"5.2","rating":"87","style":"Keller Bier \/ Zwickel Bier","description":"","":"mahrs br\u00e4u kellerbier ungespundet hefetr\u00fcb","id":70},{"beerName":"wei\u00dfenoher zwickelbier","brewery":"Klosterbrauerei Wei\u00dfenohe","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"5.2","rating":"","style":"Keller Bier \/ Zwickel Bier","description":"","":"wei\u00dfenoher zwickelbier","id":71},{"beerName":"m\u00f6nchshof kellerbier","brewery":"Kulmbacher Brauerei","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"5.4","rating":"87","style":"Keller Bier \/ Zwickel Bier","description":"","":"m\u00f6nchshof kellerbier","id":72},{"beerName":"hofstettner hochzeitsbier von 1810","brewery":"Brauerei Hofstetten-Krammer","breweryLocation":"Austria","locationAbbrev":"AUT","serveStyle":"wood-gravity-keg","isDomestic":"","abv":"6.3","rating":"86","style":"Keller Bier \/ Zwickel Bier","description":"","":"hofstettner hochzeitsbier von 1810","id":73},{"beerName":"sierra nevada kolsch","brewery":"Sierra Nevada Brewing Company","breweryLocation":"California","locationAbbrev":"CA","serveStyle":"draft","isDomestic":"Domestic","abv":"5","rating":"86","style":"K\u00f6lsch","description":"","":"sierra nevada kolsch","id":74},{"beerName":"s\u00fcnner k\u00f6lsch","brewery":"S\u00fcnner","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"5.4","rating":"85","style":"K\u00f6lsch","description":"","":"s\u00fcnner k\u00f6lsch","id":75},{"beerName":"timmermans pumpkin lambicus","brewery":"Brouwerij Timmermans\/ John Martin","breweryLocation":"Belgium","locationAbbrev":"BEL","serveStyle":"draft","isDomestic":"","abv":"4","rating":"","style":"Lambic - Fruit","description":"","":"timmermans pumpkin lambicus","id":76},{"beerName":"aufsesser festbier","brewery":"Brauereigasthof Rothenbach","breweryLocation":"German","locationAbbrev":"GE","serveStyle":"rubber-gravity-keg","isDomestic":"","abv":"5.1","rating":"","style":"M\u00e4rzen \/ Oktoberfest","description":"","":"aufsesser festbier","id":77},{"beerName":"heavy seas barrel-aged m\u00e4rzen beer","brewery":"Heavy Seas Brewing Company","breweryLocation":"Maryland","locationAbbrev":"MD","serveStyle":"cask","isDomestic":"Domestic","abv":"5.75","rating":"81","style":"M\u00e4rzen \/ Oktoberfest","description":"","":"heavy seas barrel-aged m\u00e4rzen beer","id":78},{"beerName":"the kaiser","brewery":"Avery Brewing Company","breweryLocation":"Colorado","locationAbbrev":"CO","serveStyle":"draft","isDomestic":"Domestic","abv":"10.03","rating":"85","style":"M\u00e4rzen \/ Oktoberfest","description":"","":"the kaiser","id":79},{"beerName":"dominion octoberfest","brewery":"Coastal Brewing Company","breweryLocation":"Delaware","locationAbbrev":"DE","serveStyle":"draft","isDomestic":"Domestic","abv":"5.9","rating":"82","style":"M\u00e4rzen \/ Oktoberfest","description":"Our Autumn Seasonal beer is a traditional Maerzen style lager. We use eight types of imported German malts and four hop varieties to create this amber-colored fest beer.","":"dominion octoberfest","id":80},{"beerName":"wei\u00dfenoher monk\u2019s fest","brewery":"Klausterbrauerei Wei\u00dfenohe","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"5","rating":"83","style":"M\u00e4rzen \/ Oktoberfest","description":"","":"wei\u00dfenoher monk\u2019s fest","id":81},{"beerName":"ayinger oktober fest-m\u00e4rzen","brewery":"Brauerei Aying","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"5.8","rating":"88","style":"M\u00e4rzen \/ Oktoberfest","description":"","":"ayinger oktober fest-m\u00e4rzen","id":82},{"beerName":"weihenstephaner festbier","brewery":"Bayerische Staatsbrauerei Weihenstephan","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"5.8","rating":"82","style":"M\u00e4rzen \/ Oktoberfest","description":"","":"weihenstephaner festbier","id":83},{"beerName":"hofbr\u00e4u m\u00fcnchen oktoberfestbier","brewery":"Staatliches Hofbr\u00e4uhaus M\u00fcnchen","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"6.3","rating":"77","style":"M\u00e4rzen \/ Oktoberfest","description":"","":"hofbr\u00e4u m\u00fcnchen oktoberfestbier","id":84},{"beerName":"duclaw mad bishop","brewery":"DuClaw Brewing Company","breweryLocation":"Maryland","locationAbbrev":"MD","serveStyle":"draft","isDomestic":"Domestic","abv":"5.8","rating":"78","style":"M\u00e4rzen \/ Oktoberfest","description":"","":"duclaw mad bishop","id":85},{"beerName":"harpoon octoberfest beer","brewery":"Harpoon Brewery","breweryLocation":"Massachusetts","locationAbbrev":"MA","serveStyle":"draft","isDomestic":"Domestic","abv":"5.5","rating":"83","style":"M\u00e4rzen \/ Oktoberfest","description":"The character and complexity of Harpoon Octoberfest comes from the malt and hops. When looking at a freshly poured Harpoon Octoberfest, you will notice the garnet-red color with a firm, creamy head. The beer\u2019s color is from a blend of Munich, chocolate, and pale malt. The thick head results in part from wheat malt added to the grist. The hop aroma of this beer is not overpowering but it is present. Tettnang hops add a subtle spice nose that blends with the malt character. This beer is full-bodied, smooth, and malty. Willamettehops are used to provide a gentle bitterness and to balance any residual sweetness present from the malt. The finish is soft and malty with a mild bitterness. ","":"harpoon octoberfest beer","id":86},{"beerName":"bell's octoberfest","brewery":"Bell's Brewery","breweryLocation":"Michigan","locationAbbrev":"MI","serveStyle":"draft","isDomestic":"Domestic","abv":"5.5","rating":"81","style":"M\u00e4rzen \/ Oktoberfest","description":"","":"bell's octoberfest","id":87},{"beerName":"oktober\ufb01sh","brewery":"Flying Fish Brewery","breweryLocation":"New Jersey","locationAbbrev":"NJ","serveStyle":"draft","isDomestic":"Domestic","abv":"5.5","rating":"81","style":"M\u00e4rzen \/ Oktoberfest","description":"","":"oktober\ufb01sh","id":88},{"beerName":"brooklyn oktoberfest","brewery":"Brooklyn Brewery","breweryLocation":"New York","locationAbbrev":"NY","serveStyle":"draft","isDomestic":"Domestic","abv":"5.5","rating":"85","style":"M\u00e4rzen \/ Oktoberfest","description":"","":"brooklyn oktoberfest","id":89},{"beerName":"great lakes oktoberfest","brewery":"Great Lakes Brewing Company","breweryLocation":"Ohio","locationAbbrev":"OH","serveStyle":"draft","isDomestic":"Domestic","abv":"6.5","rating":"89","style":"M\u00e4rzen \/ Oktoberfest","description":"","":"great lakes oktoberfest","id":90},{"beerName":"victory festbier","brewery":"Victory Brewing Company","breweryLocation":"Pennsylvania","locationAbbrev":"PA","serveStyle":"draft","isDomestic":"Domestic","abv":"5.6","rating":"85","style":"M\u00e4rzen \/ Oktoberfest","description":"","":"victory festbier","id":91},{"beerName":"rhino'fest","brewery":"Lost Rhino Brewing Company","breweryLocation":"Virginia","locationAbbrev":"VA","serveStyle":"draft","isDomestic":"Domestic","abv":"5.5","rating":"","style":"M\u00e4rzen \/ Oktoberfest","description":"","":"rhino'fest","id":92},{"beerName":"port city oktoberfest","brewery":"Port City Brewing Company","breweryLocation":"Virginia","locationAbbrev":"VA","serveStyle":"draft","isDomestic":"Domestic","abv":"6","rating":"87","style":"M\u00e4rzen \/ Oktoberfest","description":"","":"port city oktoberfest","id":93},{"beerName":"mahr\u2019s e.t.a. homann","brewery":"Mahrs Br\u00e4u","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"5","rating":"","style":"Munich Dunkel Lager","description":"","":"mahr\u2019s e.t.a. homann","id":94},{"beerName":"wei\u00dfenoher export dunkel","brewery":"Klausterbrauerei Wei\u00dfenohe","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"5","rating":"","style":"Munich Dunkel Lager","description":"","":"wei\u00dfenoher export dunkel","id":95},{"beerName":"dark cloud dunkel","brewery":"Mother Earth Brewing Company","breweryLocation":"North Carolina","locationAbbrev":"NC","serveStyle":"draft","isDomestic":"Domestic","abv":"5.1","rating":"87","style":"Munich Dunkel Lager","description":"","":"dark cloud dunkel","id":96},{"beerName":"mahr's hell","brewery":"Mahrs Br\u00e4u","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"rubber-gravity-keg","isDomestic":"","abv":"4.9","rating":"88","style":"Munich Helles Lager","description":"","":"mahr's hell","id":97},{"beerName":"fordham helles","brewery":"Coastal Brewing Company","breweryLocation":"Delaware","locationAbbrev":"DE","serveStyle":"draft","isDomestic":"Domestic","abv":"5.4","rating":"82","style":"Munich Helles Lager","description":"Clean & refreshing, this Bavarian style lager uses four different German grains & three hop varieties to create an intricate flavor profile & a beautiful deep golden color. Helles is brewed in the style of Munich\u2019s everyday drinking beer. Prost!","":"fordham helles","id":98},{"beerName":"mahrs br\u00e4u hell","brewery":"Mahrs Br\u00e4u","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"4.9","rating":"88","style":"Munich Helles Lager","description":"","":"mahrs br\u00e4u hell","id":99},{"beerName":"wei\u00dfenoher monk\u2019s fest","brewery":"Klausterbrauerei Wei\u00dfenohe","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"rubber-gravity-keg","isDomestic":"","abv":"5","rating":"83","style":"Oktoberfest ","description":"","":"wei\u00dfenoher monk\u2019s fest","id":100},{"beerName":"dog\ufb01sh head punkin\u2019 ale","brewery":"Dog\ufb01sh Head Craft Brewery","breweryLocation":"Delaware","locationAbbrev":"DE","serveStyle":"draft","isDomestic":"Domestic","abv":"7","rating":"88","style":"Pumpkin Ale","description":"A full-bodied brown ale with smooth hints of pumpkin and brown sugar. We brew our Punkin Ale with pumpkin meat, organic brown sugar and spices. As the season cools, this is the perfect beer to warm up with. ","":"dog\ufb01sh head punkin\u2019 ale","id":101},{"beerName":"jacques au lantern pumpkin ale","brewery":"Evolution Craft Brewery","breweryLocation":"Maryland","locationAbbrev":"MD","serveStyle":"draft","isDomestic":"Domestic","abv":"6.3","rating":"86","style":"Pumpkin Ale","description":"","":"jacques au lantern pumpkin ale","id":102},{"beerName":"the great pumpkin","brewery":"Heavy Seas Brewing Company","breweryLocation":"Maryland","locationAbbrev":"MD","serveStyle":"draft","isDomestic":"Domestic","abv":"8","rating":"85","style":"Pumpkin Ale","description":"","":"the great pumpkin","id":103},{"beerName":"wild dog: the fear imperial pumpkin ale","brewery":"Flying Dog Brewery","breweryLocation":"Maryland","locationAbbrev":"MD","serveStyle":"draft","isDomestic":"Domestic","abv":"9","rating":"83","style":"Pumpkin Ale","description":"","":"wild dog: the fear imperial pumpkin ale","id":104},{"beerName":"ichabod","brewery":"New Holland Brewing Company","breweryLocation":"Michigan","locationAbbrev":"MI","serveStyle":"draft","isDomestic":"Domestic","abv":"5.5","rating":"78","style":"Pumpkin Ale","description":"","":"ichabod","id":105},{"beerName":"la parcela no. 1 pumpkin ale","brewery":"Jolly Pumpkin Artisan Ales","breweryLocation":"Michigan","locationAbbrev":"MI","serveStyle":"draft","isDomestic":"Domestic","abv":"6","rating":"86","style":"Pumpkin Ale","description":"","":"la parcela no. 1 pumpkin ale","id":106},{"beerName":"schlafly pumpkin ale","brewery":"Saint Louis Brewery","breweryLocation":"Missouri","locationAbbrev":"MO","serveStyle":"draft","isDomestic":"Domestic","abv":"8","rating":"93","style":"Pumpkin Ale","description":"","":"schlafly pumpkin ale","id":107},{"beerName":"smuttynose pumpkin ale","brewery":"Smuttynose Brewing Company","breweryLocation":"New Hampshire","locationAbbrev":"NH","serveStyle":"draft","isDomestic":"Domestic","abv":"5.84","rating":"85","style":"Pumpkin Ale","description":"Smuttynose Pumpkin Ale is our homage to the craft and heritage of America\u2019s brewers. Recipes calling for the use of pumpkins in beer date back to early colonial times, when brewers sought to extend their supply of costly imported malt with locally grown ingredients, such as squash and \"pompions.\" In that spirit, we brew our ale with the addition of pumpkin to the mash, along with traditional spices to create a delicious American original.","":"smuttynose pumpkin ale","id":108},{"beerName":"sixpoint autumnation","brewery":"Sixpoint Brewery","breweryLocation":"New York","locationAbbrev":"NY","serveStyle":"draft","isDomestic":"Domestic","abv":"6.8","rating":"82","style":"Pumpkin Ale","description":"","":"sixpoint autumnation","id":109},{"beerName":"southern tier pumking","brewery":"Southern Tier Brewing Company","breweryLocation":"New York","locationAbbrev":"NY","serveStyle":"draft","isDomestic":"Domestic","abv":"8.6","rating":"90","style":"Pumpkin Ale","description":"","":"southern tier pumking","id":110},{"beerName":"frog\u2019s hollow double pumpkin ale","brewery":"Hoppin\u2019 Frog","breweryLocation":"Ohio","locationAbbrev":"OH","serveStyle":"draft","isDomestic":"Domestic","abv":"8.4","rating":"85","style":"Pumpkin Ale","description":"","":"frog\u2019s hollow double pumpkin ale","id":111},{"beerName":"weyerbacher imperial pumpkin ale","brewery":"Weyerbacher Brewing Company","breweryLocation":"Pennsylvania","locationAbbrev":"PA","serveStyle":"draft","isDomestic":"Domestic","abv":"8","rating":"88","style":"Pumpkin Ale","description":"","":"weyerbacher imperial pumpkin ale","id":112},{"beerName":"wolaver's will stevens' organic pumpkin ale","brewery":"Otter Creek Brewing Company","breweryLocation":"Vermont","locationAbbrev":"VT","serveStyle":"draft","isDomestic":"Domestic","abv":"5.35","rating":"78","style":"Pumpkin Ale","description":"","":"wolaver's will stevens' organic pumpkin ale","id":113},{"beerName":"long trail pumpkin ale","brewery":"Long Trail Brewing Company","breweryLocation":"Vermont","locationAbbrev":"VT","serveStyle":"draft","isDomestic":"Domestic","abv":"5.5","rating":"82","style":"Pumpkin Ale","description":"","":"long trail pumpkin ale","id":114},{"beerName":"punkinator","brewery":"Mad Fox Brewing Company","breweryLocation":"Virginia","locationAbbrev":"VA","serveStyle":"draft","isDomestic":"Domestic","abv":"5","rating":"","style":"Pumpkin Ale","description":"","":"punkinator","id":115},{"beerName":"alewerks pumpkin ale","brewery":"Williamsburg AleWerks","breweryLocation":"Virginia","locationAbbrev":"VA","serveStyle":"draft","isDomestic":"Domestic","abv":"8","rating":"92","style":"Pumpkin Ale","description":"","":"alewerks pumpkin ale","id":116},{"beerName":"night owl pumpkin ale","brewery":"Elysian Brewing Company","breweryLocation":"Washington","locationAbbrev":"WA","serveStyle":"draft","isDomestic":"Domestic","abv":"6.1","rating":"87","style":"Pumpkin Ale","description":"Brewed with 150 lbs. of pumpkin in each batch. Made with Pale, Munich and Crystal malts green and roasted pumpkin seeds, pumpkin in the mash, boil and fermenter. Bittered with Horizon hops. Spiced in conditioning with nutmeg, clove, cinnamon, ginger and allspice.","":"night owl pumpkin ale","id":117},{"beerName":"dark o\u2019 the moon","brewery":"Elyisian Brewing Company","breweryLocation":"Washington","locationAbbrev":"WA","serveStyle":"draft","isDomestic":"Domestic","abv":"6.5","rating":"87","style":"Pumpkin Ale","description":"","":"dark o\u2019 the moon","id":118},{"beerName":"the great pumpkin","brewery":"Elysian Brewing Company","breweryLocation":"Washington","locationAbbrev":"WA","serveStyle":"draft","isDomestic":"Domestic","abv":"8.1","rating":"93","style":"Pumpkin Ale","description":"","":"the great pumpkin","id":119},{"beerName":"dc brau & epic fermentation without representation imperial pumpkin porter","brewery":"DC Brau & Epic Brewing Company","breweryLocation":"Washington, DC & Utah","locationAbbrev":"DC\/UT","serveStyle":"draft","isDomestic":"Domestic","abv":"8","rating":"86","style":"Pumpkin Ale","description":"","":"dc brau & epic fermentation without representation imperial pumpkin porter","id":120},{"beerName":"kraus hirschen-trunk","brewery":"Brauerei Kraus","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"rubber-gravity-keg","isDomestic":"","abv":"5.5","rating":"","style":"Rauchbier","description":"","":"kraus hirschen-trunk","id":121},{"beerName":"spezial rauchbier","brewery":"Brauerei Spezial","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"4.6","rating":"","style":"Rauchbier","description":"","":"spezial rauchbier","id":122},{"beerName":"aecht schlenkerla rauchbier urbock","brewery":"Brauerei Heller-Trum","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"6.6","rating":"91","style":"Rauchbier","description":"A bitter Smokebock for the strongbeer-season (October through December). Matured for weeks in the deep rock-cellar and tapped freshly from the oakwood cask.","":"aecht schlenkerla rauchbier urbock","id":123},{"beerName":"fumata nera","brewery":"High & Mighty Brewing Company","breweryLocation":"Massachusetts","locationAbbrev":"MA","serveStyle":"draft","isDomestic":"Domestic","abv":"4.5","rating":"","style":"Rye Beer","description":"","":"fumata nera","id":124},{"beerName":"3 stars lime basil saison","brewery":"3 Stars Brewing Company","breweryLocation":"Washington, DC","locationAbbrev":"DC","serveStyle":"cask","isDomestic":"Domestic","abv":"4.2","rating":"","style":"Saison \/ Farmhouse Ale","description":"","":"3 stars lime basil saison","id":125},{"beerName":"lips of faith: peach porch lounger","brewery":"New Belgium Brewing Company","breweryLocation":"Colorado","locationAbbrev":"CO","serveStyle":"draft","isDomestic":"Domestic","abv":"9.4","rating":"79","style":"Saison \/ Farmhouse Ale","description":"This beer has peach juice, molasses, hominy grits, molasses, lemon peel, pale and biscuit malts, and some Brettanomyces.","":"lips of faith: peach porch lounger","id":126},{"beerName":"oxtoberfest","brewery":"Oxbow Brewing Company","breweryLocation":"Maine","locationAbbrev":"ME","serveStyle":"draft","isDomestic":"Domestic","abv":"5.5","rating":"","style":"Saison \/ Farmhouse Ale","description":"","":"oxtoberfest","id":127},{"beerName":"autumnal","brewery":"Stillwater Artisanal (at DOG Brewing Company)","breweryLocation":"Maryland","locationAbbrev":"MD","serveStyle":"draft","isDomestic":"Domestic","abv":"7.2","rating":"84","style":"Saison \/ Farmhouse Ale","description":"This deep amber hued ale takes it\u2019s inspiration from Germany while still nodding to the Belgian farmhouse tradition. The base is comprised of German two-row, wheat, Cara-Munich, and roasted barley. Generously hopped with a blend of Perle, Spalt, and Hallertau Mittelfr\u00fch and fermented with a rustic Belgian farmhouse ale yeast. These elements together provide a melange of earth and fruit aromas backed with hints of caramel with a dry clean finish.","":"autumnal","id":128},{"beerName":"tank 7 farmhouse ale","brewery":"Boulevard Brewing Company","breweryLocation":"Missouri","locationAbbrev":"MO","serveStyle":"draft","isDomestic":"Domestic","abv":"8","rating":"91","style":"Saison \/ Farmhouse Ale","description":"","":"tank 7 farmhouse ale","id":129},{"beerName":"mad fox saison","brewery":"Mad Fox Brewing Company","breweryLocation":"Virginia","locationAbbrev":"VA","serveStyle":"draft","isDomestic":"Domestic","abv":"6","rating":"85","style":"Saison \/ Farmhouse Ale","description":"","":"mad fox saison","id":130},{"beerName":"flying dog secret stash 2012","brewery":"Flying Dog Brewery","breweryLocation":"Maryland","locationAbbrev":"MD","serveStyle":"draft","isDomestic":"Domestic","abv":"5.5","rating":"80","style":"Saison \/ Farmhouse Ale ","description":"","":"flying dog secret stash 2012","id":131},{"beerName":"m\u00f6nchshof schwarzbier","brewery":"Kulmbacher Brauerei","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"4.9","rating":"90","style":"Schwarzbier","description":"","":"m\u00f6nchshof schwarzbier","id":132},{"beerName":"innstadt extra schwarze","brewery":"Innstadt Brauerei","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"5","rating":"","style":"Schwarzbier","description":"","":"innstadt extra schwarze","id":133},{"beerName":"black wing schwarzbier","brewery":"Union Craft Brewing","breweryLocation":"Maryland","locationAbbrev":"MD","serveStyle":"draft","isDomestic":"Domestic","abv":"4.9","rating":"","style":"Schwarzbier","description":"","":"black wing schwarzbier","id":134},{"beerName":"1809: zymatore barrel-aged","brewery":"Professor Fritz Briem","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"5","rating":"","style":"Sour Ale","description":"","":"1809: zymatore barrel-aged","id":135},{"beerName":"skull crushing ape","brewery":"Devils Backbone Brewing Company","breweryLocation":"Virginia","locationAbbrev":"VA","serveStyle":"draft","isDomestic":"Domestic","abv":"8","rating":"","style":"Weizenbock","description":"","":"skull crushing ape","id":136},{"beerName":"fiat lux","brewery":"Brooklyn Brewery","breweryLocation":"New York","locationAbbrev":"NY","serveStyle":"draft","isDomestic":"Domestic","abv":"6.1","rating":"84","style":"Witbier","description":"","":"fiat lux","id":137},{"beerName":"arcobr\u00e4u zwicklbier","brewery":"Arcobr\u00e4u Gr\u00e4\ufb02iches Brauhaus","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"5.2","rating":"85","style":"Zwickelbier","description":"","":"arcobr\u00e4u zwicklbier","id":138},{"beerName":"wei\u00dfenoher un\ufb01ltered pils","brewery":"Klosterbrauerei Wei\u00dfenohe","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"rubber-gravity-keg","isDomestic":"","abv":"","rating":"","style":"","description":"","":"wei\u00dfenoher un\ufb01ltered pils","id":139},{"beerName":"1809","brewery":"Professor Fritz Briem (Schlossbrauerei Au)","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"","rating":"","style":"","description":"","":"1809","id":140},{"beerName":"tap 5 meine hopfen-weisse: zymatore barrel-aged","brewery":"Weissbierbrauerie G. Schneider & Sohn","breweryLocation":"Germany","locationAbbrev":"GE","serveStyle":"draft","isDomestic":"","abv":"","rating":"","style":"","description":"","":"tap 5 meine hopfen-weisse: zymatore barrel-aged","id":141},{"beerName":"smuttynose red wine barrel scotch ale","brewery":"Smuttynose Brewing Company","breweryLocation":"New Hampshire","locationAbbrev":"NH","serveStyle":"draft","isDomestic":"Domestic","abv":"","rating":"","style":"","description":"","":"smuttynose red wine barrel scotch ale","id":142},{"beerName":"the duck-rabbit m\u00e4rzen","brewery":"The Duck-Rabbit Craft Brewery","breweryLocation":"North Carolina","locationAbbrev":"NC","serveStyle":"draft","isDomestic":"Domestic","abv":"4.8","rating":"85","style":"","description":"","":"the duck-rabbit m\u00e4rzen","id":143},{"beerName":"chatoe rogue: 19 original colonies mead","brewery":"Rogue Ales","breweryLocation":"Oregon","locationAbbrev":"OR","serveStyle":"draft","isDomestic":"Domestic","abv":"","rating":"","style":"","description":"","":"chatoe rogue: 19 original colonies mead","id":144},{"beerName":"scratch #43: oktoberfest","brewery":"Tr\u00f6egs Brewing Company","breweryLocation":"Pennsylvania","locationAbbrev":"PA","serveStyle":"draft","isDomestic":"Domestic","abv":"","rating":"","style":"","description":"","":"scratch #43: oktoberfest","id":145},{"beerName":"stealth k\u00f6lsch","brewery":"Victory Brewing Company","breweryLocation":"Pennsylvania","locationAbbrev":"PA","serveStyle":"draft","isDomestic":"Domestic","abv":"","rating":"","style":"","description":"","":"stealth k\u00f6lsch","id":146},{"beerName":"wet & wild: wet hop harvest ale","brewery":"Uinta Brewing Company","breweryLocation":"Utah","locationAbbrev":"UT","serveStyle":"draft","isDomestic":"Domestic","abv":"","rating":"","style":"","description":"","":"wet & wild: wet hop harvest ale","id":147},{"beerName":"woodchuck dark & dry cider","brewery":"Vermont Hard Cider Company","breweryLocation":"Vermont","locationAbbrev":"VT","serveStyle":"draft","isDomestic":"Domestic","abv":"5","rating":"","style":"","description":"","":"woodchuck dark & dry cider","id":148},{"beerName":"freestyle #10: rye sessio saison","brewery":"Bluejacket & Oxbow Brewing Company","breweryLocation":"Washington, DC & Maine","locationAbbrev":"DC\/ME","serveStyle":"draft","isDomestic":"Domestic","abv":"","rating":"","style":"","description":"","":"freestyle #10: rye sessio saison","id":149},{"beerName":"mad jacket weizenbock","brewery":"Bluejacket & Mad Fox Brewing Company","breweryLocation":"Washington, DC & Virginia","locationAbbrev":"DC\/VA","serveStyle":"draft","isDomestic":"Domestic","abv":"","rating":"","style":"","description":"","":"mad jacket weizenbock","id":150}];


  $.ajax({
    url: feed,
    async: false,
    dataType: 'json',
    success: function (json) {
      ba.beers = json;
    }
  });

  // ba.beers = feed;

  return ba.beers;
};

// use mustache to render the data
ba.renderList = function (data) {

  var $main = $('.main');
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

  var $input = $('#item-search');
  var fieldValue = '';

  $('#item-search').on('keyup', function(){
    var fieldValue = $('#item-search').val();
    if ( fieldValue == '' ) {
      // console.log('zero: ' + fieldValue);
      ba.renderList(ba.beers);
    }
  });
}

  ba.useAutoComplete = function() {

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
        console.log('search value: ' + event.target.value);
      },
      select: function (event, ui) {
        ba.filterSearchItems(event.target.value);
      },
      close: function (event, ui) {
        ba.filterSearchItems(event.target.value);
      }
    });
  };

ba.filterSearchItems = function (searchText) {
  // console.log('actual text is: ' + searchText);
  var lowerCaseText = searchText.toLowerCase();
  // console.log('lowertext is: ' + lowerCaseText);

  var beers = _.filter(ba.beers, function (item) {
      var s = item.beerName;
      return s.indexOf(searchText) > -1 || s.indexOf(lowerCaseText) > -1;
  });

  // console.log('num beers: ' + beers.length);
  ba.renderList(beers);

}

ba.toggleAbout = function () {
  $sections = $('#home-cont, #about-cont');

  $('#about-btn, #about-btn-close').on('click', function (e) {
    e.preventDefault();
    $sections.toggleClass('hidden');
  });

  if (ba.detectAndroidDevice() != true) {
      $('.snapp-head').on('click', function (e) {
        e.preventDefault();
        window.scrollTo(0);
      });
    }
}

ba.detectAndroidDevice = function () {
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    var value = '';

    if (isAndroid) {
      var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8)); 
      if (androidversion < 2.3) {
        value = true;
      }
    } else {
        value = false;
    }
    return value;
}

jQuery(document).ready(function () {

  ba.renderList(ba.obtain);
  ba.search();
  ba.useAutoComplete();
  ba.toggleAbout();

});

// helpers
function filterer(string) {
  var beers = _.filter(ba.beers, function (item) {
      var s = item.beerName;
      return s.indexOf(string) > -1;
  });
  console.log(beers.length);
}