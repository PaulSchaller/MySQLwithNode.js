# MySQLwithNode.js


*This program runs an amazon storefront through Node.js with mySQL being used on the back-end to manage a database.*

This is a very interactive program that allows a user to see what products are available and the price of each of those products.  After seeing the listing, the user can make an order for one of the products.  If the quantity ordered is available in inventory, the order will be processed.  The user will be informed of the total cost of the purchase.  If the quantity ordered is too much, the user will be informed of insufficient inventory.  

*The following three screenshots show the database I constructed in mySQL.  In the screenshots, you can see a table I designed and ten entries I made to populate the table.*   

![screenshot 1 mysql database](https://user-images.githubusercontent.com/30198872/35378263-2fef00ac-0180-11e8-9019-58f18b01e16f.png)

![screenshot 2 mysql database](https://user-images.githubusercontent.com/30198872/35378269-3263dde4-0180-11e8-8405-115750a07f38.png)

![screenshot 3 mysql database](https://user-images.githubusercontent.com/30198872/35378271-33f6b19a-0180-11e8-8a65-09e913e0170a.png)




*The nexxt screenshot shows the listing of the products that the user will see on his screen.  After seeing the listing on the screen, the user is prompted to select a product to purchase.*

![screenshot 4 node js](https://user-images.githubusercontent.com/30198872/35378273-35a06644-0180-11e8-99d0-aa9040bd1286.png)




*After entering a product ID number, the user is prompted to select a quantity of units of this product to purchase.*

![screenshot 5 node js](https://user-images.githubusercontent.com/30198872/35378277-378aca30-0180-11e8-9d6c-76a55fcdc49c.png)



*The order is then processed and the user is informed of the total cost of the purchase.  The database in mySQL is updated to show the reduction in the inventory due to the purchase.*

![screenshot 6 node js](https://user-images.githubusercontent.com/30198872/35378279-398c1fb4-0180-11e8-9709-b51c5d05ae62.png)



*The final screenshot shows the results of the user requesting an order amount of a product that exceeds the inventory level.*
![screenshot 7 node js](https://user-images.githubusercontent.com/30198872/35378281-3b7333f8-0180-11e8-98ba-872a15a80a28.png)

______________________________________________________________________


To run the program, the user will need the npm packages inquirer and mysql installed.  The user starts the program on the Node.js command line with the entry *node bamazonCustomer.js* .




