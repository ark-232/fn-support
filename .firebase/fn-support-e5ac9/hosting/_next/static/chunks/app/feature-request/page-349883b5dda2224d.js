(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[467],{7604:function(e,t,a){Promise.resolve().then(a.bind(a,4587))},568:function(e,t,a){"use strict";a.d(t,{Z:function(){return x}});var n=a(7437),s=a(6612),l=a(6648),r=a(2382),o=a(2265),i=a(5282),c=a(6391),d=a(4446),u=a(1263),m=a(7138),h=a(4839),f=a(6164);let p=e=>{let t,{children:a,url:p,className:x,width:b=200,height:g=125,quality:j=50,layout:y="fixed",isStatic:N=!1,imageSrc:w=""}=e;if(N)t=w;else{let e=(0,r.c)({url:p,screenshot:!0,meta:!1,embed:"screenshot.url",colorScheme:"dark","viewport.isMobile":!0,"viewport.deviceScaleFactor":1,"viewport.width":3*b,"viewport.height":3*g});t="https://api.microlink.io/?".concat(e)}let[v,k]=o.useState(!1),[C,F]=o.useState(!1);o.useEffect(()=>{F(!0)},[]);let S=(0,i.c)(0),q=(0,c.q)(S,{stiffness:100,damping:15});return(0,n.jsxs)(n.Fragment,{children:[C?(0,n.jsx)("div",{className:"hidden",children:(0,n.jsx)(l.default,{src:t,width:b,height:g,quality:j,layout:y,priority:!0,alt:"hidden image"})}):null,(0,n.jsxs)(s.fC,{openDelay:50,closeDelay:100,onOpenChange:e=>{k(e)},children:[(0,n.jsx)(s.xz,{onMouseMove:e=>{let t=e.target.getBoundingClientRect(),a=(e.clientX-t.left-t.width/2)/2;S.set(a)},className:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,f.m6)((0,h.W)(t))}("text-black dark:text-white",x),href:p,children:a}),(0,n.jsx)(s.VY,{className:"[transform-origin:var(--radix-hover-card-content-transform-origin)]",side:"top",align:"center",sideOffset:10,children:(0,n.jsx)(d.M,{children:v&&(0,n.jsx)(u.E.div,{initial:{opacity:0,y:20,scale:.6},animate:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:260,damping:20}},exit:{opacity:0,y:20,scale:.6},className:"shadow-xl rounded-xl",style:{x:q},children:(0,n.jsx)(m.default,{href:p,className:"block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800",style:{fontSize:0},children:(0,n.jsx)(l.default,{src:N?w:t,width:b,height:g,quality:j,layout:y,priority:!0,className:"rounded-lg",alt:"preview image"})})})})})]})]})};function x(){return(0,n.jsxs)("footer",{className:"w-full p-4 bg-gray-800 text-white flex flex-col items-center",children:[(0,n.jsxs)("div",{className:"flex flex-col items-start",children:[(0,n.jsx)("h2",{className:"text-lg font-bold",children:"Helpful Links"}),(0,n.jsx)(p,{url:"https://github.com/FalconNetCohort",className:"mt-2",children:"GitHub Organization"}),(0,n.jsx)(p,{url:"https://falconnet.us",className:"mt-2",children:"FalconNet"}),(0,n.jsx)(p,{url:"https://apps.apple.com/us/app/falconnet/id6445867869",className:"mt-2",children:"Apple App Store"}),(0,n.jsx)(p,{url:"https://play.google.com/store/apps/details?id=com.arkwerk.falconnet&pcampaignid=web_share",className:"mt-2",children:"Google Play Store"})]}),(0,n.jsx)("div",{className:"mt-4",children:(0,n.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," FalconSupport. All rights reserved."]})})]})}},8148:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(7437),s=a(7138);function l(){return(0,n.jsxs)("header",{className:"w-full p-4 bg-blue-600 text-white flex justify-between items-center",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold",children:(0,n.jsx)(s.default,{href:"/",className:"mx-2",children:"Falcon Support"})}),(0,n.jsxs)("nav",{children:[(0,n.jsx)(s.default,{href:"/feature-request",className:"mx-2",children:"Feature Request"}),(0,n.jsx)(s.default,{href:"/support-bug-report",className:"mx-2",children:"Support/Bug Report"}),(0,n.jsx)(s.default,{href:"/dashboard",className:"mx-2",children:"Admin Dashboard"}),(0,n.jsx)(s.default,{href:"/user-guides",className:"mx-2",children:"User Guide Admin"})]})]})}},4587:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var n=a(7437),s=a(2265),l=a(8148),r=a(568),o=a(177),i=a(9842);function c(){let[e,t]=(0,s.useState)({name:"",rank:"",email:"",jobTitle:"",featureDescription:"",supplementalInfo:"",chainOfCommand:"no"}),[a,c]=(0,s.useState)(null),d=a=>{let{name:n,value:s}=a.target;t({...e,[n]:s})},u=async t=>{t.preventDefault();try{await (0,i.ET)((0,i.hJ)(o.db,"featureRequests"),{...e,attachment:a?a.name:""}),alert("Feature request submitted successfully!"),m()}catch(e){console.error(e),alert("Error submitting feature request")}},m=()=>{t({name:"",rank:"",email:"",jobTitle:"",featureDescription:"",supplementalInfo:"",chainOfCommand:"no"}),c(null)};return(0,n.jsxs)("div",{className:"flex flex-col min-h-screen bg-gray-900 text-white",children:[(0,n.jsx)(l.Z,{}),(0,n.jsxs)("main",{className:"flex-grow flex flex-col items-center justify-center p-6",children:[(0,n.jsx)("h1",{className:"text-3xl mb-6",children:"Feature Request Form"}),(0,n.jsxs)("form",{className:"w-full max-w-lg",onSubmit:u,children:[(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"name",children:"Name"}),(0,n.jsx)("input",{type:"text",name:"name",id:"name",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",value:e.name,onChange:d,required:!0})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"rank",children:"Rank"}),(0,n.jsx)("input",{type:"text",name:"rank",id:"rank",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",value:e.rank,onChange:d,required:!0})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),(0,n.jsx)("input",{type:"email",name:"email",id:"email",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",value:e.email,onChange:d,required:!0})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"jobTitle",children:"Job Title"}),(0,n.jsx)("input",{type:"text",name:"jobTitle",id:"jobTitle",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",value:e.jobTitle,onChange:d,required:!0})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"featureDescription",children:"Feature Description"}),(0,n.jsx)("textarea",{name:"featureDescription",id:"featureDescription",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",value:e.featureDescription,onChange:d,required:!0})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"attachment",children:"Attachment"}),(0,n.jsx)("input",{type:"file",name:"attachment",id:"attachment",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",onChange:e=>{c(e.target.files&&e.target.files[0])}})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"supplementalInfo",children:"Supplemental Info"}),(0,n.jsx)("textarea",{name:"supplementalInfo",id:"supplementalInfo",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",value:e.supplementalInfo,onChange:d})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"chainOfCommand",children:"Has this info been sent up the chain of command?"}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("input",{type:"radio",name:"chainOfCommand",value:"yes",checked:"yes"===e.chainOfCommand,onChange:d}),(0,n.jsx)("span",{className:"ml-2",children:"Yes"}),(0,n.jsx)("input",{type:"radio",name:"chainOfCommand",value:"no",checked:"no"===e.chainOfCommand,onChange:d,className:"ml-6"}),(0,n.jsx)("span",{className:"ml-2",children:"No"})]})]}),(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline",children:"Submit"})})]})]}),(0,n.jsx)(r.Z,{})]})}},177:function(e,t,a){"use strict";a.d(t,{I:function(){return o},db:function(){return i}});var n=a(5236),s=a(9842),l=a(5186);let r=(0,n.ZF)({apiKey:"AIzaSyDkSTrfVNFYiy26b0heGsTrnX6nCZaqVUw",authDomain:"fn-support-e5ac9.firebaseapp.com",projectId:"fn-support-e5ac9",storageBucket:"fn-support-e5ac9.appspot.com",messagingSenderId:"734672940110",appId:"1:734672940110:web:5cf194766053d357a6a71f",measurementId:"G-XVL9ER0BX7"}),o=(0,l.v0)(r),i=(0,s.ad)(r)}},function(e){e.O(0,[533,358,144,896,666,971,23,744],function(){return e(e.s=7604)}),_N_E=e.O()}]);