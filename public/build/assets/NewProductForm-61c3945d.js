import{r as u,T as x,p as I,s as C,o as _,d as f,b as t,w as n,e as $,F as S,f as c,a as s,u as r,k as R,y as q,x as A,h as B,g as F,t as z}from"./app-b445de5a.js";import{_ as N}from"./PrimaryButton-c8ee3513.js";import{_ as Q}from"./DialogModal-3e1d4047.js";import{_ as U}from"./SecondaryButton-9575f11b.js";import{_ as v}from"./TextInput-6f1df14b.js";import{_ as y}from"./SelectInput-4d7b34f4.js";import{_ as L}from"./TextareaInput-95369a9a.js";import{_ as d}from"./InputLabel-ea47553d.js";import{A as W}from"./alert-936cc802.js";import"./Modal-19c8cfeb.js";import"./_plugin-vue_export-helper-c27b6911.js";const j={class:"mt-4"},E={class:"mb-4"},O={class:"col-span-6 sm:col-span-4 mb-4"},G={class:"mt-2"},H={class:"mb-4"},J=s("option",{value:"",disabled:"",selected:""},"Select Product Category",-1),K=s("option",{value:"Men"},"Men",-1),X=s("option",{value:"Women"},"Women",-1),Y={class:"mb-4"},Z={class:"mb-4"},ee=s("option",{value:"",disabled:"",selected:""},"Select Product Type",-1),oe=s("option",{value:"Shoes"},"Shoes",-1),te={class:"mb-4"},le=s("option",{value:""},"Select Product Investor",-1),se=["value"],ae={class:"mb-4"},re={class:"mb-4"},ne=s("option",{value:"",disabled:"",selected:""},"Select Product Section",-1),de=s("option",{value:"Magazine"},"Magazine",-1),ue=s("option",{value:"Bodaboda"},"Bodaboda",-1),ce={class:"mb-4"},ie={class:"mb-4"},pe={key:0,class:"absolute top-0 right-0 left-0 bottom-0 w-full h-full z-50 bg-gray-900/80 flex items-center justify-center"},me=s("div",{class:"w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"},null,-1),_e=[me],Ne={__name:"NewProductForm",setup(fe){const h=u(!1),w=u([]),b=u(null),i=u(null),p=u(!1),P=u(!1),V=u(""),g=u("success"),k=()=>h.value=!0,m=()=>h.value=!1,e=x({name:"",category:"",color:"",type:"",investor_id:"",description:"",meta_desc:"",quantity:"",price:""}),D=()=>{p.value=!0,m();let a=new FormData;a.append("name",e.name),a.append("category",e.category),a.append("color",e.color),a.append("type",e.type),a.append("investor_id",e.investor_id),a.append("description",e.description),a.append("meta_desc",e.meta_desc),a.append("image",i.value.files[0]),a.append("price",e.price),a.append("quantity",e.quantity),C.post(route("products.store"),a).then(o=>{P.value=!0,V.value=o.data.message,g.value="success",p.value=!1,m()}).catch(o=>{P.value=!0,V.value=o.response.data.message,g.value="error",p.value=!1,k()})},M=()=>{i.value.click()},T=()=>{const a=i.value.files[0];if(!a)return;const o=new FileReader;o.onload=l=>{b.value=l.target.result},o.readAsDataURL(a)};return I(async()=>{let a=await C.get("/api/investors");w.value=a.data}),(a,o)=>(_(),f(S,null,[t(N,{type:"button",onClick:k},{default:n(()=>[c(" create new ")]),_:1}),t(Q,{show:h.value,onClose:m},{title:n(()=>[c(" Register New Product ")]),content:n(()=>[c(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),s("div",j,[s("div",E,[t(d,{for:"Product Name",value:"Product Name"}),t(v,{modelValue:r(e).name,"onUpdate:modelValue":o[0]||(o[0]=l=>r(e).name=l),type:"text",class:"mt-1 block w-full",placeholder:"Product Name",autocomplete:"off"},null,8,["modelValue"])]),s("div",O,[s("input",{ref_key:"photoInput",ref:i,type:"file",class:"hidden",onChange:T},null,544),t(d,{for:"photo",value:"Product Image"}),R(s("div",G,[s("span",{class:"block rounded w-20 h-20 bg-cover bg-no-repeat bg-center",style:A("background-image: url('"+b.value+"');")},null,4)],512),[[q,b.value]]),t(U,{class:"mt-2 mr-2",type:"button",onClick:B(M,["prevent"])},{default:n(()=>[c(" Select A New Product Image ")]),_:1},8,["onClick"])]),s("div",H,[t(d,{for:"Product Category",value:"Product Category"}),t(y,{modelValue:r(e).category,"onUpdate:modelValue":o[1]||(o[1]=l=>r(e).category=l),class:"mt-1 block w-full",placeholder:"Product Category"},{default:n(()=>[J,K,X]),_:1},8,["modelValue"])]),s("div",Y,[t(d,{for:"Product Color",value:"Product Color"}),t(v,{type:"text",class:"mt-1 block w-full",modelValue:r(e).color,"onUpdate:modelValue":o[2]||(o[2]=l=>r(e).color=l),placeholder:"Product Color",autocomplete:"off"},null,8,["modelValue"])]),s("div",Z,[t(d,{for:"Product Type",value:"Product Type"}),t(y,{class:"mt-1 block w-full",placeholder:"Product Type",modelValue:r(e).type,"onUpdate:modelValue":o[3]||(o[3]=l=>r(e).type=l)},{default:n(()=>[ee,oe]),_:1},8,["modelValue"])]),s("div",te,[t(d,{for:"Product Investor",value:"Product Investor"}),t(y,{class:"mt-1 block w-full",placeholder:"Product Investor",modelValue:r(e).investor_id,"onUpdate:modelValue":o[4]||(o[4]=l=>r(e).investor_id=l)},{default:n(()=>[le,(_(!0),f(S,null,F(w.value,l=>(_(),f("option",{value:l.id,key:l.id},z(l.name),9,se))),128))]),_:1},8,["modelValue"])]),s("div",ae,[t(d,{for:"Product Description",value:"Product Description"}),t(L,{class:"mt-1 block w-full",placeholder:"Product Description",modelValue:r(e).description,"onUpdate:modelValue":o[5]||(o[5]=l=>r(e).description=l)},null,8,["modelValue"])]),s("div",re,[t(d,{for:"Product Section",value:"Product Section"}),t(y,{class:"mt-1 block w-full",placeholder:"Product Section",modelValue:r(e).meta_desc,"onUpdate:modelValue":o[6]||(o[6]=l=>r(e).meta_desc=l)},{default:n(()=>[ne,de,ue]),_:1},8,["modelValue"])]),s("div",ce,[t(d,{for:"Product Quantity",value:"Product Quantity"}),t(v,{type:"number",class:"mt-1 block w-full",placeholder:"Product Quantity",modelValue:r(e).quantity,"onUpdate:modelValue":o[7]||(o[7]=l=>r(e).quantity=l)},null,8,["modelValue"])]),s("div",ie,[t(d,{for:"Product Price",value:"Product Price"}),t(v,{class:"mt-1 block w-full",placeholder:"200, 000",modelValue:r(e).price,"onUpdate:modelValue":o[8]||(o[8]=l=>r(e).price=l)},null,8,["modelValue"])])])]),footer:n(()=>[t(U,{onClick:m},{default:n(()=>[c(" Cancel ")]),_:1}),t(N,{class:"ml-3 cursor-pointer",onClick:o[9]||(o[9]=l=>D())},{default:n(()=>[c(" submit ")]),_:1})]),_:1},8,["show"]),p.value?(_(),f("div",pe,_e)):$("",!0),t(W,{hasResponse:P.value,response:a.response,responseType:g.value},null,8,["hasResponse","response","responseType"])],64))}};export{Ne as default};
