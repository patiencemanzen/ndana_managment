import{j as s,k as n,v as u,o as l,d as i}from"./app-b445de5a.js";const k=["value"],g={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{type:String,default:null}},emits:["update:checked"],setup(e,{emit:r}){const d=e,o=s({get(){return d.checked},set(a){r("update:checked",a)}});return(a,t)=>n((l(),i("input",{"onUpdate:modelValue":t[0]||(t[0]=c=>o.value=c),type:"checkbox",value:e.value,class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"},null,8,k)),[[u,o.value]])}};export{g as _};
