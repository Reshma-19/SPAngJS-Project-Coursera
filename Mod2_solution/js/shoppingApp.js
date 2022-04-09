(function(){
'use strict';
//buy items

var app = angular.module('ShoppingListCheckOff',[]);
app.controller('ToBuyController',ToBuyController);
app.controller('AlreadyBoughtController',AlreadyBoughtController);
app.service('ShoppingListCheckOffService',ShoppingListCheckOffService);
                                        <!--controllers-->

                                        <!--Controller 1-->
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
	var buyList = this;
	buyList.items = ShoppingListCheckOffService.getbuyItems();
	buyList.buyItem = function(index){
	  ShoppingListCheckOffService.buyItem(index);
	};
	//checking buy list empty or not
	buyList.isEmpty = function(){
		return buyList.items.length == 0;
	};
}

                                        <!--Controller 2-->
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
	 var alreadyBoughtList = this;

	 alreadyBoughtList.items = ShoppingListCheckOffService.getboughtItems();

   //checking boughtlist empty
	 alreadyBoughtList.isEmpty = function(){
		 return alreadyBoughtList.items.length == 0;
	 };
}
																		<!--Service-->
function ShoppingListCheckOffService() {
	var service = this;

//list of items to buy
	var shoppingList = [
		{ name : "Apple", quantity: "2 Packets" },
		{ name : "Donut",quantity: "20" },
		{ name : "Cookie",quantity: "30" },
		{ name : "Milk Bread",quantity: "2"},
		{ name : "Melon",quantity: "5"}
	];

	//List of bought items
 var bought=[];

 	//remove items from buy list into bought list
 	service.buyItem = function(indexNo){
		var item = shoppingList[indexNo];
		bought.push(item);
		shoppingList.splice(indexNo,1);
 	};

	//display bought items
	service.getboughtItems = function() {
		return bought;
	};
	//display items in list to buy
	service.getbuyItems = function() {
		return shoppingList;
	};
}
})();
