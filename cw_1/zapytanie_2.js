printjson(db.getCollection("people").findOne(
	{"nationality": "China", "sex": "Female"}
))
