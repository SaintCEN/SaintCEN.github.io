/* Shared resources live for the document; page effects live for one route. */
(function () {
    'use strict';
    function createScope() {
        var controller = new AbortController(), cleanup = [];
        return {
            get active() { return !controller.signal.aborted; },
            listen: function (target, name, callback, options) {
                target.addEventListener(name, callback, Object.assign({}, options, { signal: controller.signal }));
            },
            cleanup: function (callback) { cleanup.push(callback); },
            dispose: function () {
                controller.abort();
                cleanup.splice(0).reverse().forEach(function (callback) { try { callback(); } catch (error) { console.error(error); } });
            }
        };
    }
    window.MinosPage = { createScope: createScope, scope: createScope() };
})();
