//my required files (npm)
var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	//my username
	user: "root",

	//my password
	password: "AMinorC#bC2013",
	database: "bamazon"
});

//the main control of the program
connection.connect(function(err) {
	if (err) throw err;
	printDatabase();
	processCustomerOrders();
	connection.end();
});


//function to output information from the database to the screen
function printDatabase() {
	connection.query("SELECT * FROM products", function(err, res) {
		if (err) throw err;
		console.log("The following is a list of all the products for sale and their prices.");
		console.log("_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-");
		//connect to the database and pull certain data on each record and output it to the screen
    for (var i = 0; i<res.length; i++){
			console.log(res[i].item_id + " | " + res[i].product_name + " | " + "$" + res[i].price);
			console.log("------");
		}
	});
}


//function to process the customer orders
function processCustomerOrders() {
  //link to the database in mySQL
	connection.query("SELECT * FROM products", function(err, res) {
	  if (err) throw err;
  //inquirer used to prompt the user for information on the customer order
  	inquirer
    	.prompt([
      		{
       			name: "item",
        		type: "input",
        		message: "What is the ID number of the product you would like to purchase?",
        		validate: function(str){
					var regEx = new RegExp("^[0-9\s]{1,2}");
					return regEx.test(str);
					}
      		},
      		{
        		name: "quantity",
        		type: "input",
        		message: "How many units of this product would you like to purchase?",
        		validate: function(str){
					var regEx = new RegExp("^[0-9\s]{1,8}");
					return regEx.test(str);
					}
      		}
    	])
    	.then(function(answer) {   //inquirer gathers the user inputs
    		
        //checking to see if there is enough inventory for the customer's request
        if (res[(answer.item) - 1].stock_quantity < parseInt(answer.quantity)){
    			console.log("Insufficient quantity!");
    		}

        //calculating the purchase price and the new inventory quantity after the purchase
    		if (res[(answer.item) -1].stock_quantity >= parseInt(answer.quantity)) {
    			var newStockQuantity = res[(answer.item) - 1].stock_quantity - answer.quantity;
    			var totalCostOfPurchase = answer.quantity * res[(answer.item) - 1].price;
    			
          //updating the new inventory to mySQL database
    			connection.query(
            	"UPDATE products SET ? WHERE ?",
            		[
              			{
                			stock_quantity: newStockQuantity
              			},
              			{
                			item_id: res[(answer.item) - 1].item_id
              			}
            		],
            		function(error) {
                    //summary output to the screen for the customer
              			console.log("Your order has processed successfully!");
              			console.log("The totat cost of your purchase = $" + totalCostOfPurchase);

            		}
          	);
        	}
    	});
    });
}

    