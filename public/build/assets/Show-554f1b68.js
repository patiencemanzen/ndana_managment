import{_ as i}from"./AppLayout-1c6005e0.js";import o from"./DeleteTeamForm-908754b5.js";import{S as r}from"./SectionBorder-d0a98e13.js";import l from"./TeamMemberManager-da44a8cb.js";import n from"./UpdateTeamNameForm-c469a576.js";import{o as m,c,w as s,a,b as t,d as p,F as d,e as f}from"./app-a5367eaf.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ActionSection-d6eda7e4.js";import"./SectionTitle-5b474c6c.js";import"./ConfirmationModal-df46476b.js";import"./Modal-060ecfaf.js";import"./DangerButton-37f574f5.js";import"./SecondaryButton-02da56b2.js";import"./ActionMessage-22477484.js";import"./DialogModal-223559c2.js";import"./FormSection-69d29822.js";import"./InputError-dc86e91d.js";import"./InputLabel-945166ad.js";import"./PrimaryButton-ef908c0a.js";import"./TextInput-d2db4071.js";const u=a("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},q={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,g)=>(m(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[a("div",null,[a("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(m(),p(d,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):f("",!0)])])]),_:1}))}};export{q as default};