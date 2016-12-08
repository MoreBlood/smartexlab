angular.module("workerlistapp", ['ngSanitize'])
    .controller("workerController", function ($rootScope, $http, $location)
    {
     'use strict';
      $http.get('http://jsonplaceholder.typicode.com/users').then(function(responce)//get JSON file
        {
            $rootScope.Data = responce.data;
            currentPos = $location.url();
            if (currentPos != "/" && currentPos != ""){
                $rootScope.ShowCurrent($rootScope.Data[$rootScope.FindIndex($rootScope.Data, "username", currentPos.replace("/", ""))]);
            }
        },
        function(responce) //Bad responce
        {
            console.log("Cant' reach data");
        });

        $rootScope.FindIndex = function (object, key, value) //function for search by a key we can also navigate in Data using id-1, but id's can be different ex. 1 2 33 4 6 etc.
        {
            
            for (var i in object)
            {
                if (object[i][key] == value)
                return i;
            }
            return null;
        }

        $rootScope.ShowCurrent = function(element)
        {
             $rootScope.$broadcast('showWorker', element);
        }
});

