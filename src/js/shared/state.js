/*jshint -W079 */

/**
 * Store references to critically important global functions that may be
 * overridden on certain web pages.
 */
var _window = window,
    _document = _window.document,
    _navigator = _window.navigator,
    _setTimeout = _window.setTimeout,
    _encodeURIComponent = _window.encodeURIComponent,
    _ActiveXObject = _window.ActiveXObject,
    _Error = _window.Error,
    _parseInt = _window.parseInt,
    _parseFloat = _window.parseFloat,
    _isNaN = _window.isNaN,
    _round = _window.Math.round,
    _now = _window.Date.now,
    _keys = _window.Object.keys,
    _defineProperty = _window.Object.defineProperty,
    _hasOwn = _window.Object.prototype.hasOwnProperty,
    _slice = _window.Array.prototype.slice,
    _canUseMouseEventCtor = (function(MouseEvent) {
      if (typeof MouseEvent !== "undefined" && MouseEvent) {
        try {
          var evt = new MouseEvent("click", { bubbles: true, cancelable: true });
          return evt ? true : false;
        }
        catch (e) {
          // Do nothing
        }
      }
      return false;
    })(_window.MouseEvent),
    _unwrap = (function() {
      var unwrapper = function(el) {
        return el;
      };
      // For Polymer
      if (typeof _window.wrap === "function" && typeof _window.unwrap === "function") {
        var el, unwrappedEl;
        try {
          el = _document.createElement("div");
          unwrappedEl = _window.unwrap(el);
          if (el.nodeType === 1 && unwrappedEl && unwrappedEl.nodeType === 1) {
            unwrapper = _window.unwrap;
          }
        }
        catch (e) {
          // Some unreliable `window.unwrap` function is exposed
        }
        el = unwrappedEl = null;
      }
      return unwrapper;
    })();
