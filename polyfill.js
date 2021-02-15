require('core-js/features/promise');
require('core-js/es/object/assign');
require('core-js/es/array/includes');

const polyfill = {
  includes: function(item){
    return item.indexOf('2,1') > -1;
  },
}

module.exports = polyfill;
