import{r as d,T as _,o as y,c as w,w as e,f as t,a as c,b as s,u as a,q as h,n as k}from"./app-1f969deb.js";import{_ as v}from"./ActionSection-2f0a14ba.js";import{_ as m}from"./DangerButton-329e3f70.js";import{_ as x}from"./DialogModal-4f283144.js";import{_ as g}from"./InputError-d8a9ba02.js";import{_ as C}from"./SecondaryButton-422b9664.js";import{_ as D}from"./TextInput-64aba377.js";import"./SectionTitle-31ac96e9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-806d67af.js";const b=c("div",{class:"max-w-xl text-sm text-gray-600 dark:text-gray-400"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ",-1),V={class:"mt-5"},$={class:"mt-4"},z={__name:"DeleteUserForm",setup(A){const r=d(!1),l=d(null),o=_({password:""}),p=()=>{r.value=!0,setTimeout(()=>l.value.focus(),250)},u=()=>{o.delete(route("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>n(),onError:()=>l.value.focus(),onFinish:()=>o.reset()})},n=()=>{r.value=!1,o.reset()};return(U,i)=>(y(),w(v,null,{title:e(()=>[t(" Delete Account ")]),description:e(()=>[t(" Permanently delete your account. ")]),content:e(()=>[b,c("div",V,[s(m,{onClick:p},{default:e(()=>[t(" Delete Account ")]),_:1})]),s(x,{show:r.value,onClose:n},{title:e(()=>[t(" Delete Account ")]),content:e(()=>[t(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),c("div",$,[s(D,{ref_key:"passwordInput",ref:l,modelValue:a(o).password,"onUpdate:modelValue":i[0]||(i[0]=f=>a(o).password=f),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",autocomplete:"current-password",onKeyup:h(u,["enter"])},null,8,["modelValue","onKeyup"]),s(g,{message:a(o).errors.password,class:"mt-2"},null,8,["message"])])]),footer:e(()=>[s(C,{onClick:n},{default:e(()=>[t(" Cancel ")]),_:1}),s(m,{class:k(["ml-3",{"opacity-25":a(o).processing}]),disabled:a(o).processing,onClick:u},{default:e(()=>[t(" Delete Account ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{z as default};