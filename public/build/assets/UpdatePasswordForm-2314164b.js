import{r as i,T as _,o as f,c as V,w as e,f as n,a as l,b as r,u as o,n as g}from"./app-b445de5a.js";import{_ as v}from"./ActionMessage-940df669.js";import{_ as y}from"./FormSection-652316f8.js";import{_ as d}from"./InputError-a7b269d8.js";import{_ as p}from"./InputLabel-ea47553d.js";import{_ as P}from"./PrimaryButton-c8ee3513.js";import{_ as c}from"./TextInput-6f1df14b.js";import"./SectionTitle-6b920cf5.js";import"./_plugin-vue_export-helper-c27b6911.js";const b={class:"col-span-6 sm:col-span-4"},k={class:"col-span-6 sm:col-span-4"},S={class:"col-span-6 sm:col-span-4"},j={__name:"UpdatePasswordForm",setup($){const u=i(null),m=i(null),s=_({current_password:"",password:"",password_confirmation:""}),w=()=>{s.put(route("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),u.value.focus()),s.errors.current_password&&(s.reset("current_password"),m.value.focus())}})};return(U,a)=>(f(),V(y,{onSubmitted:w},{title:e(()=>[n(" Update Password ")]),description:e(()=>[n(" Ensure your account is using a long, random password to stay secure. ")]),form:e(()=>[l("div",b,[r(p,{for:"current_password",value:"Current Password"}),r(c,{id:"current_password",ref_key:"currentPasswordInput",ref:m,modelValue:o(s).current_password,"onUpdate:modelValue":a[0]||(a[0]=t=>o(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),r(d,{message:o(s).errors.current_password,class:"mt-2"},null,8,["message"])]),l("div",k,[r(p,{for:"password",value:"New Password"}),r(c,{id:"password",ref_key:"passwordInput",ref:u,modelValue:o(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>o(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),r(d,{message:o(s).errors.password,class:"mt-2"},null,8,["message"])]),l("div",S,[r(p,{for:"password_confirmation",value:"Confirm Password"}),r(c,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>o(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),r(d,{message:o(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])])]),actions:e(()=>[r(v,{on:o(s).recentlySuccessful,class:"mr-3"},{default:e(()=>[n(" Saved. ")]),_:1},8,["on"]),r(P,{class:g({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:e(()=>[n(" Save ")]),_:1},8,["class","disabled"])]),_:1}))}};export{j as default};
