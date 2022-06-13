printjson(db.getCollection("people").find(
	{"nationality": "Germany", "sex": "Male"}
).toArray())
