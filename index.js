function solve(transaction){
    var totalcost = {};
    for(var i=0;i<transaction.length;i++){
        var t = transaction[i];
        if(totalcost[t.category]){
            totalcost[t.category] = totalcost[t.category] + t.price
        }else{
            totalcost[t.category] = t.price
        }
    }
    console.log(totalcost)
}
var transaction = [
    {
        itemname: "pepsi",
        category : "Drink",
        price : 20,
        timestamp: "12-June-2023"
    },
    {
        itemname: "mirinda",
        category : "Drink",
        price : 25,
        timestamp: "23-June-2023"
    },
    {
        itemname: "samosa",
        category : "food",
        price :     10,
        timestamp: "28-June-2023"
    }
]


solve(transaction);
























