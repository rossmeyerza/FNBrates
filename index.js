const app = require("express")();
const cheerio = require("cheerio");
const https = require("https");

	var data;

	var info = [];


function getRates(response, bank, denom) {

	console.log(bank, denom);


	let url;
	let row;

	switch (bank.toLowerCase()) {
		case "fnb":
			url = 'https://www.fnb.co.za/Controller?nav=rates.forex.list.ForexRatesList';
			switch (denom.toLowerCase()) {
			 	case 'zargbp':
			 		row = 3;
			 		break;
			 	case 'zareur':
			 		row = 2;
			 		break;
			 	case 'zarusd':
			 		row = 4;
			 		break;
			 	case 'zaraed':
			 		row = 9;
			 		break;
			 }
			break;
		default:
			url = 'https://www.fnb.co.za/Controller?nav=rates.forex.list.ForexRatesList';

	}

	https.get(url, (res) => {

		console.log(`requesting url: ${url}`);

		res.setEncoding('utf8');

		res.on('data', (d) => {
		    data += d;
		});

		res.on('end', ()=>{
			const $ = cheerio.load(data);

			$(`table:first-of-type > tr:nth-child(${row}) >td`)

			.each(function(i,elem){
				info[i] = $(this).text().trim().replace(/\r?\n|\r|\t+/g, "");
			});

			let currency = {
				description: info[0],
				code: info[1],
				bank_selling_rate: info[2],
				bank_buying_rate: info[3],
				bank_buying_notes: info[4]
			};

			response.json(currency);

		});

	}).on('error', (e) => {
		console.error(e);
	});

}


app.use((req, res, next) =>{
	console.log(req.originalUrl);
	next();
});


app.get('/api/v1/:bank/:denom', (req, res) => {
	getRates(res, req.params.bank, req.params.denom);
});

app.get('/mock/zargbp', (req, res) =>{
	res.json({
		description: 'BRITISH STERLING',
		code: 'GBP',
		bank_selling_rate: 17.756,
		bank_buying_rate: 17.234,
		bank_buying_notes: 17.173
	});
});

app.use(function(req,res){
	res.send('Nothing here');
});

app.listen(3030, ()=>{
	console.log('server started');
});
