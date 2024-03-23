import{d as V,a1 as ge,j as fe,q as p,h,a2 as ve,A as Q,a3 as ye,b as S,o as x,c as $,f as i,w as y,a4 as me,u as l,a5 as he,I as D,a6 as xe,a7 as re,s as M,a0 as Se,m as t,l as Z,C,g as be,v as E,F as q,a8 as ke,O as ie,Q as ce,a9 as $e,E as ue,$ as de,n as le}from"./index-d769c587.js";import{i as pe}from"./icon-3cb8945e.js";import{s as Ce,a as we}from"./music-d17f1969.js";import{u as K}from"./musicStore-8e60b60e.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import{g as Ie}from"./music-f1a5f29a.js";var R=(_=>(_[_.SONG=1]="SONG",_[_.ALUMN=10]="ALUMN",_[_.ARTIST=100]="ARTIST",_))(R||{});const Pe={class:"go-search"},Le=V({__name:"index",emits:["searchHandle","getSongHandle"],setup(_,{emit:g}){const T=ge(),n=fe(),P=K(),L=window.$t,{SearchIcon:c}=pe.ionicons5,f=g,w=p([]),a=p([]),u=p(""),I=p([]),z=()=>({style:{maxHeight:"300px",overflow:"auto",minWidth:"300px"}}),k=p([{render:()=>h("div",{style:"fontSize: 14px;color: grey;padding: 0 30px"},{default:()=>"热搜榜"}),key:"topSearch",type:"render",meta:{type:R.SONG}}]),m=p([{type:"render",key:"guess",render:()=>h("div",{style:"fontSize: 13px;color: grey;padding: 0 25px;"},[h("span",{style:"font-size:15px;margin-left:18px"},{default:()=>"猜你想搜"})]),meta:{type:0}}]),O=p(1),F=()=>{if(D.isNull(u.value)||D.isUndefined(u.value)||u.value==="")return;let r={keyword:u.value,type:O.value,page:1};P.doSearch(r),n.fullPath!=="/music/search"&&T.push({path:"/music/search"})},A=(r,d)=>{console.log(d),(D.isNull(u.value)||D.isUndefined(u.value)||u.value.length===0||u.value==="")&&(u.value=d.key,F()),d.meta.type===R.SONG&&f("getSongHandle",d.key),d.meta.type===R.ALUMN&&console.log("专辑，搜索 {keyword，type} 搜索列表更换标签页"),d.meta.type===R.ARTIST&&console.log("歌手，搜索 {keyword，type} 搜索列表更换标签页")},U=()=>{k.value.length=1,w.value.forEach((r,d)=>{const{searchWord:b,score:e,iconUrl:s}=r;k.value.push({label:()=>h("div",{style:{width:"300px",padding:"0 10px",display:"flex"}},[h("span",{style:{fontSize:"14px",marginRight:"20px",color:d<3?"red":"grey",display:"block",width:"20px",textAlign:"center"}},`${d+1}`),h("span",{style:{fontSize:"12px",color:"grey",marginRight:"5px",fontWeight:d<3?"bolder":"normal"}},`${b}`),h("span",{style:{fontSize:"12px",color:"grey"}},`${e}`),h("img",{style:{width:"15px",display:s?"inline-block":"none",objectFit:"contain",marginLeft:"5px"},src:s})]),key:b,disabled:!1,meta:{type:R.SONG}}),I.value=k.value})},H=()=>{const{albums:r,artists:d,songs:b}=a.value;m.value.length=1,b&&b.length!==0&&(m.value.push(B("songs")),b.forEach(e=>{m.value.push({label:()=>h("div",{style:{width:"300px",padding:"0 10px",display:"flex"}},[h("span",{style:{fontSize:"12px",color:"grey",marginLeft:"20px"}},{default:()=>`${e.name}  -  ${e.artists[0].name}`})]),key:e.id,disabled:!1,meta:{type:R.SONG}})})),d&&d.length!==0&&(m.value.push(B("artists")),d.forEach(e=>{m.value.push({label:()=>h("div",{style:{width:"300px",padding:"0 10px",display:"flex"}},[h("span",{style:{fontSize:"12px",color:"grey",marginLeft:"20px"}},{default:()=>`${e.name}`})]),key:e.id,disabled:!1,meta:{type:R.ARTIST}})})),r&&r.length!==0&&(m.value.push(B("albums")),r.forEach(e=>{m.value.push({label:()=>h("div",{style:{width:"300px",padding:"0 10px",display:"flex"}},[h("span",{style:{fontSize:"12px",color:"grey",marginLeft:"20px"}},{default:()=>`${e.name}  -${e.artist.name}`})]),key:e.id,disabled:!1,meta:{type:R.ALUMN}})})),I.value=m.value},B=r=>{let d=r==="songs"?"icon-yinleguan":r==="artists"?"icon-huiyuanzhuanxiang":"icon-CD",b=`music.${r}`;return{type:"render",key:r,render:()=>h("div",{style:"fontSize: 13px;color: grey;padding: 0 20px;"},[h("i",{class:`iconfont ${d}`,style:"font-size: 15px;color:grey;margin-right:5px"}),h("span",{style:"font-size:15px;"},{default:()=>L(b)})]),meta:{type:0}}},W=async r=>{if(D.isNull(r)||D.isUndefined(r)||r===""){U();return}X(r)},X=xe(async r=>{m.value.length=1,await we(r).then(d=>{if(a.value=d.result,a.value.length==0){U();return}}),H()},1e3);return ve(async()=>{await Ce().then(r=>{w.value=r.data}),await U()}),Q(()=>{}),ye(()=>{}),(r,d)=>{const b=S("n-input"),e=S("n-dropdown");return x(),$("div",Pe,[i(e,{"menu-props":z,trigger:"click",options:I.value,onSelect:A},{default:y(()=>[i(b,{size:"small","on-input":W,onKeyup:me(F,["enter"]),value:u.value,"onUpdate:value":d[0]||(d[0]=s=>u.value=s),valueModifiers:{trim:!0},round:"",clearable:"",placeholder:r.$t("music.placeholder")},{prefix:y(()=>[i(l(he),{size:"20",depth:"2",component:l(c)},null,8,["component"])]),_:1},8,["onKeyup","value","placeholder"])]),_:1},8,["options"])])}}});const Te=j(Le,[["__scopeId","data-v-91d16541"]]),G=_=>(ie("data-v-175f1c72"),_=_(),ce(),_),ze={class:"player-btn-wrp"},Re=G(()=>t("i",{class:"iconfont icon-shangyiqu"},null,-1)),Ne=G(()=>t("i",{class:"iconfont icon-zanting"},null,-1)),Fe=G(()=>t("i",{class:"iconfont icon-bofangzhong"},null,-1)),Ue=G(()=>t("i",{class:"iconfont icon-xiayiqu"},null,-1)),Oe={key:0,class:"music-info"},Ae=["src"],He={class:"song-singer"},Be={class:"name"},De={class:"singer"},Ee={class:"progress"},Ge={class:"player-util"},Me=G(()=>t("i",{class:"iconfont icon-24gl-volumeHigh"},null,-1)),Ve=G(()=>t("i",{class:"iconfont icon-bofangliebiao"},null,-1)),je=["src"],qe=V({__name:"index",props:["crtListFlag"],emits:["updatecrtFlag"],setup(_,{expose:g,emit:T}){const n=K(),{PawIcon:P,ChevronUpIcon:L}=pe.ionicons5,c=p(),f=p(),w=p(""),a=p(0),u=p(),I=p(0),z=p(),k=p(),m=p(!1),O=_,F=T,{currentSong:A}=re(n);M(A,async function(){var e,s,o,v;(s=(e=k.value)==null?void 0:e.$.vnode.el)==null||s.click(),await ke(),(v=(o=z.value)==null?void 0:o.$.vnode.el)==null||v.click()}),Q(()=>{window.addEventListener("beforeunload",()=>{n.changeIsPlayState(!1)})}),Se(()=>{window.removeEventListener("beforeunload",()=>{})});const U=()=>{var e;((e=n.getPlayList)==null?void 0:e.length)===1&&(c.value.currentTime=0,c.value.play()),Y()},H=()=>{var e;n.getCurrentSong===void 0||n.getCurrentSong==null||n.getCurrentSong.id===void 0||(a.value===100&&(c.value.currentTime=0),c.value.play(),n.changeIsPlayState(!0),f.value=((e=n.getCurrentSong)==null?void 0:e.time)/1e3,u.value=setInterval(()=>{try{n.getIsPlayState===!1&&clearInterval(u.value),I.value=c.value.currentTime,w.value=d(c.value.currentTime),f.value==null?a.value=0:a.value=c.value.currentTime/f.value*100,a.value===100&&B()}catch{clearInterval(u.value)}},100))},B=()=>{c.value.pause(),n.changeIsPlayState(!1),clearInterval(u.value)},W=()=>{let e=n.getPlayList;if(e===void 0||(e==null?void 0:e.length)<2)return;let s=n.getCurrentSong,o;if(e==null||e.forEach((v,N)=>{v.id===(s==null?void 0:s.id)&&(o=N)}),o===0){n.updateCurrentSong(e[(e==null?void 0:e.length)-1]);return}else n.updateCurrentSong(e[o-1])},Y=()=>{let e=n.getPlayList;if(e===void 0||(e==null?void 0:e.length)<2)return;let s=n.getCurrentSong,o;if(e==null||e.forEach((v,N)=>{v.id===(s==null?void 0:s.id)&&(o=N)}),o===e.length-1){n.updateCurrentSong(e[0]);return}else n.updateCurrentSong(e[o+1])},X=()=>{F("updatecrtFlag",!O.crtListFlag)};g({currentTime:I,lyricFlag:m});const r=e=>{a.value=e,c.value.currentTime=a.value/100*c.value.duration},d=e=>{let s="",o=parseInt(String(e/3600));e%=3600;let v=parseInt(String(e/60)),N=parseInt(String(e%60));return o>0?s=b(o+":"+v+":"+N):s=b(v+":"+N),s},b=e=>{let s="",o=e.split(":"),v=0;for(;v<o.length-1;v++)s+=o[v].length==1?"0"+o[v]:o[v],s+=":";return s+=o[v].length==1?"0"+o[v]:o[v],s};return(e,s)=>{var J,ee,te,ne,se,ae;const o=S("n-icon"),v=S("n-text"),N=S("n-slider");return x(),$(q,null,[t("div",ze,[i(o,{onClick:W},{default:y(()=>[Re]),_:1}),l(n).getIsPlayState?(x(),Z(o,{key:1,ref_key:"pauseRef",ref:k,onClick:B},{default:y(()=>[Fe]),_:1},512)):(x(),Z(o,{key:0,ref_key:"playRef",ref:z,class:"zanting",onClick:H},{default:y(()=>[Ne]),_:1},512)),i(o,{onClick:Y},{default:y(()=>[Ue]),_:1})]),(J=l(n).getCurrentSong)!=null&&J.id?(x(),$("div",Oe,[t("div",{class:"ablum-pic",onClick:s[0]||(s[0]=oe=>m.value=!m.value)},[t("img",{src:(ee=l(n).getCurrentSong)==null?void 0:ee.albumPic},null,8,Ae),i(l(L),{class:"up-icon"})]),t("div",He,[t("div",Be,C((te=l(n).getCurrentSong)==null?void 0:te.name),1),t("div",De,C((ne=l(n).getCurrentSong)==null?void 0:ne.artists),1)])])):be("",!0),t("div",Ee,[i(v,{style:{"margin-right":"5px"}},{default:y(()=>[E(C(w.value),1)]),_:1}),i(N,{tooltip:!1,value:a.value,"onUpdate:value":s[1]||(s[1]=oe=>a.value=oe),step:.1,"on-update:value":r},{thumb:y(()=>[i(o,{size:18,component:l(P)},null,8,["component"])]),_:1},8,["value"]),i(v,{style:{"margin-left":"5px"}},{default:y(()=>[E(C(f.value?d(f.value-I.value):""),1)]),_:1})]),t("div",Ge,[i(o,null,{default:y(()=>[Me]),_:1}),i(o,{onClick:X},{default:y(()=>[Ve]),_:1})]),t("audio",{ref_key:"audioRef",ref:c,onEnded:U,src:(se=l(n).getCurrentSong)!=null&&se.url?(ae=l(n).getCurrentSong)==null?void 0:ae.url:""},null,40,je)],64)}}});const Ke=j(qe,[["__scopeId","data-v-175f1c72"]]),We="/hannah-vue3/dist/assets/7e5a26d5-bfce-490f-b750-e566827fdeca__4f8f28d568278937e81fd4c9701dc35b-e2401470.png",Ye={class:"go-music-lyric"},Xe={class:"first-floor"},Ze={class:"action-bars"},Qe={class:"song-wrp"},Je={class:"song-name"},et={class:"song-info"},tt={class:"singer"},nt={class:"album"},st={class:"second-floor"},at={class:"album-wrp"},ot=["src"],lt={class:"lyric-wrp"},rt=V({__name:"index",props:["currentTime","playStatus"],setup(_){const g=K(),T=_,n=p(),P=p(),{isPlayState:L}=re(g),c=p(),f=p();M(L,a=>{a?(c.value.style="transform: rotateZ(25deg);",f.value.style.animationPlayState="running"):(c.value.style="transform: rotateZ(0deg);",f.value.style.animationPlayState="paused")}),M(n,a=>{w(a)}),$e(()=>{var a;n.value=(a=g.getCurrentSong)==null?void 0:a.lyric.findIndex(u=>u.time>T.currentTime)});function w(a){P.value.style.transform=`translateY(-${a*30}px)`}return(a,u)=>{var z,k,m,O,F,A;const I=S("n-text");return x(),$("div",Ye,[t("div",Xe,[t("div",Ze,[t("img",{ref_key:"barRef",ref:c,src:We,alt:"",srcset:""},null,512)]),t("div",Qe,[t("div",Je,C((z=l(g).getCurrentSong)==null?void 0:z.name),1),t("div",et,[t("div",tt,"歌手："+C((k=l(g).getCurrentSong)==null?void 0:k.artists),1),t("div",nt,"专辑："+C((m=l(g).getCurrentSong)==null?void 0:m.name),1)])])]),t("div",st,[t("div",at,[t("div",{class:"album-pic",style:{"animation-play-state":"paused"},ref_key:"albumRef",ref:f},[t("img",{src:(O=l(g).getCurrentSong)==null?void 0:O.albumPic},null,8,ot)],512)]),t("div",lt,[(F=l(g).getCurrentSong)!=null&&F.lyric?(x(),$("ul",{key:0,class:"lyric-box",ref_key:"lyricRef",ref:P},[(x(!0),$(q,null,ue((A=l(g).getCurrentSong)==null?void 0:A.lyric,(U,H)=>(x(),$("li",{key:H,class:de({active:H==n.value-1})},C(U.word),3))),128))],512)):(x(),Z(I,{key:1},{default:y(()=>[E("暂无歌词~")]),_:1}))])])])}}});const it=j(rt,[["__scopeId","data-v-090ff159"]]),_e=_=>(ie("data-v-952ab801"),_=_(),ce(),_),ct={class:"crtList-header"},ut=_e(()=>t("p",null,"当前播放",-1)),dt={class:"count-btn"},pt={class:"count"},_t={class:"crtList-list-wrp"},gt={key:1,class:"empty-list"},ft=_e(()=>t("div",null,"你还没有添加任何歌曲！",-1)),vt=V({__name:"index",setup(_){const g=K(),T=()=>{g.clearPlayList()};return(n,P)=>{var f;const L=S("router-link"),c=S("n-scrollbar");return x(),$(q,null,[t("div",ct,[ut,t("div",dt,[t("span",pt,"总 "+C((f=l(g).getPlayList)==null?void 0:f.length)+" 首",1),t("span",{class:"clear-btn",onClick:T},"清空列表")])]),t("div",_t,[i(c,{style:{"max-height":"100%"}},{default:y(()=>{var w;return[l(g).getPlayList&&((w=l(g).getPlayList)==null?void 0:w.length)>0?(x(!0),$(q,{key:0},ue(l(g).getPlayList,a=>{var u;return x(),$("p",{class:de({active:((u=l(g).getCurrentSong)==null?void 0:u.id)===a.id})},[t("span",null,C(a.name),1),t("span",null,C(a.artists),1),t("span",null,C(l(Ie)(a.time)),1)],2)}),256)):(x(),$("div",gt,[ft,t("div",null,[E("去首页"),i(L,{class:"go-recommend",to:"/music/recommend"},{default:y(()=>[E("发现音乐")]),_:1})])]))]}),_:1})])],64)}}});const yt=j(vt,[["__scopeId","data-v-952ab801"]]),mt={class:"go-music-project"},ht={class:"music-menu"},xt=V({__name:"index",setup(_){Q(()=>{M(()=>n.value.currentTime,f=>{P.value=f}),M(()=>n.value.lyricFlag,f=>{L.value=f})});const g=f=>{c.value=f},T=()=>{c.value=!1},n=p(),P=p(),L=p(),c=p(!1);return(f,w)=>{const a=S("n-layout-header"),u=S("router-link"),I=S("n-layout-sider"),z=S("router-view"),k=S("n-layout"),m=S("n-layout-footer");return x(),$("div",mt,[i(k,{style:{height:"calc(100vh - 60px)"}},{default:y(()=>[i(a,{style:{height:"50px",display:"flex",padding:"0 50px"},bordered:""},{default:y(()=>[i(l(Te))]),_:1}),i(k,{position:"absolute",onClick:T,style:{top:"50px",bottom:"55px"},"has-sider":""},{default:y(()=>[i(I,{width:"220","content-style":"padding: 24px;overflow:hidden background-color:transparent;z-index: 1;",bordered:""},{default:y(()=>[t("div",ht,[i(u,{to:"/music/home"},{default:y(()=>[E("发现音乐")]),_:1})])]),_:1}),i(z)]),_:1}),i(m,{position:"absolute",style:{height:"55px","z-index":"11"},bordered:""},{default:y(()=>[i(l(Ke),{onUpdatecrtFlag:g,crtListFlag:c.value,ref_key:"musicPlayerDom",ref:n},null,8,["crtListFlag"])]),_:1})]),_:1}),t("div",{class:"lyric-wrp",style:le({transform:L.value?"translateY(0vh)":"translateY(100vh)"})},[i(l(it),{currentTime:P.value},null,8,["currentTime"])],4),t("div",{class:"crtList-wrp",style:le({transform:c.value?"translateX(0%)":"translateX(100%)"})},[i(l(yt))],4)])}}});const It=j(xt,[["__scopeId","data-v-d91c28ef"]]);export{It as default};
