/**
*  Module
*
* Description
*/
angular
	   .module('Appku')
	   .filter('AppkuFilter',function () {

	   	return function(listing,priceInfo){

	   		var filtered =[];
	   		var min = priceInfo.min;
	   		var max = priceInfo.max;

	   		angular.forEach(listing,function(listing) {
	   			if(listing.harga >=min && listing.harga<=max){
	   				filtered.push(listing);
	   			}

	   		});
	   		return filtered

	   	}
	   	
	   });

		
