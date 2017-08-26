module.exports = {
  template: require('./card.html'),
  controller: function () {
    var vm = this;
    vm.doDone = function () {
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
