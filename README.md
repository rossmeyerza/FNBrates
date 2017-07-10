# FNBrates
[Express](https://expressjs.com/) server to get the latest FNB Forex Rates as per https://www.fnb.co.za/rates/ForeignExchangeRates.html
Currently working at http://condriac.xyz/api/v1/fnb

## routes
ZAR/GBP http://condriac.xyz/api/v1/fnb/ZARGBP

ZAR/EUR http://condriac.xyz/api/v1/fnb/ZAREUR

ZAR/USD http://condriac.xyz/api/v1/fnb/ZARUSD


## Disclaimer 
Uses [cherrio.js](https://github.com/cheeriojs/cheerio) to crawl the FNB page and query those specific table cells. if FNB changes this page it will break
