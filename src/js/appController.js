/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your application specific code will go here
 */
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
