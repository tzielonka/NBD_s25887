printjson(db.getCollection("people").aggregate([
{
$match: {} 
},
{
$unwind: {path: "$credit"}
},
{
$group:{_id: "$credit.currency", sum:{$sum:{$toDecimal: "$credit.balance"}}
}}
]).toArray())
