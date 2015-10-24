var platziApp = angular.module('Platzi', []);
platziApp.controller('BaseCtrl', ['$scope', function ($scope) {

	// Ajax request to the 'emoji' model data
	// need to add $http as a dependency if using this method
    // $http.get('/emoji').then(function (res) {
    // 	$scope.emojis = res.data;
    // });

    // Socket.io connection
    io.socket.get('/emoji', function (data) {
    	$scope.emojis = data;
    	$scope.$apply();
    });

    io.socket.on('emoji', function(event) {
    	switch (event.verb)   {
    		case 'created':
    			$scope.emojis.push(event.data);
    			$scope.$apply();
			break;
    	}
    });

	// Fake data
    // $scope.emojis = [
	   //  {
	   //      id: 1,
	   //      text: ':-)'
	   //  },
	   //  {
	   //      id: 2,
	   //      text: ':-|'
	   //  },
	   //  {
	   //      id: 3,
	   //      text: ':-('
	   //  },
	   //  {
	   //      id: 4,
	   //      text: ':-/'
	   //  },
	   //  {
	   //      id: 5,
	   //      text: ':-S'
	   //  }
    // ];

}]);