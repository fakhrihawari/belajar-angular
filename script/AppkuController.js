/**
*  Module
*Model Lama
* Description
*/

angular.module('Appku')
	.controller('AppkuController', function($scope,$http,AppkuFactory){
		
		 $scope.comic;


		// AppkuFactory.getAppData().then(function(data){

		// 	$scope.comic= data;

		// }).error(function(){
		// 	console.log('error');
		// });


		
		 // $scope.comic = AppkuFactory.getAppData();

		// karena .sucees sudah tidak ada maka menggunakan ini

		$scope.priceInfo = {
			min:0,
			max:100
		}

		$scope.newListing={};
		$scope.addComic = function (newListing){
			$scope.comic.push(newListing);
			$scope.newListing={};

		}

		$scope.editComic = function(manga){

			$scope.editManga= true;
			$scope.existListing =manga;

		}

		$scope.saveEditComic =function(){

			$scope.existListing ={};
			$scope.editManga=false;

		}

		$scope.deleteEditComic = function(listing){
			var index = $scope.comic.indexOf(listing);
			$scope.comic.splice(index,1);
			$scope.existListing ={};
			$scope.editManga=false;

		}

		

		$http.get("data/data.json").then(function(response){
				$scope.comic=response.data;


		},function(response){

			$scope.comic="wrong went something";

		});

		$scope.sapa = function(){
			console.log("halo");
		};



		

	});

