printjson(db.getCollection("people").aggregate([
{
$match: {} 
},
{
$group:{_id: "$job"}
}
]).toArray())
