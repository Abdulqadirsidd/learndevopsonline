"use strict";(self.webpackChunkldo_docs=self.webpackChunkldo_docs||[]).push([[3601],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?o.createElement(m,s(s({ref:t},c),{},{components:n})):o.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:r,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:13},s="Steps to Setup IntelliJ Idea in Desktop and Steps to How to push the code",a={unversionedId:"How-Tos/setup-intellij-in-desktop",id:"How-Tos/setup-intellij-in-desktop",title:"Steps to Setup IntelliJ Idea in Desktop and Steps to How to push the code",description:"",source:"@site/docs/How-Tos/13-setup-intellij-in-desktop.md",sourceDirName:"How-Tos",slug:"/How-Tos/setup-intellij-in-desktop",permalink:"/learndevopsonline/build/docs/How-Tos/setup-intellij-in-desktop",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/How-Tos/13-setup-intellij-in-desktop.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"How to Delete default VPC.",permalink:"/learndevopsonline/build/docs/How-Tos/how-to-delete-default-vpc"},next:{title:"Steps to Increase disk of LVM in RHEL 9.",permalink:"/learndevopsonline/build/docs/How-Tos/extend-lvm-disk-in-rhel9"}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"steps-to-setup-intellij-idea-in-desktop-and-steps-to-how-to-push-the-code"},"Steps to Setup IntelliJ Idea in Desktop and Steps to How to push the code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'1. Install GitBash if you are window guy\n        - MacOS (brew install git)\n        - Linux (apt-get install git)\n2. Install IntelliJ Idea (Community Edition)\n3. Create a GitHub Repo\n4. Create a folder gitrepos on your desktop\n5. Open gitrepos and right click and click on "GitBash here"\n6. git clone URL\n7. Open Editor, Open gitrepos, Start editing, Commit from editor, Push from editor.\n    (While push for first time it will ask for GitHub login, Choose token approach)\n')))}u.isMDXComponent=!0}}]);