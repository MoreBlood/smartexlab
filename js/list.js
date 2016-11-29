var workerlistapp = angular.module("workerlistapp", []);
    workerlistapp.controller("workerController", function ($scope, $http, $location) {

    	$http.get('http://jsonplaceholder.typicode.com/users').then(function(responce){ //get JSON file

            $scope.Data = responce.data;
            currentPos = $location.url().replace("/", "");            
            if (!(currentPos == ""))  $scope.ShowCurrent($scope.Data[$scope.FindIndex($scope.Data, "id", currentPos)]);                  
        });

        $scope.FindIndex = function (object, key, value) { //function for search by a key

            for (var i = 0; i < object.length; i++) {             
                if (object[i][key] == value)
                return i;                
            }
            return null;
        }

        var pop = angular.element(document.querySelector(".modal_back")),
        pop_text = angular.element(document.querySelector(".modal-body")),
        pop_title = angular.element(document.querySelector(".modal-title"));
      
        $scope.ShowCurrent = function (element){            
            
            pop.css("display", "block");
            pop_title.html(element.name);
            pop_text.html( "<b>Website: </b>" + '<a href ="http://'+ element.website + '">' + element.website + "</a>" + "<br>"+
                            "<b>Phone: </b>" + element.phone + "<br>"+
                            "<b>Company: </b>" +  element.company.name + "<br>"+
                            "<i>" + element.company.catchPhrase + "<br>"+
                            element.company.bs + "</i><br>"+ "<b>Address:</b> <br> <i>"+
                            element.address.street + " "+ element.address.suite + "<br>"+
                            element.address.city + " " + element.address.zipcode + "</i>"
                            );
            $location.url(element.id); // set url according to the open modal window
        }

        $scope.hide = function (){
            
            pop.css("display", "none");
            $location.url(""); // clear url if closed
        };
});
