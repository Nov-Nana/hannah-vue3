import{s as y,d as k,t as U,q as b,a8 as x,A as B,a0 as H,an as F,ao as N,h as E,o as j,c as D,f as P,u as g,am as R,a6 as q,m as K}from"./index-b4acd0e1.js";var G=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],W=function(e){return G.map(function(t){return t.toLowerCase()}).indexOf(e.toLowerCase())!==-1},Y=function(e,t,n){Object.keys(t).filter(W).forEach(function(a){var r=t[a];typeof r=="function"&&(a==="onInit"?r(e,n):n.on(a.substring(2),function(i){return r(i,n)}))})},J=function(e,t,n,a){var r=e.modelEvents?e.modelEvents:null,i=Array.isArray(r)?r.join(" "):r;y(a,function(c,l){n&&typeof c=="string"&&c!==l&&c!==n.getContent({format:e.outputFormat})&&n.setContent(c)}),n.on(i||"change input undo redo",function(){t.emit("update:modelValue",n.getContent({format:e.outputFormat}))})},Q=function(e,t,n,a,r,i){a.setContent(i()),n.attrs["onUpdate:modelValue"]&&J(t,n,a,r),Y(e,n.attrs,a)},M=0,I=function(e){var t=Date.now(),n=Math.floor(Math.random()*1e9);return M++,e+"_"+n+M+String(t)},X=function(e){return e!==null&&e.tagName.toLowerCase()==="textarea"},V=function(e){return typeof e>"u"||e===""?[]:Array.isArray(e)?e:e.split(" ")},Z=function(e,t){return V(e).concat(V(t))},$=function(e){return e==null},A=function(){return{listeners:[],scriptId:I("tiny-script"),scriptLoaded:!1}},ee=function(){var e=A(),t=function(r,i,c,l){var o=i.createElement("script");o.referrerPolicy="origin",o.type="application/javascript",o.id=r,o.src=c;var d=function(){o.removeEventListener("load",d),l()};o.addEventListener("load",d),i.head&&i.head.appendChild(o)},n=function(r,i,c){e.scriptLoaded?c():(e.listeners.push(c),r.getElementById(e.scriptId)||t(e.scriptId,r,i,function(){e.listeners.forEach(function(l){return l()}),e.scriptLoaded=!0}))},a=function(){e=A()};return{load:n,reinitialize:a}},ne=ee(),te=function(){return typeof window<"u"?window:global},m=function(){var e=te();return e&&e.tinymce?e.tinymce:null},ie={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(e){return e==="html"||e==="text"}}},f=globalThis&&globalThis.__assign||function(){return f=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)},ae=function(e,t,n,a){return e(a||"div",{id:t,ref:n})},oe=function(e,t,n){return e("textarea",{id:t,visibility:"hidden",ref:n})},S={selector:void 0,target:void 0},re=k({props:ie,setup:function(e,t){var n=e.init?f(f({},e.init),S):f({},S),a=U(e),r=a.disabled,i=a.modelValue,c=a.tagName,l=b(null),o=null,d=e.id||I("tiny-vue"),_=e.init&&e.init.inline||e.inline,w=!!t.attrs["onUpdate:modelValue"],C=!0,O=e.initialValue?e.initialValue:"",h="",T=function(u){return w?function(){return i!=null&&i.value?i.value:""}:function(){return u?O:h}},p=function(){var u=T(C),s=f(f({},n),{readonly:e.disabled,target:l.value,plugins:Z(n.plugins,e.plugins),toolbar:e.toolbar||n.toolbar,inline:_,setup:function(v){o=v,v.on("init",function(L){return Q(L,e,t,v,i,u)}),typeof n.setup=="function"&&n.setup(v)}});X(l.value)&&(l.value.style.visibility=""),m().init(s),C=!1};y(r,function(u){var s;o!==null&&(typeof((s=o.mode)===null||s===void 0?void 0:s.set)=="function"?o.mode.set(u?"readonly":"design"):o.setMode(u?"readonly":"design"))}),y(c,function(u){var s;w||(h=o.getContent()),(s=m())===null||s===void 0||s.remove(o),x(function(){return p()})}),B(function(){if(m()!==null)p();else if(l.value&&l.value.ownerDocument){var u=e.cloudChannel?e.cloudChannel:"6",s=e.apiKey?e.apiKey:"no-api-key",v=$(e.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/".concat(s,"/tinymce/").concat(u,"/tinymce.min.js"):e.tinymceScriptSrc;ne.load(l.value.ownerDocument,v,p)}}),H(function(){m()!==null&&m().remove(o)}),_||(F(function(){C||p()}),N(function(){var u;w||(h=o.getContent()),(u=m())===null||u===void 0||u.remove(o)}));var z=function(u){var s;h=o.getContent(),(s=m())===null||s===void 0||s.remove(o),n=f(f(f({},n),u),S),x(function(){return p()})};return t.expose({rerender:z,getEditor:function(){return o}}),function(){return _?ae(E,d,l,e.tagName):oe(E,d,l)}}});const le=k({__name:"index",props:{value:{type:String,default:""},disabled:{type:Boolean,default:!1},plugins:{type:[String,Array],default:"preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media code codesample table charmap  nonbreaking insertdatetime advlist lists wordcount autosave autoresize"},toolbar:{type:[String,Array],default:"code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link codesample | alignleft aligncenter alignright alignjustify outdent indent |     styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat |     table image media charmap  pagebreak insertdatetime | fullscreen preview"}},emits:["input"],setup(e,{emit:t}){const n=e,a=t;let r=b({language:"zh-Hans",plugins:" preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media Template code codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount emoticons autosave autoresize",toolbar:"code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent |     styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat |     table image media charmap emoticons pagebreak insertdatetime  preview | fullscreen | bdmap lineheight",height:650,min_height:400,fontsize_formats:"12px 14px 16px 18px 24px 36px 48px 56px 72px",font_formats:"微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;",link_list:[{title:"预置链接1",value:"http://www.tinymce.com"},{title:"预置链接2",value:"http://tinymce.ax-z.cn"}],image_list:[{title:"预置图片1",value:"https://www.tiny.cloud/images/glyph-tinymce@2x.png"},{title:"预置图片2",value:"https://www.baidu.com/img/bd_logo1.png"}],image_class_list:[{title:"None",value:""},{title:"Some class",value:"class-name"}],importcss_append:!0,file_picker_callback:function(l,o,d){d.filetype==="file"&&l("https://www.baidu.com/img/bd_logo1.png",{text:"My text"}),d.filetype==="image"&&l("https://www.baidu.com/img/bd_logo1.png",{alt:"My alt text"}),d.filetype==="media"&&l("movie.mp4",{source2:"alt.ogg",poster:"https://www.baidu.com/img/bd_logo1.png"})},toolbar_sticky:!0,autosave_ask_before_unload:!1}),i=b();y(()=>n.value,l=>{i.value=l});const c=q(()=>{a("input",i.value)},500);return y(i,c),B(()=>{i.value=n.value}),(l,o)=>(j(),D("div",null,[P(g(re),{"api-key":"il82bxdyprj72pbtj79n6nd8sdz4txmf5encj7uacxca3mvf",modelValue:g(i),"onUpdate:modelValue":o[0]||(o[0]=d=>R(i)?i.value=d:i=d),init:g(r),disabled:e.disabled},null,8,["modelValue","init","disabled"])]))}}),ue={class:"tinymce-view-container"},se=["innerHTML"],de=k({__name:"TinyMCEView",setup(e){let t=b(`<h1 style="text-align: center;">TinyMCE</h1>
<p><img src="https://www.baidu.com/img/bd_logo1.png" alt="My alt text" width="540" height="258"></p>
<p>🙄&nbsp;Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</p>
<p>😬&nbsp;Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</p>
<p>😕 We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</p>`);const n=a=>{t.value=a};return(a,r)=>(j(),D("div",ue,[P(g(le),{value:g(t),onInput:n},null,8,["value"]),K("div",{class:"editor-content",innerHTML:g(t)},null,8,se)]))}});export{de as default};
