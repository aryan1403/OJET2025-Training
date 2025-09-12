define(['knockout', 'ojs/ojmodule-element-utils', 'ojs/ojknockout'],
  function(ko, moduleUtils) {
     function ControllerViewModel() {
      this.moduleConfig = ko.observable();

      var config = moduleUtils.createConfig({
        viewPath: 'views/myComp.html',
        viewModelPath: 'viewModels/myComp'
      });
      this.moduleConfig(config);
    }
     return new ControllerViewModel();
  }
);
