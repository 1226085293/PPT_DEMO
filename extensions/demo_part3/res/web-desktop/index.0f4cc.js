"use strict";
System.register(["./application.2ca38.js"], function (_export, _context) {
    "use strict";
    var Application, application;
    function topLevelImport(url) {
        return System["import"](url);
    }
    return {
        setters: [function (_application2ca38Js) {
                Application = _application2ca38Js.Application;
            }],
        execute: function () {
            application = new Application();
            topLevelImport('cc').then(function (engine) {
                return application.init(engine);
            }).then(function () {
                return application.start();
            })["catch"](function (err) {
                console.error(err);
            });
        }
    };
});
