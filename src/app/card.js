module.exports = {
  template: require('./card.html'),
  controller: ['moment', function (moment) {
    var vm = this;
    function _startTimer() {
      vm.started = moment();
    }

    function _stopTimer() {
      vm.flipped = false;
      vm.stopped = moment();
      vm.timespan = moment.preciseDiff(vm.started, vm.stopped);
    }

    vm.startStop = function (evt) {
      if (evt) {
        evt.stopPropagation();
      }
      vm.isStarted = !vm.isStarted;
      if (vm.isStarted) {
        _startTimer();
      } else {
        _stopTimer(evt);
      }
    };
  }],
  bindings: {
    type: '<',
    description: '<',
    timespan: '<',
    optional: '<',
    index: '<',
    details: '<',
    started: '<',
    stopped: '<',
    flipped: '<',
    isStarted: '<',
    link: '<'
  }
};
