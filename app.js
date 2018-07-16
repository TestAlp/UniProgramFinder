var urlCollector = require('./src/controller/urlCollector');
var uniProgramInfoCollector = require('./src/controller/uniProgramInfoCollector');
var uniPrograms = [];

var main = async function () {
    await getInfoAsync('https://ebys.ege.edu.tr/ogrenci/ebp/organizasyon.aspx?kultur=en-US&Mod=1&Menu=0', 'Bachelor');
    await getInfoAsync('https://ebys.ege.edu.tr/ogrenci/ebp/organizasyon.aspx?kultur=en-US&Mod=2', 'Master');
    console.log(uniPrograms);
    console.log("done")

}

async function getInfoAsync(url, degree) {
    var urls = await urlCollector.collect(url);
    var foundPrograms = await uniProgramInfoCollector.collect(urls, degree);
    uniPrograms.concat(foundPrograms);
    console.log('################################################ Done with ' + degree);
}

main();                                                      
