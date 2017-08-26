module.exports = {
  template: require('./frontpage.html'),
  controller: ['$http', function ($http) {
    var vm = this;
    $http.get('assets/cards.json').then(function (response) {
      vm.cards = response.data;
    });
  }]
};
