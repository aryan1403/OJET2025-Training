require(['ojs/ojbootstrap', 'knockout', './appController', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojtoolbar', 'ojs/ojmenu'],
  function (Bootstrap, ko, app) { // this callback gets executed when all required modules are loaded
    Bootstrap.whenDocumentReady().then(
      function() {
        function init() {
          ko.applyBindings(app, document.getElementById('globalBody'));
        }
        // If running in a hybrid (e.g. Cordova) environment, we need to wait for the deviceready
        // event before executing any code that might interact with Cordova APIs or plugins.
        if (document.body.classList.contains('oj-hybrid')) {
          document.addEventListener("deviceready", init);
        } else {
          init();
        }
      }
    );
  }
);
