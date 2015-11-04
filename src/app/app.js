angular.module('MyApp',['ngRoute'])


	.config(function($routeProvider){

		$routeProvider.when('/home',{
			template: '<div>Home partial Page</div>',
			controller: 'HomeController'
		})

		.when('/',{
			controller: 'PageController',
			template: '<div>Index Page</div>'
		})

		.otherwise({
			redirectTo:'/'
		});
	})


	.controller('HomeController', function($scope) {
	    $scope.user = {
	        name: null,
	        lastname: null,
	        username: null
	    };
	    
	    // generates the username whether both the name, or the lastname changes
	    // always in lowercase
	    $scope.$watch('user.name', function() {
	        updateUserName();
	    });
	    
	    $scope.$watch('user.lastname', function() {
	        updateUserName();
	    });
	    
	    var updateUserName = function() {
	        var name = $scope.user.name;
	        var lastname = $scope.user.lastname;

	        $scope.user.username = (name!==null)?name:'';
	        $scope.user.username += (lastname!==null)?lastname:'';
	        
	        $scope.user.username = $scope.user.username.toLowerCase();
	    }
	    
	})

	.factory('Book', function($http) {
	    var format = function(rawData) {
	        var book = null;
	        
	        if (typeof rawData!=='undefined') {
	            book = {
	                title: rawData.mainTitle,
	                author: rawData.author.name,
	                synopsis: rawData.info.synopsis
	            };
	        }
	        
	        return book;               
	    };
	   
	    var getBook = function(isbn, book) {
	        return $http.get('http://books.web.com/isbn/'+isbn);
	    }
	    
	    return {
	        format: format,
	        get: getBook
	    };
	    
	})




	.directive('button',function(){
		return{
			restrict:'E',
			compile:function(element,attributes){
				element.addClass('btn');
				if(attributes.type === 'submit'){
					element.addClass('btn-primary');
				}
				if(attributes.size){
					element.addClass('btn-'+attributes.size);
				}
			}
		};
	});





