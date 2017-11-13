/**
* A Module
*
* Description
*/
angular.module('Appku')
	.factory('AppkuFactory', function($http){

		// var AppData=[
		// 	{
		// 		"judul":"one pice",
		// 		"mangaka":"Eichiro Oda"
		// 	},
		// 	{
		// 		"judul":"naruto",
		// 		"mangaka":"Mashashi Kisimoto"
		// 	},
		// 	{
		// 		"judul":"Ippo",
		// 		"mangaka":"george morikawa"
		// 	},
		// 	{
		// 		"judul":"bleach",
		// 		"mangaka":"tite kubo"
		// 	},
		// 	{
		// 		"judul":"naruto",
		// 		"mangaka":"Mashashi Kisimoto"
		// 	}
		// ];

		function getAppData(){ 
			return AppData;	
			
		};

		return{
			getAppData: getAppData
		}
	});