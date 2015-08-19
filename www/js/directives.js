angular.module('starter.directives', []);

angular.module('starter.directives')

.directive('ilAddDevices', function(deviceService) {
    return {
      restrict: 'EA',
      templateUrl: 'templates/il-add-devices.tpl.html',
      controller: function($scope) {
        $scope.devices = deviceService.getDevices();
        $scope.addDevice = function(deviceIndex){
          deviceService.addDevice(deviceIndex);
        };
      }
    }
  })
  .directive('ilDevice', function(deviceService) {
    return {
      restrict: 'EA',
      templateUrl: 'templates/il-device.tpl.html',
      controller: function($scope) {
        $scope.comps = deviceService.getComps();
        $scope.addComp = function(compIndex, thePin) {
          deviceService.addComp(compIndex, thePin, myDeviceIndex);
        };
      }
    }
  })
  .directive('ilDevices', function(deviceService) {
    return {
      restrict: 'EA',
      templateUrl: 'templates/il-devices.tpl.html',
      controller: function($scope) {
        $scope.myDevices = deviceService.getMyDevices();
        $scope.rmDevice = function(myDeviceIndex){
          deviceService.rmMyDevice(myDeviceIndex);
        };
      }
    }
  });
