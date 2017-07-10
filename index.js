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
			 		table = 1;
			 		break;
			 	case 'zareur':
			 		row = 2;
			 		table = 1;
			 		break;
			 	case 'zarusd':
			 		row = 4;
			 		table = 1;
			 		break;
			 	case 'zaraed':
			 		row = 2;
			 		table = 2;
			 		break;
			 	case 'zaraud':
			 		row = 3;
			 		table = 2;
			 		break;
			 	case 'zarbwp':
			 		row = 4;
			 		table = 2;
			 		break;
			 	case 'zarcad':
			 		row = 5;
			 		table = 2;
			 		break;
			 	case 'zarchf':
			 		row = 6;
			 		table = 2;
			 		break;
			 	case 'zarcny':
			 		row = 7;
			 		table = 2;
			 		break;
			 	case 'zardkk':
			 		row = 8;
			 		table = 2;
			 		break;
			 	case 'zarghs':
			 		row = 9;
			 		table = 2;
			 		break;
			 	case 'zarhkd':
			 		row = 10;
			 		table = 2;
			 		break;
			 	case 'zarinr':
			 		row = 11;
			 		table = 2;
			 		break;
			 	case 'zarjpy':
			 		row = 12;
			 		table = 2;
			 		break;
			 	case 'zarkes':
			 		row = 13;
			 		table = 2;
			 		break;
			 	case 'zarlsl':
			 		row = 14;
			 		table = 2;
			 		break;
			 	case 'zarmur':
			 		row = 15;
			 		table = 2;
			 		break;
			 	case 'zarmwk':
			 		row = 16;
			 		table = 2;
			 		break;
			 	case 'zarmzn':
			 		row = 17;
			 		table = 2;
			 		break;
			 	case 'zarnad':
			 		row = 18;
			 		table = 2;
			 		break;
			 	case 'zarngn':
			 		row = 19;
			 		table = 2;
			 		break;
			 	case 'zarnok':
			 		row = 20;
			 		table = 2;
			 		break;
			 	case 'zarnzd':
			 		row = 21;
			 		table = 2;
			 		break;
			 	case 'zarpln':
			 		row = 22;
			 		table = 2;
			 		break;
			 	case 'zarsek':
			 		row = 23;
			 		table = 2;
			 		break;
			 	case 'zarsgd':
			 		row = 24;
			 		table = 2;
			 		break;
			 	case 'zarszl':
			 		row = 25;
			 		table = 2;
			 		break;
			 	case 'zarthb':
			 		row = 26;
			 		table = 2;
			 		break;
			 	case 'zartzs':
			 		row = 27;
			 		table = 2;
			 		break;
			 	case 'zarugx':
			 		row = 28;
			 		table = 2;
			 		break;
			 	case 'zarzmw':
			 		row = 29;
			 		table = 2;
			 		break;
			 	default:
			 		row = 4;
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

			$(`table:nth-of-type(${table}) > tr:nth-child(${row}) >td`)

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
	res.send('API docs coming. See <a href="https://github.com/rossmeyerza/FNBrates">https://github.com/rossmeyerza/FNBrates</a>');
});

app.listen(3030, ()=>{
	console.log('server started');
});
