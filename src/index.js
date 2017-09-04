var angular = require('angular');

var frontpage = require('./app/frontpage');
var card = require('./app/card');
require('angular-ui-router');
var moment = require('moment');
var routesConfig = require('./routes');
require('moment-precise-range-plugin');
require('lodash');

require('./index.scss');

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .component('app', frontpage)
  .component('card', card)
  .constant('moment', moment);
