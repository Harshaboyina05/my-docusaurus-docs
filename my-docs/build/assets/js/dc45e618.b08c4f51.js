"use strict";(self.webpackChunkdocusaurus_documentation=self.webpackChunkdocusaurus_documentation||[]).push([[2841],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"Documentation/MindMap/ServiceNode",id:"Documentation/MindMap/ServiceNode",title:"ServiceNode",description:"When working with the Service Nodes in the Mind Map Designer, you can add multiple nodes to represent the microservices in your project. Here's an explanation of the fields that you see when double-click on a service node.",source:"@site/docs/Documentation/MindMap/ServiceNode.md",sourceDirName:"Documentation/MindMap",slug:"/Documentation/MindMap/ServiceNode",permalink:"/Docusaurus/docs/Documentation/MindMap/ServiceNode",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"UIandGateway",permalink:"/Docusaurus/docs/Documentation/MindMap/UIandGateway"},next:{title:"GlobalConfigurations",permalink:"/Docusaurus/docs/Documentation/MindMap/GlobalConfigurations"}},c={},p=[{value:"Available Service configuration options",id:"available-service-configuration-options",level:3},{value:"Application Name:",id:"application-name",level:4},{value:"Application Framework:",id:"application-framework",level:4},{value:"Package Name:",id:"package-name",level:4},{value:"Server Port:",id:"server-port",level:4}],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When working with the Service Nodes in the Mind Map Designer, you can add multiple nodes to represent the microservices in your project. Here's an explanation of the fields that you see when double-click on a service node."),(0,a.kt)("h3",{id:"available-service-configuration-options"},"Available Service configuration options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option name"),(0,a.kt)("th",{parentName:"tr",align:null},"Default value"),(0,a.kt)("th",{parentName:"tr",align:null},"Possible values"),(0,a.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Application Framework"),(0,a.kt)("td",{parentName:"tr",align:null},"java"),(0,a.kt)("td",{parentName:"tr",align:null},"java, Go"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PackageName"),(0,a.kt)("td",{parentName:"tr",align:null},"com.mycompany.myapp"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the packageFolder option")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ServerPort"),(0,a.kt)("td",{parentName:"tr",align:null},"9000"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"8080, 8081 or 9999 Depends on the app type")))),(0,a.kt)("h4",{id:"application-name"},"Application Name:"),(0,a.kt)("p",null,"Enter a descriptive name for the microservice. This name should reflect the specific functionality or purpose of the microservice within your project. It helps in identifying and differentiating between different microservices."),(0,a.kt)("h4",{id:"application-framework"},"Application Framework:"),(0,a.kt)("p",null,"Specify the framework you will be using to develop the microservice. This could be any programming language or framework that is suitable for building the backend logic of your microservice. For example, you might use Spring Boot, Node.js, Django, or Flask."),(0,a.kt)("h4",{id:"package-name"},"Package Name:"),(0,a.kt)("p",null,"Provide the package name for the microservice. The package name is used for organizing the code files and classes related to the microservice. It helps maintain a structured codebase and avoids naming conflicts within your project. It is typically written in the format of reversed domain name, such as com.example.microservice."),(0,a.kt)("h4",{id:"server-port"},"Server Port:"),(0,a.kt)("p",null,"Specify the port number on which the microservice will be running. This port number is used to access the microservice through the network. Each microservice should have a unique port number to avoid conflicts. Commonly used port numbers are in the range of 8000 to 8080, but you can choose any available port as per your project's requirements."),(0,a.kt)("p",null,"By providing these details for each service node, you can effectively define and organize the microservices within your project in the Mind Map Designer."))}d.isMDXComponent=!0}}]);