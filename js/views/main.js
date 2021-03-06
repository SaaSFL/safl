var msfldash = angular.module('msfldash', ['ngRoute']);

msfldash.config(function ($routeProvider){
    $routeProvider.
    when('/', {
        templateUrl: 'modules/dashboard.html',
        controller: 'csfldash'
    }).
    when('/dsticketaudit', {
        templateUrl: 'modules/tdsaudit.html',
        controller: 'cdsta'
    }).
	when('/itmticketaudit', {
        templateUrl: 'modules/titmaudit.html',
        controller: 'citta'
    }).
	when('/edticketaudit', {
        templateUrl: 'modules/tedaudit.html',
        controller: 'cedta'
    }).
    otherwise({
        redirectTo: '/'
    });

});

msfldash.controller('csfldash', function ($scope) {

});

msfldash.controller('cdsta', function ($scope, $http) {
    $scope.dsta = {};
    $scope.dstadata ={};
    $scope.submit = function() {
        this.dstadata = this.dsta;
        $scope.dsta = {};
       // console.log(this.dstadata.agentname);
        var request = $http({
            method: "post",
            url: "http://localhost:8888/safl/serverpages/add.php",
            data: this.dstadata,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })

        .then(function (data) {
                console.log(data);
            });
    };
});

msfldash.controller('citta', function ($scope, $http) {
    $scope.itta = {};
    $scope.ittadata ={};
    $scope.submit = function() {
        this.ittadata = this.itta;
        $scope.itta = {};
       // console.log(this.dstadata.agentname);
        var request = $http({
            method: "post",
            url: "http://localhost:8888/safl/serverpages/add.php",
            data: this.ittadata,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })

        .then(function (data) {
                console.log(data);
            });
    };
});

msfldash.controller('cedta', function ($scope, $http) {
    $scope.edta = {};
    $scope.edtadata ={};
    $scope.submit = function() {
        this.edtadata = this.edta;
        $scope.edta = {};
       // console.log(this.dstadata.agentname);
        var request = $http({
            method: "post",
            url: "http://localhost:8888/safl/serverpages/add.php",
            data: this.edtadata,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })

        .then(function (data) {
                console.log(data);
            });
    };
});
