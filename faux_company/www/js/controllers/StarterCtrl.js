'use strict';

(function () {
	'use strict';

	angular.module('app').controller('StarterCtrl', StarterCtrl);

	StarterCtrl.$inject = [];
	function StarterCtrl() {
		var vm = this;
		vm.title = 'StarterCtrl';

		activate();

		////////////////

		function activate() {
			console.log("yoo");
		}
	}
})();