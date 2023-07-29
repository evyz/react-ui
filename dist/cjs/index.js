"use strict";var l=require("react");function i(l){var i=Object.create(null);return l&&Object.keys(l).forEach((function(n){if("default"!==n){var e=Object.getOwnPropertyDescriptor(l,n);Object.defineProperty(i,n,e.get?e:{enumerable:!0,get:function(){return l[n]}})}})),i.default=l,Object.freeze(i)}var n=i(l),e=function(){return e=Object.assign||function(l){for(var i,n=1,e=arguments.length;n<e;n++)for(var o in i=arguments[n])Object.prototype.hasOwnProperty.call(i,o)&&(l[o]=i[o]);return l},e.apply(this,arguments)};function o(l,i,n){if(n||2===arguments.length)for(var e,o=0,t=i.length;o<t;o++)!e&&o in i||(e||(e=Array.prototype.slice.call(i,0,o)),e[o]=i[o]);return l.concat(e||Array.prototype.slice.call(i))}"function"==typeof SuppressedError&&SuppressedError;var t=function(){return l.createElement("div",{className:"system_loader"},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#000000",version:"1.1",id:"Capa_1",width:30,height:30,viewBox:"0 0 26.349 26.35"},l.createElement("g",null,l.createElement("g",null,l.createElement("circle",{cx:"13.792",cy:"3.082",r:"3.082"}),l.createElement("circle",{cx:"13.792",cy:"24.501",r:"1.849"}),l.createElement("circle",{cx:"6.219",cy:"6.218",r:"2.774"}),l.createElement("circle",{cx:"21.365",cy:"21.363",r:"1.541"}),l.createElement("circle",{cx:"3.082",cy:"13.792",r:"2.465"}),l.createElement("circle",{cx:"24.501",cy:"13.791",r:"1.232"}),l.createElement("path",{d:"M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05    C6.902,18.996,5.537,18.988,4.694,19.84z"}),l.createElement("circle",{cx:"21.364",cy:"6.218",r:"0.924"})))))},v=function(i){var o,v,d,u,a,c,s,r,m,f,p=n.useState(!1),g=p[0],h=p[1],y=n.useState(!1),E=y[0],x=y[1],b=n.useRef(null);!function(i){var n,e,o;l.useEffect((function(){var l,n,e,o;if(null===(n=null===(l=null==i?void 0:i.validation)||void 0===l?void 0:l.depsValidation)||void 0===n?void 0:n.notNull){for(var t=!0,v=0,d=void 0!==(null===(e=null==i?void 0:i.validation)||void 0===e?void 0:e.deps)?null===(o=null==i?void 0:i.validation)||void 0===o?void 0:o.deps:[];v<d.length;v++){if(!d[v]){t=!0;break}t=!1}null==i||i.setIsDisabled(t)}}),[null===(n=null==i?void 0:i.validation)||void 0===n?void 0:n.deps,null===(e=null==i?void 0:i.validation)||void 0===e?void 0:e.depsValidation]),l.useEffect((function(){var l,n,e,o;void 0===(null===(l=null==i?void 0:i.validation)||void 0===l?void 0:l.custom)&&null===(null===(n=null==i?void 0:i.validation)||void 0===n?void 0:n.custom)||null==i||i.setIsDisabled(void 0!==(null===(e=null==i?void 0:i.validation)||void 0===e?void 0:e.custom)&&(null===(o=null==i?void 0:i.validation)||void 0===o?void 0:o.custom))}),[null===(o=null==i?void 0:i.validation)||void 0===o?void 0:o.custom])}(e(e({},i),{isDisabled:g,setIsDisabled:h}));var C=function(l){return{buttonHandler:function(i){var n,e,o,t,v,d;if(null===(e=null===(n=null==l?void 0:l.gui)||void 0===n?void 0:n.loader)||void 0===e?void 0:e.promiseLoader)return null==l||l.setIsLocalLoader(!0),void((null===(o=null==l?void 0:l.events)||void 0===o?void 0:o.onClick)&&(null===(t=null==l?void 0:l.events)||void 0===t||t.onClick().then((function(){null==l||l.setIsLocalLoader(!1)}))));(null===(v=null==l?void 0:l.events)||void 0===v?void 0:v.onClick)&&(null===(d=null==l?void 0:l.events)||void 0===d||d.onClick(i))}}}(e(e({},i),{setIsLocalLoader:x})).buttonHandler;return n.createElement("button",{ref:b,title:g&&(null===(v=null===(o=null==i?void 0:i.validation)||void 0===o?void 0:o.depsValidation)||void 0===v?void 0:v.notNull)?"Fill the fields":"",disabled:g,onClick:C,className:"system_button ".concat(i.className," ").concat(E||(null===(u=null===(d=null==i?void 0:i.gui)||void 0===d?void 0:d.loader)||void 0===u?void 0:u.custom)?"isLoading":""),style:e({},null==i?void 0:i.styles)},E||(null===(c=null===(a=null==i?void 0:i.gui)||void 0===a?void 0:a.loader)||void 0===c?void 0:c.custom)?(null===(r=null===(s=null==i?void 0:i.gui)||void 0===s?void 0:s.loader)||void 0===r?void 0:r.customLoaderComponent)?n.createElement(i.gui.loader.customLoaderComponent,null):n.createElement(t,null):n.createElement(n.Fragment,null),(null==i?void 0:i.children)?null==i?void 0:i.children:void 0!==(null===(m=null==i?void 0:i.gui)||void 0===m?void 0:m.label)?null===(f=null==i?void 0:i.gui)||void 0===f?void 0:f.label:null)};exports.Button=v,exports.Cell=function(i){var o,t,v=n.useState((null===(o=null==i?void 0:i.gui)||void 0===o?void 0:o.size)?"system_col-"+(null===(t=null==i?void 0:i.gui)||void 0===t?void 0:t.size):null),d=v[0],u=v[1];!function(i){var n;l.useEffect((function(){var l,n;(null===(l=null==i?void 0:i.gui)||void 0===l?void 0:l.size)&&(null==i?void 0:i.setSize)&&(null==i||i.setSize("system_col-"+(null===(n=null==i?void 0:i.gui)||void 0===n?void 0:n.size)))}),[null===(n=null==i?void 0:i.gui)||void 0===n?void 0:n.size])}(e(e({},i),{setSize:u}));var a=function(l){return{onClick:function(i){var n,e;(null===(n=null==l?void 0:l.events)||void 0===n?void 0:n.onClick)&&(null===(e=null==l?void 0:l.events)||void 0===e||e.onClick(i))}}}(i).onClick;return n.createElement("div",{onClick:a,style:e({},null==i?void 0:i.styles),className:"system_cell ".concat(d&&d," ").concat(null==i?void 0:i.className)},null==i?void 0:i.children)},exports.Checbox=function(l){var i,o,t,v,d;return n.createElement("div",{className:"system_checkbox",onClick:function(i){var n,e,o,t,v;(null===(n=null==l?void 0:l.state)||void 0===n?void 0:n.setValue)&&(null===(e=null==l?void 0:l.state)||void 0===e||e.setValue(!(null===(o=null==l?void 0:l.state)||void 0===o?void 0:o.value))),(null===(t=null==l?void 0:l.events)||void 0===t?void 0:t.onClick)&&(null===(v=null==l?void 0:l.events)||void 0===v||v.onClick(i))},style:e({},null==l?void 0:l.styles)},n.createElement("input",{type:"checkbox",checked:null===(i=null==l?void 0:l.state)||void 0===i?void 0:i.value}),n.createElement("label",{style:e({},null===(o=null==l?void 0:l.gui)||void 0===o?void 0:o.labelStyles)},(null===(t=null==l?void 0:l.gui)||void 0===t?void 0:t.label)?(null===(v=null==l?void 0:l.gui)||void 0===v?void 0:v.label.slice(0,50))+((null===(d=null==l?void 0:l.gui)||void 0===d?void 0:d.label.length)>50?"...":""):(null==l?void 0:l.children)?null==l?void 0:l.children:null))},exports.Row=function(i){return l.createElement("div",{onClick:function(l){var n,e;(null===(n=null==i?void 0:i.events)||void 0===n?void 0:n.onClick)&&(null===(e=null==i?void 0:i.events)||void 0===e||e.onClick(l))},className:"system_row ".concat(null==i?void 0:i.className),style:e({},null==i?void 0:i.styles)},null==i?void 0:i.children)},exports.Selectize=function(l){var i,t,v,d,u,a=n.useState(""),c=a[0],s=a[1],r=function(l){return{handleKeyPress:function(i){var n,e,t,v,d,u,a,c,s,r,m,f,p,g,h,y,E,x,b,C,k,N,w,O,V,z,S,_,L,T,j=null==l?void 0:l.text;if((null===(n=null==l?void 0:l.validation)||void 0===n?void 0:n.prefix)&&(null===(t=null===(e=null==l?void 0:l.validation)||void 0===e?void 0:e.prefix)||void 0===t?void 0:t.length)>0&&(j=(null===(v=null==l?void 0:l.validation)||void 0===v?void 0:v.prefix)+j),(null===(d=null==l?void 0:l.validation)||void 0===d?void 0:d.postfix)&&(null===(a=null===(u=null==l?void 0:l.validation)||void 0===u?void 0:u.postfix)||void 0===a?void 0:a.length)>0&&(j+=null===(c=null==l?void 0:l.validation)||void 0===c?void 0:c.postfix),"Enter"===i.key){if(0===(null==l?void 0:l.text.length))return;if(null===(s=null==l?void 0:l.validation)||void 0===s?void 0:s.unique)if((null===(m=null===(r=null==l?void 0:l.state)||void 0===r?void 0:r.value)||void 0===m?void 0:m.length)>0){if(null===(f=null==l?void 0:l.state)||void 0===f?void 0:f.value.find((function(l){return l===j})))return}else if((null===(p=null==l?void 0:l.state)||void 0===p?void 0:p.value)===(null==l?void 0:l.text))return;(null===(h=null===(g=null==l?void 0:l.state)||void 0===g?void 0:g.value)||void 0===h?void 0:h.length)?(null===(y=null==l?void 0:l.state)||void 0===y?void 0:y.setValue)&&(null===(E=null==l?void 0:l.state)||void 0===E||E.setValue(o(o([],null===(x=null==l?void 0:l.state)||void 0===x?void 0:x.value,!0),[j],!1))):(null===(b=null==l?void 0:l.state)||void 0===b?void 0:b.setValue)&&(null===(C=null==l?void 0:l.state)||void 0===C||C.setValue([j])),null==l||l.setText("")}if("Backspace"===i.key&&0===(null==l?void 0:l.text.length)&&(null===(N=null===(k=null==l?void 0:l.state)||void 0===k?void 0:k.value)||void 0===N?void 0:N.length)>0){var D=null===(w=null==l?void 0:l.state)||void 0===w?void 0:w.value[(null===(O=null==l?void 0:l.state)||void 0===O?void 0:O.value.length)-1];(null===(V=null==l?void 0:l.validation)||void 0===V?void 0:V.prefix)&&(D=D.slice(null===(z=null==l?void 0:l.validation)||void 0===z?void 0:z.prefix.length,D.length)),null==l||l.setText(D),(null===(S=null==l?void 0:l.state)||void 0===S?void 0:S.setValue)&&(null===(_=null==l?void 0:l.state)||void 0===_||_.setValue(o([],null===(L=null==l?void 0:l.state)||void 0===L?void 0:L.value.slice(0,(null===(T=null==l?void 0:l.state)||void 0===T?void 0:T.value.length)-1),!0)))}}}}(e(e({},l),{text:c,setText:s})).handleKeyPress;return n.createElement("div",{className:"system_selectize"},(null===(i=null==l?void 0:l.state)||void 0===i?void 0:i.value)&&(null===(t=null==l?void 0:l.state)||void 0===t?void 0:t.value.length)>0&&(null===(v=null==l?void 0:l.state)||void 0===v?void 0:v.value.map((function(l){return n.createElement("span",null,l)}))),n.createElement("input",{placeholder:null===(d=null==l?void 0:l.gui)||void 0===d?void 0:d.label,style:{width:0===(null===(u=null==l?void 0:l.state)||void 0===u?void 0:u.value.length)?"100%":"min-content"},value:c,onKeyDown:r,onChange:function(l){return s(l.target.value)}}))},exports.Switchbox=function(l){var i,e,o;return n.createElement("div",{className:"system_switchbox",onClick:function(i){var n,e,o,t,v;(null===(n=null==l?void 0:l.state)||void 0===n?void 0:n.setValue)&&(null===(e=null==l?void 0:l.state)||void 0===e||e.setValue(!(null===(o=null==l?void 0:l.state)||void 0===o?void 0:o.value))),(null===(t=null==l?void 0:l.events)||void 0===t?void 0:t.onClick)&&(null===(v=null==l?void 0:l.events)||void 0===v||v.onClick(i))}},n.createElement("div",{className:"box ".concat((null===(i=null==l?void 0:l.state)||void 0===i?void 0:i.value)&&"active")}),n.createElement("label",null,(null===(e=null==l?void 0:l.gui)||void 0===e?void 0:e.label)?null===(o=null==l?void 0:l.gui)||void 0===o?void 0:o.label:(null==l?void 0:l.children)?null==l?void 0:l.children:null))},exports.Tabcontainer=function(i){var e,o,t,d,u,a,c,s,r,m;!function(i){l.useEffect((function(){var l,n,e,o,t,v;!(null===(n=null===(l=null==i?void 0:i.state)||void 0===l?void 0:l.active)||void 0===n?void 0:n.id)&&(null===(e=null==i?void 0:i.state)||void 0===e||e.setActive((null===(t=null===(o=null==i?void 0:i.gui)||void 0===o?void 0:o.components)||void 0===t?void 0:t.length)>0&&(null===(v=null==i?void 0:i.gui)||void 0===v?void 0:v.components[0])))}),[i])}(i);var f=function(l){return{onClickToOpenComponent:function(i,n){var e,o,t;(null===(e=null==l?void 0:l.events)||void 0===e?void 0:e.onClickToOpenComponent)&&(null===(o=null==l?void 0:l.events)||void 0===o||o.onClickToOpenComponent(i)),null===(t=null==l?void 0:l.state)||void 0===t||t.setActive(n)}}}(i).onClickToOpenComponent;return n.createElement("div",{className:"system_tabcontainer"},n.createElement("div",{className:"pages"},(null===(e=null==i?void 0:i.gui)||void 0===e?void 0:e.components)&&(null===(t=null===(o=null==i?void 0:i.gui)||void 0===o?void 0:o.components)||void 0===t?void 0:t.length)>0&&(null===(u=null===(d=null==i?void 0:i.gui)||void 0===d?void 0:d.components)||void 0===u?void 0:u.map((function(l){var e,o;return n.createElement(v,{className:(null==l?void 0:l.id)===(null===(o=null===(e=null==i?void 0:i.state)||void 0===e?void 0:e.active)||void 0===o?void 0:o.id)?"active":"",events:{onClick:function(i){return f(i,l)}},key:null==l?void 0:l.id},"asdads")})))),n.createElement("div",{className:"layout"},(null===(c=null===(a=null==i?void 0:i.state)||void 0===a?void 0:a.active)||void 0===c?void 0:c.id)&&(null===(m=null===(r=null===(s=null==i?void 0:i.gui)||void 0===s?void 0:s.components)||void 0===r?void 0:r.find((function(l){var n,e;return l.id===(null===(e=null===(n=null==i?void 0:i.state)||void 0===n?void 0:n.active)||void 0===e?void 0:e.id)})))||void 0===m?void 0:m.component)))},exports.Wrapper=function(l){return n.createElement("div",{className:"system_wrapper ".concat(null==l?void 0:l.className)},null==l?void 0:l.children)};
//# sourceMappingURL=index.js.map
