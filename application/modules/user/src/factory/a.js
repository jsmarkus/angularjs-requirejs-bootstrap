define(function(require){
  var module = require('modules/user/user');

  module.service('user.factory.a', [function(){


      var a = 'd';

      this.get = function(){
        return a;
      };

      this.set = function(b){
        a = b;
      }

    }]
  );
});