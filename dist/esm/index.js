import*as l from"react";import i from"react";var e=function(){return e=Object.assign||function(l){for(var i,e=1,n=arguments.length;e<n;e++)for(var o in i=arguments[e])Object.prototype.hasOwnProperty.call(i,o)&&(l[o]=i[o]);return l},e.apply(this,arguments)};function n(l,i,e){if(e||2===arguments.length)for(var n,o=0,t=i.length;o<t;o++)!n&&o in i||(n||(n=Array.prototype.slice.call(i,0,o)),n[o]=i[o]);return l.concat(n||Array.prototype.slice.call(i))}"function"==typeof SuppressedError&&SuppressedError;var o=function(l){return i.createElement("div",e({},null==l?void 0:l.DOMAttributes,{onClick:function(i){var e,n;(null===(e=null==l?void 0:l.events)||void 0===e?void 0:e.onClick)&&(null===(n=null==l?void 0:l.events)||void 0===n||n.onClick(i))},className:"system_row ".concat(null==l?void 0:l.className),style:e({},null==l?void 0:l.styles)}),null==l?void 0:l.children)},t=function(n){var o,t,v=l.useState((null===(o=null==n?void 0:n.gui)||void 0===o?void 0:o.size)?"system_col-"+(null===(t=null==n?void 0:n.gui)||void 0===t?void 0:t.size):null),d=v[0],u=v[1];!function(l){var e;i.useEffect((function(){var i,e;(null===(i=null==l?void 0:l.gui)||void 0===i?void 0:i.size)&&(null==l?void 0:l.setSize)&&(null==l||l.setSize("system_col-"+(null===(e=null==l?void 0:l.gui)||void 0===e?void 0:e.size)))}),[null===(e=null==l?void 0:l.gui)||void 0===e?void 0:e.size])}(e(e({},n),{setSize:u}));var a=function(l){return{onClick:function(i){var e,n;(null===(e=null==l?void 0:l.events)||void 0===e?void 0:e.onClick)&&(null===(n=null==l?void 0:l.events)||void 0===n||n.onClick(i))}}}(n).onClick;return l.createElement("div",e({},null==n?void 0:n.DOMAttributes,{onClick:a,style:e({},null==n?void 0:n.styles),className:"system_cell ".concat(d&&d," ").concat(null==n?void 0:n.className)}),null==n?void 0:n.children)},v=function(i){var o,t,v,d,u,a=l.useState(""),s=a[0],c=a[1],r=function(l){return{handleKeyPress:function(i){var e,o,t,v,d,u,a,s,c,r,m,f,p,g,h,b,y,E,k,x,C,N,w,O,A,D,_,V,S,M,L=null==l?void 0:l.text;if((null===(e=null==l?void 0:l.validation)||void 0===e?void 0:e.prefix)&&(null===(t=null===(o=null==l?void 0:l.validation)||void 0===o?void 0:o.prefix)||void 0===t?void 0:t.length)>0&&(L=(null===(v=null==l?void 0:l.validation)||void 0===v?void 0:v.prefix)+L),(null===(d=null==l?void 0:l.validation)||void 0===d?void 0:d.postfix)&&(null===(a=null===(u=null==l?void 0:l.validation)||void 0===u?void 0:u.postfix)||void 0===a?void 0:a.length)>0&&(L+=null===(s=null==l?void 0:l.validation)||void 0===s?void 0:s.postfix),"Enter"===i.key){if(0===(null==l?void 0:l.text.length))return;if(null===(c=null==l?void 0:l.validation)||void 0===c?void 0:c.unique)if((null===(m=null===(r=null==l?void 0:l.state)||void 0===r?void 0:r.value)||void 0===m?void 0:m.length)>0){if(null===(f=null==l?void 0:l.state)||void 0===f?void 0:f.value.find((function(l){return l===L})))return}else if((null===(p=null==l?void 0:l.state)||void 0===p?void 0:p.value)===(null==l?void 0:l.text))return;(null===(h=null===(g=null==l?void 0:l.state)||void 0===g?void 0:g.value)||void 0===h?void 0:h.length)?(null===(b=null==l?void 0:l.state)||void 0===b?void 0:b.setValue)&&(null===(y=null==l?void 0:l.state)||void 0===y||y.setValue(n(n([],null===(E=null==l?void 0:l.state)||void 0===E?void 0:E.value,!0),[L],!1))):(null===(k=null==l?void 0:l.state)||void 0===k?void 0:k.setValue)&&(null===(x=null==l?void 0:l.state)||void 0===x||x.setValue([L])),null==l||l.setText("")}if("Backspace"===i.key&&0===(null==l?void 0:l.text.length)&&(null===(N=null===(C=null==l?void 0:l.state)||void 0===C?void 0:C.value)||void 0===N?void 0:N.length)>0){var z=null===(w=null==l?void 0:l.state)||void 0===w?void 0:w.value[(null===(O=null==l?void 0:l.state)||void 0===O?void 0:O.value.length)-1];(null===(A=null==l?void 0:l.validation)||void 0===A?void 0:A.prefix)&&(z=z.slice(null===(D=null==l?void 0:l.validation)||void 0===D?void 0:D.prefix.length,z.length)),null==l||l.setText(z),(null===(_=null==l?void 0:l.state)||void 0===_?void 0:_.setValue)&&(null===(V=null==l?void 0:l.state)||void 0===V||V.setValue(n([],null===(S=null==l?void 0:l.state)||void 0===S?void 0:S.value.slice(0,(null===(M=null==l?void 0:l.state)||void 0===M?void 0:M.value.length)-1),!0)))}}}}(e(e({},i),{text:s,setText:c})).handleKeyPress;return l.createElement("div",e({className:"system_selectize"},null==i?void 0:i.DOMAttributes),(null===(o=null==i?void 0:i.state)||void 0===o?void 0:o.value)&&(null===(t=null==i?void 0:i.state)||void 0===t?void 0:t.value.length)>0&&(null===(v=null==i?void 0:i.state)||void 0===v?void 0:v.value.map((function(i){return l.createElement("span",null,i)}))),l.createElement("input",{placeholder:null===(d=null==i?void 0:i.gui)||void 0===d?void 0:d.label,style:{width:0===(null===(u=null==i?void 0:i.state)||void 0===u?void 0:u.value.length)?"100%":"min-content"},value:s,onKeyDown:r,onChange:function(l){return c(l.target.value)}}))},d=function(i){return l.createElement("div",e({},null==i?void 0:i.DOMAttributes,{className:"system_wrapper ".concat(null==i?void 0:i.className)}),null==i?void 0:i.children)},u=function(){return i.createElement("div",{className:"system_loader"},i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#000000",version:"1.1",id:"Capa_1",width:30,height:30,viewBox:"0 0 26.349 26.35"},i.createElement("g",null,i.createElement("g",null,i.createElement("circle",{cx:"13.792",cy:"3.082",r:"3.082"}),i.createElement("circle",{cx:"13.792",cy:"24.501",r:"1.849"}),i.createElement("circle",{cx:"6.219",cy:"6.218",r:"2.774"}),i.createElement("circle",{cx:"21.365",cy:"21.363",r:"1.541"}),i.createElement("circle",{cx:"3.082",cy:"13.792",r:"2.465"}),i.createElement("circle",{cx:"24.501",cy:"13.791",r:"1.232"}),i.createElement("path",{d:"M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05    C6.902,18.996,5.537,18.988,4.694,19.84z"}),i.createElement("circle",{cx:"21.364",cy:"6.218",r:"0.924"})))))},a=function(n){var o,t,v,d,a,s,c,r,m,f,p=l.useState(!1),g=p[0],h=p[1],b=l.useState(!1),y=b[0],E=b[1],k=l.useRef(null);!function(l){var e,n,o;i.useEffect((function(){var i,e,n,o;if(null===(e=null===(i=null==l?void 0:l.validation)||void 0===i?void 0:i.depsValidation)||void 0===e?void 0:e.notNull){for(var t=!0,v=0,d=void 0!==(null===(n=null==l?void 0:l.validation)||void 0===n?void 0:n.deps)?null===(o=null==l?void 0:l.validation)||void 0===o?void 0:o.deps:[];v<d.length;v++){if(!d[v]){t=!0;break}t=!1}null==l||l.setIsDisabled(t)}}),[null===(e=null==l?void 0:l.validation)||void 0===e?void 0:e.deps,null===(n=null==l?void 0:l.validation)||void 0===n?void 0:n.depsValidation]),i.useEffect((function(){var i,e,n,o;void 0===(null===(i=null==l?void 0:l.validation)||void 0===i?void 0:i.custom)&&null===(null===(e=null==l?void 0:l.validation)||void 0===e?void 0:e.custom)||null==l||l.setIsDisabled(void 0!==(null===(n=null==l?void 0:l.validation)||void 0===n?void 0:n.custom)&&(null===(o=null==l?void 0:l.validation)||void 0===o?void 0:o.custom))}),[null===(o=null==l?void 0:l.validation)||void 0===o?void 0:o.custom])}(e(e({},n),{isDisabled:g,setIsDisabled:h}));var x=function(l){return{buttonHandler:function(i){var e,n,o,t,v,d;if(null===(n=null===(e=null==l?void 0:l.gui)||void 0===e?void 0:e.loader)||void 0===n?void 0:n.promiseLoader)return null==l||l.setIsLocalLoader(!0),void((null===(o=null==l?void 0:l.events)||void 0===o?void 0:o.onClick)&&(null===(t=null==l?void 0:l.events)||void 0===t||t.onClick().then((function(){null==l||l.setIsLocalLoader(!1)}))));(null===(v=null==l?void 0:l.events)||void 0===v?void 0:v.onClick)&&(null===(d=null==l?void 0:l.events)||void 0===d||d.onClick(i))}}}(e(e({},n),{setIsLocalLoader:E})).buttonHandler;return l.createElement("button",e({},null==n?void 0:n.DOMAttributes,{ref:k,title:g&&(null===(t=null===(o=null==n?void 0:n.validation)||void 0===o?void 0:o.depsValidation)||void 0===t?void 0:t.notNull)?"Fill the fields":"",disabled:g,onClick:x,className:"system_button ".concat(n.className," ").concat(y||(null===(d=null===(v=null==n?void 0:n.gui)||void 0===v?void 0:v.loader)||void 0===d?void 0:d.custom)?"isLoading":""),style:e({},null==n?void 0:n.styles)}),y||(null===(s=null===(a=null==n?void 0:n.gui)||void 0===a?void 0:a.loader)||void 0===s?void 0:s.custom)?(null===(r=null===(c=null==n?void 0:n.gui)||void 0===c?void 0:c.loader)||void 0===r?void 0:r.customLoaderComponent)?l.createElement(n.gui.loader.customLoaderComponent,null):l.createElement(u,null):l.createElement(l.Fragment,null),(null==n?void 0:n.children)?null==n?void 0:n.children:void 0!==(null===(m=null==n?void 0:n.gui)||void 0===m?void 0:m.label)?null===(f=null==n?void 0:n.gui)||void 0===f?void 0:f.label:null)},s=function(i){var n,o,t,v,d;return l.createElement("div",e({},null==i?void 0:i.DOMAttributes,{className:"system_checkbox",onClick:function(l){var e,n,o,t,v;(null===(e=null==i?void 0:i.state)||void 0===e?void 0:e.setValue)&&(null===(n=null==i?void 0:i.state)||void 0===n||n.setValue(!(null===(o=null==i?void 0:i.state)||void 0===o?void 0:o.value))),(null===(t=null==i?void 0:i.events)||void 0===t?void 0:t.onClick)&&(null===(v=null==i?void 0:i.events)||void 0===v||v.onClick(l))},style:e({},null==i?void 0:i.styles)}),l.createElement("input",{type:"checkbox",checked:null===(n=null==i?void 0:i.state)||void 0===n?void 0:n.value}),l.createElement("label",{style:e({},null===(o=null==i?void 0:i.gui)||void 0===o?void 0:o.labelStyles)},(null===(t=null==i?void 0:i.gui)||void 0===t?void 0:t.label)?(null===(v=null==i?void 0:i.gui)||void 0===v?void 0:v.label.slice(0,50))+((null===(d=null==i?void 0:i.gui)||void 0===d?void 0:d.label.length)>50?"...":""):(null==i?void 0:i.children)?null==i?void 0:i.children:null))},c=function(i){var n,o,t;return l.createElement("div",e({},null==i?void 0:i.DOMAttributes,{className:"system_switchbox",onClick:function(l){var e,n,o,t,v;(null===(e=null==i?void 0:i.state)||void 0===e?void 0:e.setValue)&&(null===(n=null==i?void 0:i.state)||void 0===n||n.setValue(!(null===(o=null==i?void 0:i.state)||void 0===o?void 0:o.value))),(null===(t=null==i?void 0:i.events)||void 0===t?void 0:t.onClick)&&(null===(v=null==i?void 0:i.events)||void 0===v||v.onClick(l))}}),l.createElement("div",{className:"box ".concat((null===(n=null==i?void 0:i.state)||void 0===n?void 0:n.value)&&"active")}),l.createElement("label",null,(null===(o=null==i?void 0:i.gui)||void 0===o?void 0:o.label)?null===(t=null==i?void 0:i.gui)||void 0===t?void 0:t.label:(null==i?void 0:i.children)?null==i?void 0:i.children:null))},r=function(n){var o,t,v,d,u,s,c,r,m,f;!function(l){i.useEffect((function(){var i,e,n,o,t,v;!(null===(e=null===(i=null==l?void 0:l.state)||void 0===i?void 0:i.active)||void 0===e?void 0:e.id)&&(null===(n=null==l?void 0:l.state)||void 0===n||n.setActive((null===(t=null===(o=null==l?void 0:l.gui)||void 0===o?void 0:o.components)||void 0===t?void 0:t.length)>0&&(null===(v=null==l?void 0:l.gui)||void 0===v?void 0:v.components[0])))}),[l])}(n);var p=function(l){return{onClickToOpenComponent:function(i,e){var n,o,t;(null===(n=null==l?void 0:l.events)||void 0===n?void 0:n.onClickToOpenComponent)&&(null===(o=null==l?void 0:l.events)||void 0===o||o.onClickToOpenComponent(i)),null===(t=null==l?void 0:l.state)||void 0===t||t.setActive(e)}}}(n).onClickToOpenComponent;return l.createElement("div",e({},null==n?void 0:n.DOMAttributes,{className:"system_tabcontainer"}),l.createElement("div",{className:"pages"},(null===(o=null==n?void 0:n.gui)||void 0===o?void 0:o.components)&&(null===(v=null===(t=null==n?void 0:n.gui)||void 0===t?void 0:t.components)||void 0===v?void 0:v.length)>0&&(null===(u=null===(d=null==n?void 0:n.gui)||void 0===d?void 0:d.components)||void 0===u?void 0:u.map((function(i){var e,o;return l.createElement(a,{className:(null==i?void 0:i.id)===(null===(o=null===(e=null==n?void 0:n.state)||void 0===e?void 0:e.active)||void 0===o?void 0:o.id)?"active":"",events:{onClick:function(l){return p(l,i)}},key:null==i?void 0:i.id},"asdads")})))),l.createElement("div",{className:"layout"},(null===(c=null===(s=null==n?void 0:n.state)||void 0===s?void 0:s.active)||void 0===c?void 0:c.id)&&(null===(f=null===(m=null===(r=null==n?void 0:n.gui)||void 0===r?void 0:r.components)||void 0===m?void 0:m.find((function(l){var i,e;return l.id===(null===(e=null===(i=null==n?void 0:n.state)||void 0===i?void 0:i.active)||void 0===e?void 0:e.id)})))||void 0===f?void 0:f.component)))},m=function(n){var o,t,v,d,u,a=l.useState(!1),s=a[0],c=a[1];return function(l){var e;i.useEffect((function(){null==l||l.setIsOpened(!1)}),[null===(e=null==l?void 0:l.state)||void 0===e?void 0:e.value])}(e(e({},n),{setIsOpened:c})),l.createElement("div",e({},null==n?void 0:n.DOMAttributes,{className:"system_dropdown_wrapper"}),l.createElement("div",{onClick:function(){return c(!s)},className:"selected_item"},null===(t=null===(o=null==n?void 0:n.state)||void 0===o?void 0:o.value)||void 0===t?void 0:t.value," ",l.createElement("button",null,s?"Close":"Open")),l.createElement("ul",{className:"items ".concat(s&&"active")},(null===(v=null==n?void 0:n.gui)||void 0===v?void 0:v.items)&&(null===(u=null===(d=null==n?void 0:n.gui)||void 0===d?void 0:d.items)||void 0===u?void 0:u.map((function(i){return l.createElement("li",{onClick:function(){var l,e;return(null===(l=null==n?void 0:n.state)||void 0===l?void 0:l.setValue)&&(null===(e=null==n?void 0:n.state)||void 0===e?void 0:e.setValue(i))}},null==i?void 0:i.value)})))))},f=function(i){var n,o,v,d,u,a,s,c,r,m;return l.createElement("div",e({},i.DOMAttributes,{className:(null==i||i.className,null==i?void 0:i.className),style:null==i?void 0:i.styles}),l.createElement(t,{className:null===(o=null===(n=null==i?void 0:i.gui)||void 0===n?void 0:n.cell)||void 0===o?void 0:o.className,styles:e({boxSizing:"border-box",width:"100%",border:"1px solid black"},null===(d=null===(v=null==i?void 0:i.gui)||void 0===v?void 0:v.cell)||void 0===d?void 0:d.styles)},l.createElement("label",{className:null===(a=null===(u=null==i?void 0:i.gui)||void 0===u?void 0:u.label)||void 0===a?void 0:a.className,style:null===(c=null===(s=null==i?void 0:i.gui)||void 0===s?void 0:s.label)||void 0===c?void 0:c.styles},null===(m=null===(r=null==i?void 0:i.gui)||void 0===r?void 0:r.label)||void 0===m?void 0:m.children),null==i?void 0:i.children))},p=function(n){var o,t,v,d=function(){var l=i.useState(!1);return{isActive:l[0],setIsActive:l[1]}}(),u=d.isActive,a=d.setIsActive,s=i.useRef(null);return l.createElement("div",e({},null==n?void 0:n.DOMAttributes,{className:"system_collapse ".concat(u?"":"disabled"),style:{height:u?40+(null===(o=null==s?void 0:s.current)||void 0===o?void 0:o.clientHeight):40}}),l.createElement("button",{onClick:function(){return a(!u)}},null===(v=null===(t=null==n?void 0:n.gui)||void 0===t?void 0:t.label)||void 0===v?void 0:v.children,l.createElement("div",{className:u?"icon disabled":"icon"},l.createElement("svg",{width:"100%",height:"100%",style:{maxWidth:"100%",maxHeight:"100%"},viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M19.9201 15.05L13.4001 8.53001C12.6301 7.76001 11.3701 7.76001 10.6001 8.53001L4.08008 15.05",stroke:u?"var(--main-collapse-label-color)":"var(--main-collapse-label-active)","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"})))),l.createElement("div",{ref:s},null==n?void 0:n.children))};export{a as Button,t as Cell,s as Checbox,p as Collapse,m as Dropdown,f as Fieldset,o as Row,v as Selectize,c as Switchbox,r as Tabcontainer,d as Wrapper};
//# sourceMappingURL=index.js.map