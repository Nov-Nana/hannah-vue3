import{d as b,q as p,k as B,A as C,o as u,c as _,m as f,n as S,e as y,s as N,F as g,E as x,C as H,ab as T,ac as D,a2 as z,f as $,w as M,u as I,O as A,Q as E}from"./index-b4acd0e1.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const V=b({__name:"VirturalScrolling",props:{items:Array,height:{type:String,default:"300px"},itemHeight:{type:Number,default:30}},setup(d){const l=d,r=p(),c=p(),t=p(),n=B(()=>t.value*l.itemHeight);C(()=>{var o;t.value=(o=l.items)==null?void 0:o.length,i()});const i=()=>{var m;const o=r.value.clientHeight,e=r.value.scrollTop,s=Math.floor(e/l.itemHeight),h=Math.min(s+Math.ceil(o/l.itemHeight),t.value-1);c.value=(m=l.items)==null?void 0:m.slice(s,h+1).map((v,w)=>({...v,top:(s+w)*l.itemHeight}))},a=()=>{i()};return(o,e)=>(u(),_("div",{class:"virtual-scroller",ref_key:"scrollContainer",ref:r,style:S({height:l.height}),onScroll:a},[f("div",{class:"virtual-spacer",style:S({height:`${n.value}px`})},null,4),y(o.$slots,"default",{items:c.value},void 0,!0)],36))}});const q=k(V,[["__scopeId","data-v-0ce73ae6"]]),G=b({__name:"InfiniteScrolling",props:{items:{}},emits:["getItemsPart"],setup(d,{emit:l}){const r=d,c=l;C(()=>{var e;return n.value=(e=r.items)==null?void 0:e.data,t.value.push(...n.value)}),N(()=>r.items,e=>{n.value=e==null?void 0:e.data,t.value.push(...n.value)});const t=p([]),n=p(),i=p(!1),a=e=>{var v;const{scrollHeight:s,scrollTop:h,clientHeight:m}=e.target;!i.value&&s-(h+m)<10&&!((v=r.items)!=null&&v.isFinished)&&o()},o=()=>{i.value=!0,console.log(t.value.length),c("getItemsPart",t.value.length),i.value=!1};return(e,s)=>(u(),_("div",{class:"infinite-scroller",onScrollPassive:a},[y(e.$slots,"content",{items:t.value},()=>[(u(!0),_(g,null,x(t.value,h=>(u(),_("div",{key:h.id},H(h.content),1))),128))],!0),y(e.$slots,"loading",{},()=>[T(f("div",null,"加载ing...",512),[[D,i.value]])],!0)],32))}});const L=k(G,[["__scopeId","data-v-5c6f3b66"]]),F=d=>(A("data-v-5880c2af"),d=d(),E(),d),O=F(()=>f("h3",null,"虚拟滚动",-1)),Q=F(()=>f("h3",null,"滚动加载",-1)),P=50,j=b({__name:"Scrolling",setup(d){const l=[];z(()=>{r(),i(0)});const r=()=>{for(let a=0;a<1e4;a++)l.push({id:a,content:`数据 ${a}`})};let c=p(),t=0,n=0;const i=a=>{if(a===0||a<t){n++;const o=[];for(let e=0;e<100;e++)o.push({id:+(""+n+e),content:"数"+ +(""+n+e)});c.value={isFinished:!1,total:200,data:o},t=c.value.total}else c.value={isFinished:!0,total:200,data:[]}};return(a,o)=>(u(),_(g,null,[O,$(I(q),{class:"virtual-scroll-wrapper",items:l,height:"200px","item-height":P},{default:M(e=>[(u(!0),_(g,null,x(e.items,s=>(u(),_("div",{ref_for:!0,ref:"listItem",class:"virtual-list",style:S({height:P+"px",top:s.top+"px"}),key:s.id},H(s.content),5))),128))]),_:1}),Q,$(I(L),{class:"infinite-scroll-wrapper",items:I(c),onGetItemsPart:i},{content:M(e=>[(u(!0),_(g,null,x(e.items,s=>(u(),_("div",{class:"list",key:s.id},H(s.content),1))),128))]),_:1},8,["items"])],64))}});const R=k(j,[["__scopeId","data-v-5880c2af"]]);export{R as default};
