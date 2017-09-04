module.exports = {
  template: require('./card.html'),
  controller: ['moment', function (moment) {
    var vm = this;
    function startTimer() {
      vm.started = moment();
    }

    function stopTimer() {
      vm.flipped = false;
      vm.stopped = moment();
      vm.timespan = moment.preciseDiff(vm.started, vm.stopped);
    }

    vm.startStop = function ($event) {
      $event.stopPropagation();
      vm.isStarted = !vm.isStarted;
      if (vm.isStarted) {
        startTimer();
      } else {
        stopTimer($event);
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
    isStarted: '<'
  }
};
