(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[989],{9488:function(e,t,a){Promise.resolve().then(a.bind(a,1968))},568:function(e,t,a){"use strict";a.d(t,{Z:function(){return x}});var s=a(7437),n=a(6612),l=a(6648),r=a(2382),o=a(2265),i=a(5282),c=a(6391),d=a(4446),u=a(1263),m=a(7138),h=a(4839),p=a(6164);let f=e=>{let t,{children:a,url:f,className:x,width:b=200,height:g=125,quality:j=50,layout:N="fixed",isStatic:y=!1,imageSrc:w=""}=e;if(y)t=w;else{let e=(0,r.c)({url:f,screenshot:!0,meta:!1,embed:"screenshot.url",colorScheme:"dark","viewport.isMobile":!0,"viewport.deviceScaleFactor":1,"viewport.width":3*b,"viewport.height":3*g});t="https://api.microlink.io/?".concat(e)}let[v,k]=o.useState(!1),[C,S]=o.useState(!1);o.useEffect(()=>{S(!0)},[]);let F=(0,i.c)(0),q=(0,c.q)(F,{stiffness:100,damping:15});return(0,s.jsxs)(s.Fragment,{children:[C?(0,s.jsx)("div",{className:"hidden",children:(0,s.jsx)(l.default,{src:t,width:b,height:g,quality:j,layout:N,priority:!0,alt:"hidden image"})}):null,(0,s.jsxs)(n.fC,{openDelay:50,closeDelay:100,onOpenChange:e=>{k(e)},children:[(0,s.jsx)(n.xz,{onMouseMove:e=>{let t=e.target.getBoundingClientRect(),a=(e.clientX-t.left-t.width/2)/2;F.set(a)},className:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,p.m6)((0,h.W)(t))}("text-black dark:text-white",x),href:f,children:a}),(0,s.jsx)(n.VY,{className:"[transform-origin:var(--radix-hover-card-content-transform-origin)]",side:"top",align:"center",sideOffset:10,children:(0,s.jsx)(d.M,{children:v&&(0,s.jsx)(u.E.div,{initial:{opacity:0,y:20,scale:.6},animate:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:260,damping:20}},exit:{opacity:0,y:20,scale:.6},className:"shadow-xl rounded-xl",style:{x:q},children:(0,s.jsx)(m.default,{href:f,className:"block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800",style:{fontSize:0},children:(0,s.jsx)(l.default,{src:y?w:t,width:b,height:g,quality:j,layout:N,priority:!0,className:"rounded-lg",alt:"preview image"})})})})})]})]})};function x(){return(0,s.jsxs)("footer",{className:"w-full p-4 bg-gray-800 text-white flex flex-col items-center",children:[(0,s.jsxs)("div",{className:"flex flex-col items-start",children:[(0,s.jsx)("h2",{className:"text-lg font-bold",children:"Helpful Links"}),(0,s.jsx)(f,{url:"https://github.com/FalconNetCohort",className:"mt-2",children:"GitHub Organization"}),(0,s.jsx)(f,{url:"https://falconnet.us",className:"mt-2",children:"FalconNet"}),(0,s.jsx)(f,{url:"https://apps.apple.com/us/app/falconnet/id6445867869",className:"mt-2",children:"Apple App Store"}),(0,s.jsx)(f,{url:"https://play.google.com/store/apps/details?id=com.arkwerk.falconnet&pcampaignid=web_share",className:"mt-2",children:"Google Play Store"})]}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," FalconSupport. All rights reserved."]})})]})}},8148:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var s=a(7437),n=a(7138);function l(){return(0,s.jsxs)("header",{className:"w-full p-4 bg-blue-600 text-white flex justify-between items-center",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold",children:(0,s.jsx)(n.default,{href:"/",className:"mx-2",children:"Falcon Support"})}),(0,s.jsxs)("nav",{children:[(0,s.jsx)(n.default,{href:"/",className:"mx-2",children:"Home"}),(0,s.jsx)(n.default,{href:"/in-progress",className:"mx-2",children:"In Progress"}),(0,s.jsx)(n.default,{href:"/feature-request",className:"mx-2",children:"Feature Request"}),(0,s.jsx)(n.default,{href:"/support-bug-report",className:"mx-2",children:"Support/Bug Report"}),(0,s.jsx)(n.default,{href:"/dashboard",className:"mx-2",children:"Admin Dashboard"}),(0,s.jsx)(n.default,{href:"/user-guides",className:"mx-2",children:"User Guide Admin"})]})]})}},177:function(e,t,a){"use strict";a.d(t,{I:function(){return o},db:function(){return i}});var s=a(5236),n=a(9842),l=a(5186);let r=(0,s.ZF)({apiKey:"AIzaSyDkSTrfVNFYiy26b0heGsTrnX6nCZaqVUw",authDomain:"fn-support-e5ac9.firebaseapp.com",projectId:"fn-support-e5ac9",storageBucket:"fn-support-e5ac9.appspot.com",messagingSenderId:"734672940110",appId:"1:734672940110:web:5cf194766053d357a6a71f",measurementId:"G-XVL9ER0BX7"}),o=(0,l.v0)(r),i=(0,n.ad)(r)},1968:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var s=a(7437),n=a(2265),l=a(8148),r=a(568),o=a(177),i=a(9842);function c(){let[e,t]=(0,n.useState)({name:"",rank:"",email:"",jobTitle:"",bugDescription:"",supplementalInfo:"",chainOfCommand:"no"}),[a,c]=(0,n.useState)(null),d=a=>{let{name:s,value:n}=a.target;t({...e,[s]:n})},u=async t=>{t.preventDefault();try{await (0,i.ET)((0,i.hJ)(o.db,"supportRequests"),{...e,attachment:a?a.name:""}),alert("Support request submitted successfully!"),m()}catch(e){console.error(e),alert("Error submitting support request")}},m=()=>{t({name:"",rank:"",email:"",jobTitle:"",bugDescription:"",supplementalInfo:"",chainOfCommand:"no"}),c(null)};return(0,s.jsxs)("div",{className:"flex flex-col min-h-screen bg-gray-900 text-white",children:[(0,s.jsx)(l.Z,{}),(0,s.jsxs)("main",{className:"flex-grow flex flex-col items-center justify-center p-6",children:[(0,s.jsx)("h1",{className:"text-3xl mb-6",children:"Support/Bug Report Form"}),(0,s.jsxs)("form",{className:"w-full max-w-lg",onSubmit:u,children:[(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"name",children:"Name"}),(0,s.jsx)("input",{type:"text",name:"name",id:"name",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",value:e.name,onChange:d,required:!0})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"rank",children:"Rank"}),(0,s.jsx)("input",{type:"text",name:"rank",id:"rank",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",value:e.rank,onChange:d,required:!0})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"email",children:"Email"}),(0,s.jsx)("input",{type:"email",name:"email",id:"email",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",value:e.email,onChange:d,required:!0})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"jobTitle",children:"Job Title"}),(0,s.jsx)("input",{type:"text",name:"jobTitle",id:"jobTitle",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",value:e.jobTitle,onChange:d,required:!0})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"bugDescription",children:"Bug Description"}),(0,s.jsx)("textarea",{name:"bugDescription",id:"bugDescription",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",value:e.bugDescription,onChange:d,required:!0})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"attachment",children:"Attachment"}),(0,s.jsx)("input",{type:"file",name:"attachment",id:"attachment",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",onChange:e=>{c(e.target.files&&e.target.files[0])}})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"supplementalInfo",children:"Supplemental Info"}),(0,s.jsx)("textarea",{name:"supplementalInfo",id:"supplementalInfo",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",value:e.supplementalInfo,onChange:d})]}),(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"chainOfCommand",children:"Has this info been sent up the chain of command?"}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("input",{type:"radio",name:"chainOfCommand",value:"yes",checked:"yes"===e.chainOfCommand,onChange:d}),(0,s.jsx)("span",{className:"ml-2",children:"Yes"}),(0,s.jsx)("input",{type:"radio",name:"chainOfCommand",value:"no",checked:"no"===e.chainOfCommand,onChange:d,className:"ml-6"}),(0,s.jsx)("span",{className:"ml-2",children:"No"})]})]}),(0,s.jsx)("div",{className:"mb-4",children:(0,s.jsx)("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline",children:"Submit"})})]})]}),(0,s.jsx)(r.Z,{})]})}}},function(e){e.O(0,[358,533,938,666,971,23,744],function(){return e(e.s=9488)}),_N_E=e.O()}]);