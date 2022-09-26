"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[7306],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=c(r),h=n,b=m["".concat(p,".").concat(h)]||m[h]||u[h]||o;return r?a.createElement(b,l(l({ref:t},i),{},{components:r})):a.createElement(b,l({ref:t},i))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2595:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={slug:"welcome",title:"Welcome",authors:["vara-bonthu"],tags:["aws"]},l=void 0,s={permalink:"/blog/welcome",editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/blog/blog/2022-09-19-welcome/index.md",source:"@site/blog/2022-09-19-welcome/index.md",title:"Welcome",description:"Data on EKS Blogs & Benchmarks",date:"2022-09-19T00:00:00.000Z",formattedDate:"September 19, 2022",tags:[{label:"aws",permalink:"/blog/tags/aws"}],readingTime:.375,hasTruncateMarker:!1,authors:[{name:"Vara Bonthu",title:"Maintainer of Data on EKS @ AWS",url:"https://github.com/vara-bonthu",imageURL:"https://github.com/vara-bonthu.png",key:"vara-bonthu"}],frontMatter:{slug:"welcome",title:"Welcome",authors:["vara-bonthu"],tags:["aws"]},nextItem:{title:"EMR on EKS Best Practices",permalink:"/blog/EMR on EKS Best Practices"}},p={authorsImageUrls:[void 0]},c=[{value:"Data on EKS Blogs &amp; Benchmarks",id:"data-on-eks-blogs--benchmarks",level:2}],i={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"data-on-eks-blogs--benchmarks"},"Data on EKS Blogs & Benchmarks"),(0,n.kt)("p",null,"In this section you will find ",(0,n.kt)("inlineCode",{parentName:"p"},"Blogs")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Benchmark reports")," for the following topics."),(0,n.kt)("p",null,"AWS Data Analytics and ML blogs are featured a short blogs."),(0,n.kt)("p",null,"\ud83d\ude80 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/emr-eks.html"},"EMR on EKS")),(0,n.kt)("p",null,"\ud83d\ude80 ",(0,n.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/running-on-kubernetes.html"},"Spark on EKS")),(0,n.kt)("p",null,"\ud83d\ude80 Custom Kubernetes Schedulers (e.g., ",(0,n.kt)("a",{parentName:"p",href:"https://yunikorn.apache.org/"},"Apache YuniKorn"),", ",(0,n.kt)("a",{parentName:"p",href:"https://volcano.sh/en/"},"Volcano"),")"),(0,n.kt)("p",null,"\ud83d\ude80 Job Schedulers (e.g., ",(0,n.kt)("a",{parentName:"p",href:"https://airflow.apache.org/"},"Apache Airflow"),", ",(0,n.kt)("a",{parentName:"p",href:"https://argoproj.github.io/argo-workflows/"},"Argo Workflows"),")"),(0,n.kt)("p",null,"\ud83d\ude80 Distributed Databases (e.g., ",(0,n.kt)("a",{parentName:"p",href:"https://cassandra.apache.org/_/blog/Cassandra-on-Kubernetes-A-Beginners-Guide.html"},"Cassandra"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cockroachdb/cockroach-operator"},"CockroachDB"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mongodb/mongodb-kubernetes-operator"},"MongoDB")," etc.)"),(0,n.kt)("p",null,"\ud83d\ude80 Streaming Platforms (e.g., ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/kafka"},"Apache Kafka"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/flink"},"Apache Flink"),", Apache Beam etc.)"))}u.isMDXComponent=!0}}]);