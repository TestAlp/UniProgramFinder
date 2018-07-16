var rp = require('request-promise');
var nameAndDegreeCollector = require('./programNameAndDegreeCollector');
const cheerio = require('cheerio');
uniPrograms = [];

var uniProgramInfoCollector = {}
uniProgramInfoCollector.collect = async function (urls, degree) {
    urls.forEach(async url => {
        try {
            var html = await getHtmlAsync(url);
            var name = nameAndDegreeCollector.getName(html);
            var semesterAmount = nameAndDegreeCollector.getSemesterAmount(html);
            addUniProgram(degree, name, semesterAmount, url);

        } catch (err) {
            console.error('##########################' + url + err);
        }
    });
    return uniPrograms;
};


var options = {
    transform: function (body) {
        return cheerio.load(body);
    }
};

async function getHtmlAsync(url) {
    try {
        options.uri = url;
        return rp(options);
    } catch (err) {
        console.error(err);
    }
};

function addUniProgram(degree, name, semesterAmount, url) {
    var uniProgram = {};
    uniProgram.degree = degree;
    uniProgram.name = name;
    uniProgram.semesterAmount = semesterAmount;
    uniProgram.url = url;
    console.log(uniProgram);
    uniPrograms.push(uniProgram);
}

module.exports = uniProgramInfoCollector;

