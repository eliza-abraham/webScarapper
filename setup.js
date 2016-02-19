var request = require("request"),
    cheerio = require("cheerio"),
    url = 'http://www.eduro.com/';

request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body);
    dailyQuote = $('dailyQuote p').html();

    console.log(dailyQuote);
  } else {
      console.log("Error found: " + error);
  }
});
