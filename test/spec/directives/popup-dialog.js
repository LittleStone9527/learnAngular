'use strict';

describe('Directive: popUpDialog', function () {

  // load the directive's module
  beforeEach(module('learnAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pop-up-dialog></pop-up-dialog>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the popUpDialog directive');
  }));
});
