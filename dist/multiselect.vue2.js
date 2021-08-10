import{toRefs as e,ref as u,computed as t,watch as a,nextTick as n}from"@vue/composition-api";function l(e){return-1!==[null,void 0,!1].indexOf(e)}function r(e){var u=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return u?String(e).toLowerCase().trim():String(e).normalize("NFD").replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u17C9-\u17D3\u17DD\u1939-\u193B\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DF9\u1DFD-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD802[\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDF46-\uDF50]|\uD804[\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g,"").toLowerCase().trim()}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,u,t){return u in e?Object.defineProperty(e,u,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[u]=t,e}function s(n,s,c){var v=e(n),d=v.options,p=v.mode,f=v.trackBy,D=v.limit,m=v.hideSelected,h=v.createTag,g=v.label,b=v.appendNewTag,y=v.multipleLabel,F=v.object,C=v.loading,A=v.delay,O=v.resolveOnLoad,S=v.minChars,_=v.filterResults,B=v.clearOnSearch,E=v.clearOnSelect,w=v.valueProp,P=v.canDeselect,q=v.max,L=v.strict,k=v.closeOnSelect,T=c.iv,x=c.ev,j=c.search,R=c.clearSearch,I=c.update,V=c.pointer,N=c.blur,$=c.deactivate,H=u([]),M=u([]),W=u(!1),U=t((function(){var e,u=M.value||[];return e=u,"[object Object]"===Object.prototype.toString.call(e)&&(u=Object.keys(u).map((function(e){var t,a=u[e];return o(t={},w.value,e),o(t,f.value,a),o(t,g.value,a),t}))),u=u.map((function(e,u){var t;return"object"===i(e)?e:(o(t={},w.value,e),o(t,f.value,e),o(t,g.value,e),t)})),H.value.length&&(u=u.concat(H.value)),u})),K=t((function(){var e=U.value;return Q.value.length&&(e=Q.value.concat(e)),j.value&&_.value&&(e=e.filter((function(e){return-1!==r(e[f.value],L.value).indexOf(r(j.value,L.value))}))),m.value&&(e=e.filter((function(e){return!ce(e)}))),D.value>0&&(e=e.slice(0,D.value)),e})),X=t((function(){switch(p.value){case"single":return!l(T.value[w.value]);case"multiple":case"tags":return!l(T.value)&&T.value.length>0}})),z=t((function(){return void 0!==y&&void 0!==y.value?y.value(T.value):T.value&&T.value.length>1?"".concat(T.value.length," options selected"):"1 option selected"})),G=t((function(){return!U.value.length&&!W.value})),J=t((function(){return U.value.length>0&&0==K.value.length})),Q=t((function(){var e;return!1!==h.value&&j.value?-1!==se(j.value)?[]:[(e={},o(e,w.value,j.value),o(e,g.value,j.value),o(e,f.value,j.value),e)]:[]})),Y=t((function(){switch(p.value){case"single":return null;case"multiple":case"tags":return[]}})),Z=t((function(){return C.value||W.value})),ee=function(e){switch("object"!==i(e)&&(e=oe(e)),p.value){case"single":I(e);break;case"multiple":case"tags":I(T.value.concat(e))}s.emit("select",te(e),e)},ue=function(e){switch("object"!==i(e)&&(e=oe(e)),p.value){case"single":ne();break;case"tags":case"multiple":I(T.value.filter((function(u){return u[w.value]!=e[w.value]})))}s.emit("deselect",te(e),e)},te=function(e){return F.value?e:e[w.value]},ae=function(e){ue(e)},ne=function(){s.emit("clear"),I(Y.value)},le=function(e){switch(p.value){case"single":return!l(T.value)&&T.value[w.value]==e[w.value];case"tags":case"multiple":return!l(T.value)&&-1!==T.value.map((function(e){return e[w.value]})).indexOf(e[w.value])}},re=function(e){return!0===e.disabled},ie=function(){return!(void 0===q||-1===q.value||!X.value&&q.value>0)&&T.value.length>=q.value},oe=function(e){return U.value[U.value.map((function(e){return String(e[w.value])})).indexOf(String(e))]},se=function(e){return U.value.map((function(e){return r(e[f.value])})).indexOf(r(e))},ce=function(e){return"tags"===p.value&&m.value&&le(e)},ve=function(e){H.value.push(e)},de=function(){l(x.value)||(T.value=fe(x.value))},pe=function(e){W.value=!0,d.value(j.value).then((function(u){M.value=u,"function"==typeof e&&e(u),W.value=!1}))},fe=function(e){return l(e)?"single"===p.value?{}:[]:F.value?e:"single"===p.value?oe(e)||{}:e.filter((function(e){return!!oe(e)})).map((function(e){return oe(e)}))};if("single"!==p.value&&!l(x.value)&&!Array.isArray(x.value))throw new Error('v-model must be an array when using "'.concat(p.value,'" mode'));return d&&"function"==typeof d.value?O.value?pe(de):1==F.value&&de():(M.value=d.value,de()),A.value>-1&&a(j,(function(e){e.length<S.value||(W.value=!0,B.value&&(M.value=[]),setTimeout((function(){e==j.value&&d.value(j.value).then((function(u){e==j.value&&(M.value=u,V.value=K.value.filter((function(e){return!0!==e.disabled}))[0]||null,W.value=!1)}))}),A.value))}),{flush:"sync"}),a(x,(function(e){var u,t,a;if(l(e))T.value=fe(e);else switch(p.value){case"single":(F.value?e[w.value]!=T.value[w.value]:e!=T.value[w.value])&&(T.value=fe(e));break;case"multiple":case"tags":u=F.value?e.map((function(e){return e[w.value]})):e,t=T.value.map((function(e){return e[w.value]})),a=t.slice().sort(),u.length===t.length&&u.slice().sort().every((function(e,u){return e===a[u]}))||(T.value=fe(e))}}),{deep:!0}),"function"!=typeof n.options&&a(d,(function(e,u){M.value=n.options,Object.keys(T.value).length||de(),function(){if(X.value)if("single"===p.value){var e=oe(T.value[w.value])[g.value];T.value[g.value]=e,F.value&&(x.value[g.value]=e)}else T.value.forEach((function(e,u){var t=oe(T.value[u][w.value])[g.value];T.value[u][g.value]=t,F.value&&(x.value[u][g.value]=t)}))}()})),{fo:K,filteredOptions:K,hasSelected:X,multipleLabelText:z,eo:U,extendedOptions:U,noOptions:G,noResults:J,resolving:W,busy:Z,select:ee,deselect:ue,remove:ae,clear:ne,isSelected:le,isDisabled:re,isMax:ie,getOption:oe,handleOptionClick:function(e){if(!re(e)){switch(p.value){case"single":if(le(e))return void(P.value&&ue(e));N(),ee(e);break;case"multiple":if(le(e))return void ue(e);if(ie())return;ee(e),E.value&&R();break;case"tags":if(le(e))return void ue(e);if(ie())return;void 0===oe(e[w.value])&&h.value&&(s.emit("tag",e[w.value]),b.value&&ve(e),R()),E.value&&R(),ee(e)}k.value&&$()}},handleTagRemove:function(e,u){0===u.button?ae(e):u.preventDefault()},refreshOptions:function(e){pe(e)},resolveOptions:pe}}function c(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,u){if(!e)return;if("string"==typeof e)return v(e,u);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,u)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,u){(null==u||u>e.length)&&(u=e.length);for(var t=0,a=new Array(u);t<u;t++)a[t]=e[t];return a}function d(e,u){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);u&&(a=a.filter((function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable}))),t.push.apply(t,a)}return t}function p(e,u,t){return u in e?Object.defineProperty(e,u,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[u]=t,e}function f(u,a,n){var l=e(u),r=l.disabled,i=l.openDirection,o=l.showOptions,s=n.isOpen,c=n.isPointed,v=n.isSelected,f=n.isDisabled,D=n.isActive,m=function(e){for(var u=1;u<arguments.length;u++){var t=null!=arguments[u]?arguments[u]:{};u%2?d(Object(t),!0).forEach((function(u){p(e,u,t[u])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(u){Object.defineProperty(e,u,Object.getOwnPropertyDescriptor(t,u))}))}return e}({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",singleLabel:"multiselect-single-label",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",spacer:"multiselect-spacer"},l.classes.value);return{classList:t((function(){return{container:[m.container].concat(r.value?m.containerDisabled:[]).concat(s.value&&"top"===i.value&&o.value?m.containerOpenTop:[]).concat(s.value&&"top"!==i.value&&o.value?m.containerOpen:[]).concat(D.value?m.containerActive:[]),spacer:m.spacer,singleLabel:m.singleLabel,multipleLabel:m.multipleLabel,search:m.search,tags:m.tags,tag:[m.tag].concat(r.value?m.tagDisabled:[]),tagRemove:m.tagRemove,tagRemoveIcon:m.tagRemoveIcon,tagsSearchWrapper:m.tagsSearchWrapper,tagsSearch:m.tagsSearch,tagsSearchCopy:m.tagsSearchCopy,placeholder:m.placeholder,caret:[m.caret].concat(s.value?m.caretOpen:[]),clear:m.clear,clearIcon:m.clearIcon,spinner:m.spinner,dropdown:[m.dropdown].concat("top"===i.value?m.dropdownTop:[]).concat(s.value&&o.value?[]:m.dropdownHidden),options:[m.options].concat("top"===i.value?m.optionsTop:[]),option:function(e){var u=[m.option];return c(e)?u.push(v(e)?m.optionSelectedPointed:m.optionPointed):v(e)?u.push(f(e)?m.optionSelectedDisabled:m.optionSelected):f(e)&&u.push(m.optionDisabled),u},noOptions:m.noOptions,noResults:m.noResults,fakeInput:m.fakeInput}}))}}function D(e,u,t,a,n,l,r,i,o,s){"boolean"!=typeof r&&(o=i,i=r,r=!1);var c,v="function"==typeof t?t.options:t;if(e&&e.render&&(v.render=e.render,v.staticRenderFns=e.staticRenderFns,v._compiled=!0,n&&(v.functional=!0)),a&&(v._scopeId=a),l?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),u&&u.call(this,o(e)),e&&e._registeredComponents&&e._registeredComponents.add(l)},v._ssrRegister=c):u&&(c=r?function(e){u.call(this,s(e,this.$root.$options.shadowRoot))}:function(e){u.call(this,i(e))}),c)if(v.functional){var d=v.render;v.render=function(e,u){return c.call(u),d(e,u)}}else{var p=v.beforeCreate;v.beforeCreate=p?[].concat(p,c):[c]}return t}const m={name:"Multiselect",emits:["open","close","select","deselect","input","search-change","tag","update:modelValue","change","clear"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:"label"},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:!1},appendNewTag:{type:Boolean,required:!1,default:!0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},addTagOn:{type:Array,required:!1,default:()=>["enter"]},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0}},setup(r,i){const o=function(a,n){var l=e(a),r=l.value,i=l.modelValue,o=l.mode,s=l.valueProp,c=u("single"!==o.value?[]:{}),v=void 0!==n.expose?i:r,d=t((function(){return"single"===o.value?c.value[s.value]:c.value.map((function(e){return e[s.value]}))})),p=t((function(){return"single"!==o.value?c.value.map((function(e){return e[s.value]})).join(","):c.value[s.value]}));return{iv:c,internalValue:c,ev:v,externalValue:v,textValue:p,plainValue:d}}(r,i),v={pointer:u(null)},d=function(t,a,n){var l=e(t).disabled,r=u(!1);return{isOpen:r,open:function(){r.value||l.value||(r.value=!0,a.emit("open"))},close:function(){r.value&&(r.value=!1,a.emit("close"))}}}(r,i),p=function(e,t,n){var l=u(null),r=u(null);return a(l,(function(e){t.emit("search-change",e)})),{search:l,input:r,clearSearch:function(){l.value=""},handleSearchInput:function(e){l.value=e.target.value}}}(0,i),D=function(u,t,a){var n=e(u),r=n.object,i=n.valueProp,o=n.mode,s=a.iv,c=function(e){return r.value||l(e)?e:Array.isArray(e)?e.map((function(e){return e[i.value]})):e[i.value]},v=function(e){return l(e)?"single"===o.value?{}:[]:e};return{update:function(e){s.value=v(e);var u=c(e);t.emit("change",u),t.emit("input",u),t.emit("update:modelValue",u)}}}(r,i,{iv:o.iv}),m=function(a,n,l){var r=e(a),i=r.searchable,o=r.disabled,s=l.input,c=l.open,v=l.close,d=l.clearSearch,p=u(null),f=u(!1),D=t((function(){return i.value||o.value?-1:0})),m=function(){i.value&&s.value.blur(),p.value.blur()},h=function(){f.value=!1,setTimeout((function(){f.value||(v(),d())}),1)};return{multiselect:p,tabindex:D,isActive:f,blur:m,handleFocus:function(){i.value&&!o.value&&s.value.focus()},activate:function(){o.value||(f.value=!0,c())},deactivate:h,handleCaretClick:function(){h(),m()}}}(r,0,{input:p.input,open:d.open,close:d.close,clearSearch:p.clearSearch}),h=s(r,i,{ev:o.ev,iv:o.iv,search:p.search,clearSearch:p.clearSearch,update:D.update,pointer:v.pointer,blur:m.blur,deactivate:m.deactivate}),g=function(u,l,r){var i=e(u),o=i.valueProp,s=i.showOptions,c=i.searchable,v=r.fo,d=r.handleOptionClick,p=r.search,f=r.pointer,D=r.multiselect,m=t((function(){return v.value.filter((function(e){return!0!==e.disabled}))})),h=function(e){void 0===e||null!==e&&e.disabled||(f.value=e)},g=function(){h(m.value[0]||null)},b=function(){h(null)},y=function(){var e=D.value.querySelector("[data-pointed]");if(e){var u=e.parentElement.parentElement;e.offsetTop+e.offsetHeight>u.clientHeight+u.scrollTop&&(u.scrollTop=e.offsetTop+e.offsetHeight-u.clientHeight),e.offsetTop<u.scrollTop&&(u.scrollTop=e.offsetTop)}};return a(p,(function(e){c.value&&(e.length&&s.value?g():b())})),{pointer:f,isPointed:function(e){return!!f.value&&f.value[o.value]==e[o.value]},setPointer:h,setPointerFirst:g,clearPointer:b,selectPointer:function(){f.value&&!0!==f.value.disabled&&d(f.value)},forwardPointer:function(){if(null===f.value)h(m.value[0]||null);else{var e=m.value.map((function(e){return e[o.value]})).indexOf(f.value[o.value])+1;m.value.length<=e&&(e=0),h(m.value[e]||null)}n((function(){y()}))},backwardPointer:function(){if(null===f.value)h(m.value[m.value.length-1]||null);else{var e=m.value.map((function(e){return e[o.value]})).indexOf(f.value[o.value])-1;e<0&&(e=m.value.length-1),h(m.value[e]||null)}n((function(){y()}))}}}(r,0,{fo:h.fo,handleOptionClick:h.handleOptionClick,search:p.search,pointer:v.pointer,multiselect:m.multiselect}),b=function(u,t,a){var n=e(u),l=n.mode,r=n.addTagOn,i=n.createTag,o=n.openDirection,s=n.searchable,v=n.showOptions,d=n.valueProp,p=a.iv,f=a.update,D=a.search,m=a.setPointer,h=a.selectPointer,g=a.backwardPointer,b=a.forwardPointer,y=a.blur,F=a.fo,C=function(){"tags"===l.value&&!v.value&&i.value&&s.value&&m(F.value[F.value.map((function(e){return e[d.value]})).indexOf(D.value)]),h()};return{handleKeydown:function(e){switch(e.keyCode){case 8:if("single"===l.value)return;if(s.value&&-1===[null,""].indexOf(D.value))return;if(0===p.value.length)return;f(c(p.value).slice(0,-1));break;case 13:if(e.preventDefault(),"tags"===l.value&&-1===r.value.indexOf("enter"))return;C();break;case 27:y();break;case 32:if("tags"!==l.value&&s.value)return;if("tags"===l.value&&-1===r.value.indexOf("space"))return;e.preventDefault(),C();break;case 38:if(e.preventDefault(),!v.value)return;"top"===o.value?b():g();break;case 40:if(e.preventDefault(),!v.value)return;"top"===o.value?g():b();break;case 186:if("tags"!==l.value)return;if(-1===r.value.indexOf(";")||!i.value)return;C(),e.preventDefault();break;case 188:if("tags"!==l.value)return;if(-1===r.value.indexOf(",")||!i.value)return;C(),e.preventDefault()}}}}(r,0,{iv:o.iv,update:D.update,search:p.search,setPointer:g.setPointer,selectPointer:g.selectPointer,backwardPointer:g.backwardPointer,forwardPointer:g.forwardPointer,blur:m.blur,fo:h.fo}),y=f(r,0,{isOpen:d.isOpen,isPointed:g.isPointed,isSelected:h.isSelected,isDisabled:h.isDisabled,isActive:m.isActive});return{...o,...d,...m,...v,...D,...p,...h,...g,...b,...y}}};var h=function(){var e=this,u=e.$createElement,t=e._self._c||u;return t("div",{ref:"multiselect",class:e.classList.container,attrs:{tabindex:e.tabindex,id:e.id},on:{focusin:e.activate,focusout:e.deactivate,keydown:e.handleKeydown,focus:e.handleFocus}},["tags"!==e.mode&&e.searchable&&!e.disabled?[t("input",{ref:"input",class:e.classList.search,attrs:{modelValue:e.search},domProps:{value:e.search},on:{input:e.handleSearchInput}})]:e._e(),e._v(" "),"tags"==e.mode?[t("div",{class:e.classList.tags},[e._l(e.iv,(function(u,a,n){return e._t("tag",(function(){return[t("span",{key:n,class:e.classList.tag},[e._v("\n          "+e._s(u[e.label])+"\n          "),e.disabled?e._e():t("span",{class:e.classList.tagRemove,on:{mousedown:function(t){return t.preventDefault(),e.handleTagRemove(u,t)}}},[t("span",{class:e.classList.tagRemoveIcon})])])]}),{option:u,handleTagRemove:e.handleTagRemove,disabled:e.disabled})})),e._v(" "),t("div",{class:e.classList.tagsSearchWrapper},[t("span",{class:e.classList.tagsSearchCopy},[e._v(e._s(e.search))]),e._v(" "),e.searchable&&!e.disabled?t("input",{ref:"input",class:e.classList.tagsSearch,attrs:{modelValue:e.search,spellcheck:"false",autocomplete:"false"},domProps:{value:e.search},on:{input:e.handleSearchInput,paste:function(u){return e.$emit("paste",u)}}}):e._e()])],2)]:e._e(),e._v(" "),"single"==e.mode&&e.hasSelected&&!e.search&&e.iv?[e._t("singlelabel",(function(){return[t("div",{class:e.classList.singleLabel},[e._v("\n        "+e._s(e.iv[e.label])+"\n      ")])]}),{value:e.iv})]:e._e(),e._v(" "),"multiple"==e.mode&&e.hasSelected&&!e.search?[e._t("multiplelabel",(function(){return[t("div",{class:e.classList.multipleLabel},[e._v("\n        "+e._s(e.multipleLabelText)+"\n      ")])]}),{values:e.iv})]:e._e(),e._v(" "),!e.placeholder||e.hasSelected||e.search?e._e():[e._t("placeholder",(function(){return[t("div",{class:e.classList.placeholder},[e._v("\n        "+e._s(e.placeholder)+"\n      ")])]}))],e._v(" "),e.busy?e._t("spinner",(function(){return[t("span",{class:e.classList.spinner})]})):e._e(),e._v(" "),e.hasSelected&&!e.disabled&&e.canClear&&!e.busy?e._t("clear",(function(){return[t("span",{class:e.classList.clear,on:{mousedown:e.clear}},[t("span",{class:e.classList.clearIcon})])]}),{clear:e.clear}):e._e(),e._v(" "),e.caret?e._t("caret",(function(){return[t("span",{class:e.classList.caret,on:{click:e.handleCaretClick}})]})):e._e(),e._v(" "),t("div",{class:e.classList.dropdown,attrs:{tabindex:"-1"}},[e._t("beforelist",null,{options:e.fo}),e._v(" "),t("ul",{class:e.classList.options},e._l(e.fo,(function(u,a,n){return t("li",{key:n,class:e.classList.option(u),attrs:{"data-pointed":e.isPointed(u)},on:{mouseenter:function(t){return e.setPointer(u)},click:function(t){return e.handleOptionClick(u)}}},[e._t("option",(function(){return[t("span",[e._v(e._s(u[e.label]))])]}),{option:u,search:e.search})],2)})),0),e._v(" "),e.noOptions?e._t("nooptions",(function(){return[t("div",{class:e.classList.noOptions,domProps:{innerHTML:e._s(e.noOptionsText)}})]})):e._e(),e._v(" "),e.noResults?e._t("noresults",(function(){return[t("div",{class:e.classList.noResults,domProps:{innerHTML:e._s(e.noResultsText)}})]})):e._e(),e._v(" "),e._t("afterlist",null,{options:e.fo})],2),e._v(" "),e.required?t("input",{class:e.classList.fakeInput,attrs:{tabindex:"-1",required:""},domProps:{value:e.textValue}}):e._e(),e._v(" "),e.nativeSupport?["single"==e.mode?t("input",{attrs:{type:"hidden",name:e.name},domProps:{value:void 0!==e.plainValue?e.plainValue:""}}):e._l(e.plainValue,(function(u,a){return t("input",{key:a,attrs:{type:"hidden",name:e.name+"[]"},domProps:{value:u}})}))]:e._e(),e._v(" "),t("div",{class:e.classList.spacer})],2)};h._withStripped=!0;const g=D({render:h,staticRenderFns:[]},undefined,m,undefined,false,undefined,!1,void 0,void 0,void 0);export{g as default};
