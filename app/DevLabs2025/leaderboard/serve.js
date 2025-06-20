 const Tabletop = require('tabletop');
 
 var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRR9cRWa07Waf-VPy1-K129KsNQyvx9riDs8hGc6IvWBk90g7Koib-Gu94Coq7nQgxyefMl4vAeaVSc/pubhtml';
 
function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: false } )
    console.log(Tabletop.Model.all());
  }
 
 function showInfo(data, tabletop) {
  // do something with the data
 // console.log(JSON.stringify(data, null, 2));
  console.log(tabletop.all());
}
 
//initialise and kickstart the whole thing.
init();