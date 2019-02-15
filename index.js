const rp = require('request-promise')
const $ = require('cheerio')
const url = 'https://www.menuwithprice.com/menu/jack-in-the-box/california/acton/60607/'

rp(url)
  .then(function(html){
    console.log($('td', html)[17].children[0].data)
  })
  .catch(function(err){
    console.log(err)
  })
