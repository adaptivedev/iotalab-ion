angular.module('starter.services', ['ionic'])

.service('deviceService', function($rootScope) {
  
  var deviceId = 0;
  var myDevices = [];

  // SHOULD GET FROM SERVER
  var devices = [
    'Arduino', 
    'Raspberry Pi 2', 
    'Edison'
  ];
  
  // SHOULD KNOW WHICH DEVICES CAN CONNECT TO AND WHEN
  var comps = [
    'WiFi', 
    'BlueTooth', 
    'GPS',
    'Camera',
    'Motion',
    'Distance (Sonar)',
    'Distance (Lidar)',
    'Temperatur',
    'Touchpad',
  ];

  var self = this;

  this.getDevices = function() {
    return devices;
  }

  this.addDevice = function(deviceIndex) {
    var d = {
      id: deviceId,
      type:devices[deviceIndex],
      comps: []
    };
    myDevices.unshift(d);
    //alert('myDevices = '+JSON.stringify(myDevices));
    deviceId++;
  }
  this.getMyDevices = function() {
    return myDevices;
  }
  this.rmMyDevice = function(myDeviceIndex) {
    myDevices.splice(myDeviceIndex, 1);
  }
  
  this.getComps = function() {
    return comps;
  }
  this.addMyComp = function(compIndex, thePin, deviceIndex) {
    var c = {
      id: compIndex,
      pin: thePin,
      type:comps[compIndex]
    };
    //TODO: COMP SHOULD BE PER DEVICE
    myDevices[deviceIndex].comps.push(c);
    //alert('myDevices = '+JSON.stringify(myDevices));
  }
  
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
