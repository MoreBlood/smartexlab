function workerDetailController($scope, $location) 
{
        var window = angular.element(document.querySelector(".modal_back"));      

        $scope.$on('showWorker', function(event, element)
        {
            $scope.Title = element.name;
            window.addClass("visible-modal");            
            $scope.workerMore = element;               
            $location.url(element.username); // set url according to the open modal window
            document.title = "Worker - " + element.name;
        });

        $scope.hide = function ()
        {            
            window.removeClass("visible-modal");
            $location.url(""); // clear url if closed
            document.title = "Workers";
        };

}

angular.module('workerlistapp').component('workerdetail', 
{

    templateUrl: 'modal_window.html',
    controller: workerDetailController
});

angular.module('workerlistapp').directive('workerinfo', function() {

  return {

    templateUrl: 'workerinfo.html'
  }
});
