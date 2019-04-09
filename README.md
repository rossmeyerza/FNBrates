# FNBrates
[Express](https://expressjs.com/) server to get the latest FNB Forex Rates as per https://www.fnb.co.za/rates/ForeignExchangeRates.html
Currently working at http://condriac.xyz/api/v1/fnb

## routes
ZAR/GBP http://condriac.xyz/api/v1/fnb/ZARGBP

ZAR/EUR http://condriac.xyz/api/v1/fnb/ZAREUR

ZAR/USD http://condriac.xyz/api/v1/fnb/ZARUSD

ZAR/AED http://condriac.xyz/api/v1/fnb/ZARAED

ZAR/AUD http://condriac.xyz/api/v1/fnb/ZARAUD

ZAR/BWP http://condriac.xyz/api/v1/fnb/ZARBWP

ZAR/CAD http://condriac.xyz/api/v1/fnb/ZARCAD

ZAR/CHF http://condriac.xyz/api/v1/fnb/ZARCHF

ZAR/CNY http://condriac.xyz/api/v1/fnb/ZARCNY

ZAR/DKK http://condriac.xyz/api/v1/fnb/ZARDKK

ZAR/GHS http://condriac.xyz/api/v1/fnb/ZARGHS

ZAR/HKD http://condriac.xyz/api/v1/fnb/ZARHKD

ZAR/INR http://condriac.xyz/api/v1/fnb/ZARINR

ZAR/JPY http://condriac.xyz/api/v1/fnb/ZARJPY

ZAR/KES http://condriac.xyz/api/v1/fnb/ZARKES

ZAR/LSL http://condriac.xyz/api/v1/fnb/ZARLSL

ZAR/MUR http://condriac.xyz/api/v1/fnb/ZARMUR

ZAR/MWK http://condriac.xyz/api/v1/fnb/ZARMWK

ZAR/MZN http://condriac.xyz/api/v1/fnb/ZARMZN

ZAR/NAD http://condriac.xyz/api/v1/fnb/ZARNAD

ZAR/NGN http://condriac.xyz/api/v1/fnb/ZARNGN

ZAR/NOK http://condriac.xyz/api/v1/fnb/ZARNOK

ZAR/NZD http://condriac.xyz/api/v1/fnb/ZARNZD

ZAR/PLN http://condriac.xyz/api/v1/fnb/ZARPLN

ZAR/SEK http://condriac.xyz/api/v1/fnb/ZARSEK

ZAR/SGD http://condriac.xyz/api/v1/fnb/ZARSGD

ZAR/SZL http://condriac.xyz/api/v1/fnb/ZARSZL

ZAR/THB http://condriac.xyz/api/v1/fnb/ZARTHB

ZAR/TZS http://condriac.xyz/api/v1/fnb/ZARTZS

ZAR/UGX http://condriac.xyz/api/v1/fnb/ZARUGX

ZAR/ZMW http://condriac.xyz/api/v1/fnb/ZARZMW

## Disclaimer 
Uses [cherrio.js](https://github.com/cheeriojs/cheerio) to crawl the FNB page and query those specific table cells. if FNB changes this page it will break
