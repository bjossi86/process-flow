module.exports = {
  template: require('./card.html'),
  controller: function () {
    this.hello = 'Hello World!';
    this.$onInit = function () {
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
