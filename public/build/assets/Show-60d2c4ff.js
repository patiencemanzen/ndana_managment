import{_ as i}from"./AppLayout-fd4d7e9f.js";import o from"./DeleteTeamForm-4937e172.js";import{S as r}from"./SectionBorder-520732a4.js";import l from"./TeamMemberManager-788af869.js";import n from"./UpdateTeamNameForm-24478e35.js";import{o as m,c,w as s,a,b as t,d as p,F as d,e as f}from"./app-ce4b96a3.js";import"./ActionSection-3bd4c8ff.js";import"./SectionTitle-9d0b3a21.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ConfirmationModal-b139fa79.js";import"./Modal-016af87d.js";import"./DangerButton-428d2d57.js";import"./SecondaryButton-28efd5ae.js";import"./ActionMessage-b15f5fb8.js";import"./DialogModal-de2ac3a5.js";import"./FormSection-9c18e8c3.js";import"./InputError-16995a67.js";import"./InputLabel-a398b0fe.js";import"./PrimaryButton-d71e726a.js";import"./TextInput-85f1013d.js";const u=a("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},q={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,g)=>(m(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[a("div",null,[a("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(m(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{q as default};
