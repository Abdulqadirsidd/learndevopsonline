"use strict";(self.webpackChunkldo_docs=self.webpackChunkldo_docs||[]).push([[6310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,y=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:11},i="10-Payment",p={unversionedId:"RoboShop-Project-V3/payment",id:"RoboShop-Project-V3/payment",title:"10-Payment",description:"This service is responsible for payments in RoboShop e-commerce app.",source:"@site/docs/RoboShop-Project-V3/payment.md",sourceDirName:"RoboShop-Project-V3",slug:"/RoboShop-Project-V3/payment",permalink:"/learndevopsonline/build/docs/RoboShop-Project-V3/payment",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/RoboShop-Project-V3/payment.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"09-RabbitMQ",permalink:"/learndevopsonline/build/docs/RoboShop-Project-V3/rabbitmq"},next:{title:"11-Dispatch",permalink:"/learndevopsonline/build/docs/RoboShop-Project-V3/dispatch"}},s={},l=[],c={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"10-payment"},"10-Payment"),(0,a.kt)("p",null,"This service is responsible for payments in RoboShop e-commerce app.\nThis service is written on ",(0,a.kt)("inlineCode",{parentName:"p"},"Python 3"),", So need it to run this app."),(0,a.kt)("admonition",{title:"Hint",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Developer has chosen Python, Check with developer which version of Python is needed.")),(0,a.kt)("p",null,"Install Python 3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install python3 gcc python3-devel -y\n")),(0,a.kt)("p",null,"Configure the application."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Our application developed by the developer of our org and it is not having any RPM software just like other softwares. So we need to configure every step manually")),(0,a.kt)("admonition",{title:"Recap",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"We already discussed in Linux basics section that applications should run as nonroot user.")),(0,a.kt)("p",null,"Add application User"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"useradd roboshop\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"User ",(0,a.kt)("strong",{parentName:"p"},"roboshop")," is a function / daemon user to run the application. Apart from that we dont use this user to login to server."),(0,a.kt)("p",{parentName:"admonition"},"Also, username ",(0,a.kt)("strong",{parentName:"p"},"roboshop")," has been picked because it more suits to our project name.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We keep application in one standard location. This is a usual practice that runs in the organization.")),(0,a.kt)("p",null,"Lets setup an app directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir /app \n")),(0,a.kt)("p",null,"Download the application code to created app directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L -o /tmp/payment.zip https://roboshop-artifacts.s3.amazonaws.com/payment-v3.zip \ncd /app \nunzip /tmp/payment.zip\n")),(0,a.kt)("p",null,"Every application is developed by development team will have some common softwares that they use as libraries. This application also have the same way of defined dependencies in the application configuration."),(0,a.kt)("p",null,"Lets download the dependencies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /app \npip3 install -r requirements.txt\n")),(0,a.kt)("p",null,"We need to setup a new service in ",(0,a.kt)("strong",{parentName:"p"},"systemd")," so ",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl")," can manage this service"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We already discussed in linux basics that advantages of systemctl managing services, Hence we are taking that approach. Which is also a standard way in the OS.")),(0,a.kt)("p",null,"Setup SystemD Payment Service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-unit",metastring:"file (systemd) title=/etc/systemd/system/payment.service",file:!0,"(systemd)":!0,title:"/etc/systemd/system/payment.service"},"[Unit]\nDescription=Payment Service\n\n[Service]\nUser=root\nWorkingDirectory=/app\n// highlight-start\nEnvironment=CART_HOST=<CART-SERVER-IPADDRESS>\nEnvironment=CART_PORT=8080\nEnvironment=USER_HOST=<USER-SERVER-IPADDRESS>\nEnvironment=USER_PORT=8080\nEnvironment=AMQP_HOST=<RABBITMQ-SERVER-IPADDRESS>\n// highlight-end\nEnvironment=AMQP_USER=roboshop\nEnvironment=AMQP_PASS=roboshop123\n\nExecStart=/usr/local/bin/uwsgi --ini payment.ini\nExecStop=/bin/kill -9 $MAINPID\nSyslogIdentifier=payment\n\n[Install]\nWantedBy=multi-user.target\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Hint! You can create file by using ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"vim /etc/systemd/system/payment.service")))),(0,a.kt)("p",null,"Load the service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl daemon-reload\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This above command is because we added a new service, We are telling systemd to reload so it will detect new service.")),(0,a.kt)("p",null,"Start the service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable payment \nsystemctl start payment\n")))}m.isMDXComponent=!0}}]);