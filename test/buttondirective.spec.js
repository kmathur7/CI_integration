describe('button directive test',function(){
	var $compile,$rootScope;

	beforeEach(module('MyApp'));
	beforeEach(inject(function(_$compile_, _$rootScope_){
		$compile=_$compile_;
		$rootScope=_$rootScope_;
	}));



	it('adds a "btn" class to the button element', function(){
		var element = $compile('<button></button>')($rootScope);
		expect(element.hasClass('btn')).toBe(true);
	});

	it('adds size classes correctly',function(){
		var element = $compile('<button size="large"></button>')($rootScope);
		expect(element.hasClass('btn-large')).toBe(true);
	});

	it('Adds primary class to submit buttons',function(){
		var element = $compile('<button type="submit"></button>')($rootScope);
		expect(element.hasClass('btn-primary')).toBe(true);
	});
});