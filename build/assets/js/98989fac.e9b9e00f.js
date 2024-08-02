"use strict";(self.webpackChunkldo_docs=self.webpackChunkldo_docs||[]).push([[1625],{3905:(e,o,t)=>{t.d(o,{Zo:()=>u,kt:()=>b});var r=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),p=function(e){var o=r.useContext(i),t=o;return e&&(t="function"==typeof e?e(o):c(c({},o),e)),t},u=function(e){var o=p(e.components);return r.createElement(i.Provider,{value:o},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=n,b=s["".concat(i,".").concat(m)]||s[m]||d[m]||a;return t?r.createElement(b,c(c({ref:o},u),{},{components:t})):r.createElement(b,c({ref:o},u))}));function b(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var i in o)hasOwnProperty.call(o,i)&&(l[i]=o[i]);l.originalType=e,l[s]="string"==typeof e?e:n,c[1]=l;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2553:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),n=(t(7294),t(3905));const a={sidebar_position:3},c="02-Catalogue",l={unversionedId:"RoboShop-Project-Docker/catalogue",id:"RoboShop-Project-Docker/catalogue",title:"02-Catalogue",description:"Replace mongo-ip with actual IP or DNS record of mongodb server",source:"@site/docs/RoboShop-Project-Docker/catalogue.md",sourceDirName:"RoboShop-Project-Docker",slug:"/RoboShop-Project-Docker/catalogue",permalink:"/learndevopsonline/build/docs/RoboShop-Project-Docker/catalogue",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/RoboShop-Project-Docker/catalogue.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"01-Frontend",permalink:"/learndevopsonline/build/docs/RoboShop-Project-Docker/frontend"},next:{title:"03-User",permalink:"/learndevopsonline/build/docs/RoboShop-Project-Docker/user"}},i={},p=[],u={toc:p};function s(e){let{components:o,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"02-catalogue"},"02-Catalogue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'\ndnf install docker -y\ndocker run -d -p 8080:8080 -e MONGO=true -e MONGO_URL="mongodb://mongo-ip:27017/catalogue" public.ecr.aws/w8x4g9h7/roboshop-v3/catalogue\n\n')),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"mongo-ip")," with actual IP or DNS record of mongodb server")),(0,n.kt)("p",null,"Catalogue requires master-data to be loaded."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"\ndocker run -e DB_TYPE=mongo -e APP_GIT_URL=https://github.com/roboshop-devops-project-v3/catalogue -e DB_HOST=mongo-ip -e SCHEMA_FILE=db/master-data.js public.ecr.aws/w8x4g9h7/roboshop-v3/schema-load\n\n")))}s.isMDXComponent=!0}}]);