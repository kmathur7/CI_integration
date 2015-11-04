describe('route test directive',function(){
	
	beforeEach(module('MyApp'));
	



	it('when path is /home, the route controller should be mapped to HomeController', inject(function($rootScope, $location, $route){
		$location.path('/home');
		$rootScope.$apply();
		expect($route.current.controller).toBe('HomeController');
	}));

	it('when path is /, the route controller should be mapped to PageController', inject(function($rootScope, $location, $route){
		$location.path('/');
		$rootScope.$apply();
		expect($route.current.controller).toBe('PageController');
	}));

});