const rp = require('request-promise');
var request = require('request');
const cheerio = require('cheerio');
const Table = require('cli-table');
var scraper = require('table-scraper');

// Get all bachelor Links from Bachelor url
const bachelorProgramOverviewUrl = 'https://ebys.ege.edu.tr/ogrenci/ebp/organizasyon.aspx?kultur=en-US&Mod=1&Menu=0';
const masterProgramOverviewUrl = "https://ebys.ege.edu.tr/ogrenci/ebp/organizasyon.aspx?kultur=en-US&Mod=2";
const testPageHtml = 'https://ebys.ege.edu.tr/ogrenci/ebp/organizasyon.aspx?kultur=en-US&Mod=2&ustbirim=193&birim=1&altbirim=-1&program=7941&organizasyonId=60004&mufredatTurId=932001';
var urlsOfBachelorProgram = [];
var urlsOfMasterProgram = [];
// const mainUrl = 'https://ebys.ege.edu.tr/ogrenci/ebp/'; 


const options = {
	url: bachelorProgramOverviewUrl,
	json: true
}




request( bachelorProgramOverviewUrl, function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var foundUrls = [];
    $('.BirimNode').each(function(i, element){
      getAndAddToFoundElements(element);
      // var foundElement = element;
      // var attribs = foundElement.attribs;
      // var foundUrl = attribs.href;
      // foundUrls.push(foundUrl );
      // var nameOfProgram = foundElement.children();
      // var points = $(subtext).eq(0).text();

    });
  }
  foundUrls.push("test");
  foundUrls.push("test");
  var uniqueArray = foundUrls.filter(function(elem, pos) {
    return foundUrls.indexOf(elem) == pos;
});
  // var unique = foundUrls.filter(  );
  console.print("done");
});

function getAndAddToFoundElements(foundElement){
 urlsOfBachelorProgram.push(foundElement.attribs.href);
return 
}
request( testPageHtml, function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var foundUrls = [];
    $('.BirimNode').each(function(i, element){
      var foundElement = element;
      var attribs = foundElement.attribs;
      var foundUrl = attribs.href;
      foundUrls.push(mainUrl + foundUrl);
      // var nameOfProgram = foundElement.children();
      // var points = $(subtext).eq(0).text();

    });
  }
});

function scrapeFromTable(){
// scraper
//   .get(bachelorProgramOverviewUrl)
//   .then((tableData) => {
//     console.log("")
//     let table1 = tableData.indexOf[0];
//     let table2 = tableData[1];
//     let table3 = tableData[2];
//     let table4 = tableData[3];
//     let table5 = tableData[4];
//     console.log("")
//   });
}
// rp(options)
// 	.then((data) => {

//     $("ul").find("span").css({"color": "red", "border": "2px solid red"});

//     let body = data.body;
//     let $ = cheerio.load(data);
//     let found = $('div').attr('id', 'organizasyonTree').html();
// 		console.log("");

// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

function collectUrlsFromWebsite(urlOfProgramOverview, urlsOfProgram){

}
