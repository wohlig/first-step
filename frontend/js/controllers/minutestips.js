myApp.controller('MinutestipsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService.getHTML("content/minutestips.html");
    TemplateService.title = "Minutestips"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.formSubmitted = false;
    $scope.changeURL = function (id) {
        console.log(id);
        $location.path("" + id);
    };
    $scope.submitForm = function (data) {
        console.log(data);
        $scope.formSubmitted = true;
    };
    // $scope.minuteEpisode = [{
    //     imageUrl: "-PCujwv9xLI",
    //     videoUrl: "-PCujwv9xLI",
    //     episodeno: "Tip No. 1",
    //     searchName: "MUTUAL FUNDS",
    // },{
    //     imageUrl: "-PCujwv9xLI",
    //     videoUrl: "-PCujwv9xLI",
    //     episodeno: "Tip No. 1",
    //     searchName: "MUTUAL FUNDS",
    // }];
})