import{d as k,q as p,s as z,b as m,c as E,f as c,w as i,F as L,o as N,v as y,C,u as S,O as M,Q as R,m as V}from"./index-154b61e8.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as X}from"./LinTable.vue_vue_type_script_setup_true_lang-babe8c65.js";import{X as u}from"./xlsx-f5cd3add.js";const $=k({__name:"UploadExcelComponent",props:{beforeUpload:Function,onSuccess:Function,isFile:Boolean,upload:Function},emits:["update:isFile"],setup(a,{emit:_}){const r=window.$t,l=a,x=_,v=p(),g=p();z(()=>l.isFile,e=>{g.value=e});const h=()=>{console.log("finsh")},b=()=>{console.log("error")},F=()=>{x("update:isFile",!1)};return(e,o)=>{const t=m("n-text"),s=m("n-button"),d=m("n-upload-dragger"),n=m("n-upload");return N(),E(L,null,[c(n,{ref_key:"upload",ref:v,"on-before-upload":l.beforeUpload,"on-remove":F,"on-error":b,"on-finish":h,accept:".xlsx,.xls","directory-dnd":"",max:1},{default:i(()=>[c(d,null,{default:i(()=>[c(t,null,{default:i(()=>[y(C(S(r)("admin.upload_text")),1)]),_:1}),c(s,{class:"upload-button",size:"small",secondary:"",type:"primary"},{default:i(()=>[y(C(S(r)("admin.browse")),1)]),_:1})]),_:1})]),_:1},8,["on-before-upload"]),c(s,{disabled:!l.isFile,style:{"margin-bottom":"12px"},onClick:a.onSuccess},{default:i(()=>[y("上传文件")]),_:1},8,["disabled","onClick"])],64)}}});const A=B($,[["__scopeId","data-v-2601dc65"]]),O=a=>(M("data-v-1aa461f2"),a=a(),R(),a),P={class:"upload-excel-container"},j=O(()=>V("div",{class:"space"},null,-1)),q=k({__name:"UploadExcel",setup(a){const _=p([]),r=p([]),l=p(!1),x=e=>{if(!(e.file.file.size/1024/1024<1))return console.log("Please do not upload files larger than 1M in size."),!1;l.value=!0,F(e.file.file)},v=()=>{console.log("上传")},g=e=>{const o=[];return e.map(t=>{o.push({title:t,key:t})}),o},h=({header:e,results:o})=>{r.value=g(e),_.value=o},b=e=>{const o=[],t=u.utils.decode_range(e["!ref"]);let s;const d=t.s.r;for(s=t.s.c;s<=t.e.c;++s){const n=e[u.utils.encode_cell({c:s,r:d})];let f="UNKNOWN "+s;n&&n.t&&(f=u.utils.format_cell(n)),o.push(f)}return o},F=e=>new Promise(o=>{const t=new FileReader;t.onload=s=>{var w;const d=(w=s==null?void 0:s.target)==null?void 0:w.result,n=u.read(d,{type:"array"}),f=n.SheetNames[0],U=n.Sheets[f],I=b(U),D=u.utils.sheet_to_json(U);h({header:I,results:D}),o()},t.readAsArrayBuffer(e)});return(e,o)=>(N(),E("div",P,[c(A,{"on-success":v,"before-upload":x,isFile:l.value,"onUpdate:isFile":o[0]||(o[0]=t=>l.value=t)},null,8,["isFile"]),j,c(X,{data:_.value,columns:r.value},null,8,["data","columns"])]))}});const W=B(q,[["__scopeId","data-v-1aa461f2"]]);export{W as default};
