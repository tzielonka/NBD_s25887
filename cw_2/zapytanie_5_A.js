printjson(db.getCollection("people").aggregate([
{
$match: {sex:"Female", nationality:"Poland"} 
},
{
$unwind: {path: "$credit"}
},
{
$group:{_id: "$credit.currency", sum:{$sum:{$toDecimal: "$credit.balance"}}, average:{$avg:{$toDecimal:"$credit.balance"}}
}}
]).toArray())
