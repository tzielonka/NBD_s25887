printjson(db.people.insertOne(
{
"sex": "Male",
"first_name": "Tomasz",
"last_name": "Zielonka",
"job": "Protocol Engineer",
"email": "s25887@pjwstk.edu.pl", 
"location": {
        "city": "Warsaw",
        "address": {
                "streetname": "Marszalkowska",
                "streetnumber": "123"
                }
        },
"description": "Przykladowy opis",
"height": "180.5",
"weight": "70.0",
"birth_date": "1996-10-01T12:14:33Z",
"nationality": "Poland",
"credit": 
	[{
	"type": "VISA",
	"number": "7751436598634102",
	"currency": "PLN",
	"balance": "14889.32"
	},
	{
	"type": "AmEx",
	"number": "8881236690001255",
	"currency": "USD",
	"balance": "10200.10"	
	}]
}))
