"use strict";var e=require("react");function n(e){var n=Object.create(null);return e&&Object.keys(e).forEach((function(l){if("default"!==l){var t=Object.getOwnPropertyDescriptor(e,l);Object.defineProperty(n,l,t.get?t:{enumerable:!0,get:function(){return e[l]}})}})),n.default=e,Object.freeze(n)}var l=n(e),t=function(){return t=Object.assign||function(e){for(var n,l=1,t=arguments.length;l<t;l++)for(var o in n=arguments[l])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},t.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;exports.Cell=function(e){var n,o=l.useState("system_col-3"),i=o[0],r=o[1];l.useEffect((function(){var n,l;(null===(n=null==e?void 0:e.gui)||void 0===n?void 0:n.size)&&r("system_col-"+(null===(l=null==e?void 0:e.gui)||void 0===l?void 0:l.size))}),[null===(n=null==e?void 0:e.gui)||void 0===n?void 0:n.size]);return l.createElement("div",{onClick:function(n){var l,t;(null===(l=null==e?void 0:e.events)||void 0===l?void 0:l.onClick)&&(null===(t=null==e?void 0:e.events)||void 0===t||t.onClick(n))},style:t({},null==e?void 0:e.styles),className:"system_cell ".concat(i)},null==e?void 0:e.children)},exports.Row=function(n){return e.createElement("div",{onClick:function(e){var l,t;(null===(l=null==n?void 0:n.events)||void 0===l?void 0:l.onClick)&&(null===(t=null==n?void 0:n.events)||void 0===t||t.onClick(e))},className:"system_row ".concat(null==n?void 0:n.className),style:t({},null==n?void 0:n.styles)},null==n?void 0:n.children)};
//# sourceMappingURL=index.js.map
