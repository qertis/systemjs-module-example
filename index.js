(function () {
  'use strict';

  System.config({
    map: {
      traceur: './vendors/traceur.min.js'
    }
  });
  System.import('./js/main.js');

}());