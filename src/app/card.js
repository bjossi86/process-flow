module.exports = {
  template: require('./card.html'),
  controller: function () {
    var vm = this;
    vm.doDone = function () {
    //   $event.stopPropagation();
    //   return false;
    };
  },
  bindings: {
    type: '<',
    description: '<',
    timespan: '<',
    optional: '<',
    index: '<',
    details: '<'
  }
};
