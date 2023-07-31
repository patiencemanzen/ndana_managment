import{_ as w}from"./AppLayout-fd4d7e9f.js";import{r as n,p as x,s as p,o as r,d as c,a as t,e as g,q as m,F as u,g as f,t as s,u as v,c as y,w as h,b}from"./app-ce4b96a3.js";import{h as k}from"./moment-fbc5633a.js";const I={class:"p-6 lg:p-8 bg-white dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent"},V={class:"overflow-x-auto"},$={key:0,class:"absolute top-0 right-0 left-0 bottom-0 w-full h-full z-10 bg-gray-900/80 flex items-center justify-center"},B=t("div",{class:"w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"},null,-1),M=[B],C={class:"mb-10"},j={class:"relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white dark:bg-gray-700 overflow-hidden"},q=t("div",{class:"grid place-items-center h-full w-12 text-gray-300"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1),F={class:"p-3"},N={class:"table-auto w-full"},S=t("thead",{class:"text-xs font-semibold uppercase text-gray-400 dark:text-gray-50"},[t("tr",null,[t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Image")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-left"},"Category")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-center"},"Color")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-center"},"Type")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-center"},"Investor")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-center"},"Description")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-center"},"Metas")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-center"},"Quantity")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-center"},"Initial Price")]),t("th",{class:"p-2 whitespace-nowrap"},[t("div",{class:"font-semibold text-center"},"Imported at")])])],-1),z={class:"text-sm divide-y divide-gray-500 mt-4"},D={class:"p-2 whitespace-nowrap"},K={class:"flex items-center"},L={class:"w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"},A=["src","alt"],E={class:"font-bold text-gray-800 dark:text-gray-100"},P={class:"p-2 whitespace-nowrap"},Q={class:"text-left text-gray-800 dark:text-gray-100"},R={class:"p-2 whitespace-nowrap"},T={class:"text-left text-gray-800 dark:text-gray-100"},W={class:"p-2 whitespace-nowrap"},Y={class:"text-left text-gray-800 dark:text-gray-100"},G={class:"p-2 whitespace-nowrap"},H={class:"text-left text-gray-800 dark:text-gray-100"},J={class:"p-2 whitespace-nowrap"},O={class:"text-left text-gray-800 dark:text-gray-100 line-clamp-1 w-10"},U={class:"p-2 whitespace-nowrap"},X={class:"text-left text-gray-800 dark:text-gray-100"},Z={class:"p-2 whitespace-nowrap"},tt={class:"text-left text-gray-800 dark:text-gray-100"},et={class:"p-2 whitespace-nowrap"},st={class:"text-left font-bold text-green-500"},at={class:"p-2 whitespace-nowrap"},ot={class:"text-left text-gray-800 dark:text-gray-100"},rt={__name:"imports",setup(d){const a=n([]),o=n(!1),_=async i=>{o.value=!0;let l=await p.get(`/api/imports?query=${i}`);a.value=[],a.value=l.data,o.value=!1};return x(async()=>{o.value=!0,a.value=[];let i=await p.get("/api/imports");a.value=i.data,o.value=!1}),(i,l)=>(r(),c("div",null,[t("div",I,[t("div",V,[o.value?(r(),c("div",$,M)):g("",!0),t("div",C,[t("div",j,[q,t("input",{class:"peer h-full w-full outline-none border-none text-sm text-gray-700 pr-2 dark:bg-gray-700 dark:text-gray-100",type:"text",id:"search",onKeypress:l[0]||(l[0]=m(e=>_(e.target.value),["enter"])),placeholder:"Search Imports.."},null,32)])]),t("div",F,[t("table",N,[S,t("tbody",z,[(r(!0),c(u,null,f(a.value,e=>(r(),c("tr",null,[t("td",D,[t("div",K,[t("div",L,[t("img",{class:"rounded-full w-40 h-10",src:e.product.image,width:"40",height:"40",alt:e.product.name},null,8,A)]),t("div",E,s(e.product.name),1)])]),t("td",P,[t("div",Q,s(e.product.category),1)]),t("td",R,[t("div",T,s(e.product.color),1)]),t("td",W,[t("div",Y,s(e.product.type),1)]),t("td",G,[t("div",H,s(e.product.investor_id),1)]),t("td",J,[t("div",O,s(e.product.description)+"...",1)]),t("td",U,[t("div",X,s(e.product.meta_desc),1)]),t("td",Z,[t("div",tt,s(e.product.quantity),1)]),t("td",et,[t("div",st,"RWF "+s(parseInt(e.product.price).toLocaleString()),1)]),t("td",at,[t("div",ot,s(v(k)(e.product.created_at).format("ddd, MMM Y h:m A")),1)])]))),256))])])])])])]))}},it=t("div",{class:"flex items-center justify-between"},[t("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Imports ")],-1),lt={class:"pb-10 pt-5"},ct={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},dt={class:"bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg"},_t={__name:"Imports",props:{canView:Boolean},setup(d){return(a,o)=>(r(),y(w,{title:"Imports",canView:d.canView},{header:h(()=>[it]),default:h(()=>[t("div",lt,[t("div",ct,[t("div",dt,[b(rt)])])])]),_:1},8,["canView"]))}};export{_t as default};
