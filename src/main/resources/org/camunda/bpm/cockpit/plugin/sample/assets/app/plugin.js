ngDefine('cockpit.plugin.sample-plugin', function(module) {

  var DashboardController = function($scope, $http, Uri) {

    $http.get(Uri.appUri("plugin://sample-plugin/default/process-instance"))
      .success(function(data) {
        $scope.processInstanceCounts = data;
      });
  };

  DashboardController.$inject = ["$scope", "$http", "Uri"];


  var PluginConfiguration = function PluginConfiguration(PluginsProvider) {

    PluginsProvider.registerDefaultPlugin('cockpit.dashboard', {
      id: 'process-definitions',
      label: 'Deployed Processes',
      url: 'plugin://sample-plugin/static/app/dashboard.html',
      controller: DashboardController
    });
  };

  PluginConfiguration.$inject = ['PluginsProvider'];


  module.config(PluginConfiguration);

  return module;
});
