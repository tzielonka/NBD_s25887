printjson(db.getCollection("people").aggregate([
{
$project: {"BMI":
	{$divide: [{$toDecimal:"$weight"},{$pow:[{$divide:[{$toDecimal:"$height"},100]},2]}]},
	"nationality":1}
},
{
$group:{_id: "$nationality", average_BMI:{$avg: "$BMI"}, maximum_BMI:{$max: "$BMI"}, minimum_BMI:{$min: "$BMI"}}
}
]).toArray())
