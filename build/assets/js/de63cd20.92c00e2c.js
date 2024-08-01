"use strict";(self.webpackChunkldo_docs=self.webpackChunkldo_docs||[]).push([[6259],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:9},r="08-Shipping",s={unversionedId:"RoboShop-Project-Docker/shipping",id:"RoboShop-Project-Docker/shipping",title:"08-Shipping",description:"Shipping service is responsible for finding the distance of the package to be shipped and calculate the price based on that.",source:"@site/docs/RoboShop-Project-Docker/shipping.md",sourceDirName:"RoboShop-Project-Docker",slug:"/RoboShop-Project-Docker/shipping",permalink:"/learndevopsonline/build/docs/RoboShop-Project-Docker/shipping",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/RoboShop-Project-Docker/shipping.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"07-MySQL",permalink:"/learndevopsonline/build/docs/RoboShop-Project-Docker/mysql"},next:{title:"09-RabbitMQ",permalink:"/learndevopsonline/build/docs/RoboShop-Project-Docker/rabbitmq"}},p={},l=[],c={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"08-shipping"},"08-Shipping"),(0,o.kt)("p",null,"Shipping service is responsible for finding the distance of the package to be shipped and calculate the price based on that."),(0,o.kt)("p",null,"Shipping service is written in Java, Hence we need to install Java."),(0,o.kt)("p",null,"Maven is a Java Packaging software, Hence we are going to install ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"maven")),", This indeed takes care of java installation. "),(0,o.kt)("admonition",{title:"Hint",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Developer has chosen Maven, Check with developer which version of Maven is needed.\nHere for our requirement java >= 1.8 & maven >=3.5 should work.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install maven -y\n")),(0,o.kt)("p",null,"Configure the application."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Our application developed by the developer of our org and it is not having any RPM software just like other softwares. So we need to configure every step manually")),(0,o.kt)("admonition",{title:"Recap",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"We already discussed in Linux basics section that applications should run as nonroot user.")),(0,o.kt)("p",null,"Add application User"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"useradd roboshop\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"User ",(0,o.kt)("strong",{parentName:"p"},"roboshop")," is a function / daemon user to run the application. Apart from that we dont use this user to login to server."),(0,o.kt)("p",{parentName:"admonition"},"Also, username ",(0,o.kt)("strong",{parentName:"p"},"roboshop")," has been picked because it more suits to our project name.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We keep application in one standard location. This is a usual practice that runs in the organization.")),(0,o.kt)("p",null,"Lets setup an app directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir /app \n")),(0,o.kt)("p",null,"Download the application code to created app directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L -o /tmp/shipping.zip https://roboshop-artifacts.s3.amazonaws.com/shipping-v3.zip \ncd /app \nunzip /tmp/shipping.zip\n")),(0,o.kt)("p",null,"Every application is developed by development team will have some common softwares that they use as libraries. This application also have the same way of defined dependencies in the application configuration."),(0,o.kt)("p",null,"Lets download the dependencies & build the application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd /app \nmvn clean package \nmv target/shipping-1.0.jar shipping.jar \n")),(0,o.kt)("p",null,"We need to setup a new service in ",(0,o.kt)("strong",{parentName:"p"},"systemd")," so ",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl")," can manage this service"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We already discussed in linux basics that advantages of systemctl managing services, Hence we are taking that approach. Which is also a standard way in the OS.")),(0,o.kt)("p",null,"Setup SystemD Shipping Service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-unit",metastring:"file (systemd) title=/etc/systemd/system/shipping.service",file:!0,"(systemd)":!0,title:"/etc/systemd/system/shipping.service"},"[Unit]\nDescription=Shipping Service\n\n[Service]\nUser=roboshop\n// highlight-start\nEnvironment=CART_ENDPOINT=<CART-SERVER-IPADDRESS>:8080\nEnvironment=DB_HOST=<MYSQL-SERVER-IPADDRESS>\n// highlight-end\nExecStart=/bin/java -jar /app/shipping.jar\nSyslogIdentifier=shipping\n\n[Install]\nWantedBy=multi-user.target\n\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Hint! You can create file by using ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"vim /etc/systemd/system/shipping.service")))),(0,o.kt)("p",null,"Load the service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl daemon-reload\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This above command is because we added a new service, We are telling systemd to reload so it will detect new service.")),(0,o.kt)("p",null,"Start the service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable shipping \nsystemctl start shipping\n")),(0,o.kt)("p",null,"For this application to work fully functional we need to load schema to the Database."),(0,o.kt)("admonition",{title:"Info",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Schemas are usually part of application code and developer will provide them as part of development.")),(0,o.kt)("p",null,"We need to load the schema. To load schema we need to install mysql client."),(0,o.kt)("p",null,"To have it installed we can use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"dnf install mysql -y \n")),(0,o.kt)("p",null,"Load Schema, Schema in database is the structure to it like what tables to be created and their necessary application layouts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -h <MYSQL-SERVER-IPADDRESS> -uroot -pRoboShop@1 < /app/db/schema.sql\n")),(0,o.kt)("p",null,"Create app user, MySQL expects a password authentication, Hence we need to create the user in mysql database for shipping app to connect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -h <MYSQL-SERVER-IPADDRESS> -uroot -pRoboShop@1 < /app/db/app-user.sql \n")),(0,o.kt)("p",null,"Load Master Data, This includes the data of all the countries and their cities with distance to those cities."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -h <MYSQL-SERVER-IPADDRESS> -uroot -pRoboShop@1 < /app/db/master-data.sql\n")),(0,o.kt)("p",null,"This service needs a restart because it is dependent on schema, After loading schema only it will work as expected, Hence we are restarting this service. This"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl restart shipping\n")))}d.isMDXComponent=!0}}]);