import{h as de,at as me,r as t,au as xe,av as pe,aw as ge,ax as G,ay as he,az as fe,u as A,j as e,c as I,v as Z,aA as Y,o as ee,w as je,aB as X,aC as q,g as ue,aD as ve,aE as be,aF as Ne,ae as F,aG as _,a7 as T,aH as j,a8 as ye,ad as we,aa as Ce,ab as P,ac as W,a9 as Re,af as ke}from"./index-yHgIsLNf.js";import{F as Ee,a as Me,b as Se,c as $e,d as Oe,L as De}from"./ListsWidget2-C_eGuFqF.js";import{C as Pe,L as Fe}from"./ChartsWidget1-DGsdHlTf.js";import{u as Te}from"./useTimeout-B2vsvzU8.js";import{b as Ae,g as _e,u as J,a as He,m as We,c as Be}from"./useIsomorphicEffect-Bss15Uto.js";import{D as se}from"./Dropdown1-CazqgxtY.js";const Ie=()=>{};function Le(s,a,{disabled:l,clickTrigger:i}={}){const r=a||Ie;Ae(s,r,{disabled:l,clickTrigger:i});const n=de(c=>{me(c)&&r(c)});t.useEffect(()=>{if(l||s==null)return;const c=xe(_e(s));let x=(c.defaultView||window).event;const d=pe(c,"keyup",p=>{if(p===x){x=void 0;return}n(p)});return()=>{d()}},[s,l,n])}const ae=t.forwardRef((s,a)=>{const{flip:l,offset:i,placement:r,containerPadding:n,popperConfig:c={},transition:x,runTransition:d}=s,[p,b]=J(),[N,y]=J(),h=ge(b,a),g=G(s.container),k=G(s.target),[o,f]=t.useState(!s.show),m=He(k,p,We({placement:r,enableEvents:!!s.show,containerPadding:n||5,flip:l,offset:i,arrowElement:N,popperConfig:c}));s.show&&o&&f(!1);const E=(...V)=>{f(!0),s.onExited&&s.onExited(...V)},w=s.show||!o;if(Le(p,s.onHide,{disabled:!s.rootClose||s.rootCloseDisabled,clickTrigger:s.rootCloseEvent}),!w)return null;const{onExit:O,onExiting:M,onEnter:C,onEntering:L,onEntered:U}=s;let H=s.children(Object.assign({},m.attributes.popper,{style:m.styles.popper,ref:h}),{popper:m,placement:r,show:!!s.show,arrowProps:Object.assign({},m.attributes.arrow,{style:m.styles.arrow,ref:y})});return H=he(x,d,{in:!!s.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:H,onExit:O,onExiting:M,onExited:E,onEnter:C,onEntering:L,onEntered:U}),g?fe.createPortal(H,g):null});ae.displayName="Overlay";const le=t.forwardRef(({className:s,bsPrefix:a,as:l="div",...i},r)=>(a=A(a,"popover-header"),e.jsx(l,{ref:r,className:I(s,a),...i})));le.displayName="PopoverHeader";const z=t.forwardRef(({className:s,bsPrefix:a,as:l="div",...i},r)=>(a=A(a,"popover-body"),e.jsx(l,{ref:r,className:I(s,a),...i})));z.displayName="PopoverBody";function ie(s,a){let l=s;return s==="left"?l=a?"end":"start":s==="right"&&(l=a?"start":"end"),l}function re(s="absolute"){return{position:s,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}const Ue=t.forwardRef(({bsPrefix:s,placement:a="right",className:l,style:i,children:r,body:n,arrowProps:c,hasDoneInitialMeasure:x,popper:d,show:p,...b},N)=>{const y=A(s,"popover"),h=Z(),[g]=(a==null?void 0:a.split("-"))||[],k=ie(g,h);let o=i;return p&&!x&&(o={...i,...re(d==null?void 0:d.strategy)}),e.jsxs("div",{ref:N,role:"tooltip",style:o,"x-placement":g,className:I(l,y,g&&`bs-popover-${k}`),...b,children:[e.jsx("div",{className:"popover-arrow",...c}),n?e.jsx(z,{children:r}):r]})}),Ve=Object.assign(Ue,{Header:le,Body:z,POPPER_OFFSET:[0,8]}),te=t.forwardRef(({bsPrefix:s,placement:a="right",className:l,style:i,children:r,arrowProps:n,hasDoneInitialMeasure:c,popper:x,show:d,...p},b)=>{s=A(s,"tooltip");const N=Z(),[y]=(a==null?void 0:a.split("-"))||[],h=ie(y,N);let g=i;return d&&!c&&(g={...i,...re(x==null?void 0:x.strategy)}),e.jsxs("div",{ref:b,style:g,role:"tooltip","x-placement":y,className:I(l,s,`bs-tooltip-${h}`),...p,children:[e.jsx("div",{className:"tooltip-arrow",...n}),e.jsx("div",{className:`${s}-inner`,children:r})]})});te.displayName="Tooltip";const ne=Object.assign(te,{TOOLTIP_OFFSET:[0,6]});function Ke(s){const a=t.useRef(null),l=A(void 0,"popover"),i=A(void 0,"tooltip"),r=t.useMemo(()=>({name:"offset",options:{offset:()=>{if(s)return s;if(a.current){if(Y(a.current,l))return Ve.POPPER_OFFSET;if(Y(a.current,i))return ne.TOOLTIP_OFFSET}return[0,0]}}}),[s,l,i]);return[a,[r]]}function qe(s,a){const{ref:l}=s,{ref:i}=a;s.ref=l.__wrapped||(l.__wrapped=r=>l(q(r))),a.ref=i.__wrapped||(i.__wrapped=r=>i(q(r)))}const ce=t.forwardRef(({children:s,transition:a=X,popperConfig:l={},rootClose:i=!1,placement:r="top",show:n=!1,...c},x)=>{const d=t.useRef({}),[p,b]=t.useState(null),[N,y]=Ke(c.offset),h=ee(x,N),g=a===!0?X:a||void 0,k=je(o=>{b(o),l==null||l.onFirstUpdate==null||l.onFirstUpdate(o)});return Be(()=>{p&&c.target&&(d.current.scheduleUpdate==null||d.current.scheduleUpdate())},[p,c.target]),t.useEffect(()=>{n||b(null)},[n]),e.jsx(ae,{...c,ref:h,popperConfig:{...l,modifiers:y.concat(l.modifiers||[]),onFirstUpdate:k},transition:g,rootClose:i,placement:r,show:n,children:(o,{arrowProps:f,popper:m,show:E})=>{var w;qe(o,f);const O=m==null?void 0:m.placement,M=Object.assign(d.current,{state:m==null?void 0:m.state,scheduleUpdate:m==null?void 0:m.update,placement:O,outOfBoundaries:(m==null||(w=m.state)==null||(w=w.modifiersData.hide)==null?void 0:w.isReferenceHidden)||!1,strategy:l.strategy}),C=!!p;return typeof s=="function"?s({...o,placement:O,show:E,...!a&&E&&{className:"show"},popper:M,arrowProps:f,hasDoneInitialMeasure:C}):t.cloneElement(s,{...o,placement:O,arrowProps:f,popper:M,hasDoneInitialMeasure:C,className:I(s.props.className,!a&&E&&"show"),style:{...s.props.style,...o.style}})}})});ce.displayName="Overlay";function ze(s){return s&&typeof s=="object"?s:{show:s,hide:s}}function Q(s,a,l){const[i]=a,r=i.currentTarget,n=i.relatedTarget||i.nativeEvent[l];(!n||n!==r)&&!be(r,n)&&s(...a)}Ne.oneOf(["click","hover","focus"]);const Ge=({trigger:s=["hover","focus"],overlay:a,children:l,popperConfig:i={},show:r,defaultShow:n=!1,onToggle:c,delay:x,placement:d,flip:p=d&&d.indexOf("auto")!==-1,...b})=>{const N=t.useRef(null),y=ee(N,ue(l)),h=Te(),g=t.useRef(""),[k,o]=ve(r,n,c),f=ze(x),{onFocus:m,onBlur:E,onClick:w}=typeof l!="function"?t.Children.only(l).props:{},O=v=>{y(q(v))},M=t.useCallback(()=>{if(h.clear(),g.current="show",!f.show){o(!0);return}h.set(()=>{g.current==="show"&&o(!0)},f.show)},[f.show,o,h]),C=t.useCallback(()=>{if(h.clear(),g.current="hide",!f.hide){o(!1);return}h.set(()=>{g.current==="hide"&&o(!1)},f.hide)},[f.hide,o,h]),L=t.useCallback((...v)=>{M(),m==null||m(...v)},[M,m]),U=t.useCallback((...v)=>{C(),E==null||E(...v)},[C,E]),H=t.useCallback((...v)=>{o(!k),w==null||w(...v)},[w,o,k]),V=t.useCallback((...v)=>{Q(M,v,"fromElement")},[M]),oe=t.useCallback((...v)=>{Q(C,v,"toElement")},[C]),K=s==null?[]:[].concat(s),D={ref:O};return K.indexOf("click")!==-1&&(D.onClick=H),K.indexOf("focus")!==-1&&(D.onFocus=L,D.onBlur=U),K.indexOf("hover")!==-1&&(D.onMouseOver=V,D.onMouseOut=oe),e.jsxs(e.Fragment,{children:[typeof l=="function"?l(D):t.cloneElement(l,D),e.jsx(ce,{...b,show:k,onHide:C,flip:p,placement:d,popperConfig:i,target:N.current,children:a})]})};function Ye(){return e.jsx(F,{children:e.jsxs("div",{className:"row g-5 g-xxl-8",children:[e.jsxs("div",{className:"col-xl-6",children:[e.jsx(Ee,{className:"mb-5 mb-xxl-8"}),e.jsx(Me,{className:"mb-5 mb-xxl-8"}),e.jsx(Se,{className:"mb-5 mb-xxl-8"}),e.jsx($e,{className:"mb-5 mb-xxl-8"}),e.jsx(Oe,{className:"mb-5 mb-xxl-8"})]}),e.jsxs("div",{className:"col-xl-6",children:[e.jsx(Pe,{className:"mb-5 mb-xxl-8"}),e.jsx(Fe,{className:"mb-5 mb-xxl-8"}),e.jsx(De,{className:"mb-5 mb-xxl-8"})]})]})})}const Xe=({users:s=void 0})=>e.jsx(F,{children:s&&s.map((a,l)=>e.jsx(Ge,{placement:"top",overlay:e.jsx(ne,{id:"tooltip-user-name",children:a.name}),children:e.jsxs("div",{className:"symbol symbol-35px symbol-circle",children:[a.avatar&&e.jsx("img",{src:_(a.avatar),alt:"Pic"}),a.initials&&e.jsx("span",{className:"symbol-label bg-primary text-inverse-primary fw-bolder",children:a.initials})]})},`${l}-${a.name}`))}),S=({icon:s,badgeColor:a,status:l,statusColor:i,title:r,description:n,date:c,budget:x,progress:d,users:p=void 0})=>e.jsxs(T,{to:"/crafted/pages/profile/overview",className:"card border border-2 border-gray-300 border-hover",children:[e.jsxs("div",{className:"card-header border-0 pt-9",children:[e.jsx("div",{className:"card-title m-0",children:e.jsx("div",{className:"symbol symbol-50px w-50px bg-light",children:e.jsx("img",{src:_(s),alt:"card2",className:"p-3"})})}),e.jsx("div",{className:"card-toolbar",children:e.jsx("span",{className:`badge badge-light-${a} fw-bolder me-auto px-4 py-3`,children:l})})]}),e.jsxs("div",{className:"card-body p-9",children:[e.jsx("div",{className:"fs-3 fw-bolder text-gray-900",children:r}),e.jsx("p",{className:"text-gray-500 fw-bold fs-5 mt-1 mb-7",children:n}),e.jsxs("div",{className:"d-flex flex-wrap mb-5",children:[e.jsxs("div",{className:"border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3",children:[e.jsx("div",{className:"fs-6 text-gray-800 fw-bolder",children:c}),e.jsx("div",{className:"fw-bold text-gray-500",children:"Due Date"})]}),e.jsxs("div",{className:"border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3",children:[e.jsx("div",{className:"fs-6 text-gray-800 fw-bolder",children:x}),e.jsx("div",{className:"fw-bold text-gray-500",children:"Budget"})]})]}),e.jsx("div",{className:"h-4px w-100 bg-light mb-5","data-bs-toggle":"tooltip",title:"This project completed",children:e.jsx("div",{className:`bg-${i} rounded h-4px`,role:"progressbar",style:{width:`${d}%`}})}),e.jsx(Xe,{users:p})]})]});function Je(){return e.jsxs(F,{children:[e.jsxs("div",{className:"d-flex flex-wrap flex-stack mb-6",children:[e.jsxs("h3",{className:"fw-bolder my-2",children:["My Projects",e.jsx("span",{className:"fs-6 text-gray-500 fw-bold ms-1",children:"Active"})]}),e.jsxs("div",{className:"d-flex flex-wrap my-2",children:[e.jsx("div",{className:"me-4",children:e.jsxs("select",{name:"status","data-control":"select2","data-hide-search":"true",className:"form-select form-select-sm form-select-white w-125px",defaultValue:"Active",children:[e.jsx("option",{value:"Active",children:"Active"}),e.jsx("option",{value:"Approved",children:"In Progress"}),e.jsx("option",{value:"Declined",children:"To Do"}),e.jsx("option",{value:"In Progress",children:"Completed"})]})}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm","data-bs-toggle":"modal","data-bs-target":"#kt_modal_create_project",children:"New Project"})]})]}),e.jsxs("div",{className:"row g-6 g-xl-9",children:[e.jsx("div",{className:"col-md-6 col-xl-4",children:e.jsx(S,{icon:"media/svg/brand-logos/plurk.svg",badgeColor:"primary",status:"In Progress",statusColor:"primary",title:"Fitnes App",description:"CRM App application to HR efficiency",date:"November 10, 2021",budget:"$284,900.00",progress:50,users:Qe})}),e.jsx("div",{className:"col-md-6 col-xl-4",children:e.jsx(S,{icon:"media/svg/brand-logos/disqus.svg",badgeColor:"info",status:"Pending",statusColor:"info",title:"Leaf CRM",description:"CRM App application to HR efficiency",date:"May 10, 2021",budget:"$36,400.00",progress:30,users:Ze})}),e.jsx("div",{className:"col-md-6 col-xl-4",children:e.jsx(S,{icon:"media/svg/brand-logos/figma-1.svg",badgeColor:"success",status:"Completed",statusColor:"success",title:"Atica Banking",description:"CRM App application to HR efficiency",date:"Mar 14, 2021",budget:"$605,100.00",progress:100,users:es})}),e.jsx("div",{className:"col-md-6 col-xl-4",children:e.jsx(S,{icon:"media/svg/brand-logos/sentry-3.svg",badgeColor:"info",status:"Pending",statusColor:"info",title:"Finance Dispatch",description:"CRM App application to HR efficiency",date:"Mar 14, 2021",budget:"$605,100.00",progress:60,users:ss})}),e.jsx("div",{className:"col-md-6 col-xl-4",children:e.jsx(S,{icon:"media/svg/brand-logos/xing-icon.svg",badgeColor:"primary",status:"In Progress",statusColor:"primary",title:"9 Degree",description:"CRM App application to HR efficiency",date:"Mar 14, 2021",budget:"$605,100.00",progress:40,users:as})}),e.jsx("div",{className:"col-md-6 col-xl-4",children:e.jsx(S,{icon:"media/svg/brand-logos/tvit.svg",badgeColor:"primary",status:"In Progress",statusColor:"primary",title:"9 Degree",description:"CRM App application to HR efficiency",date:"Mar 14, 2021",budget:"$605,100.00",progress:70,users:ls})}),e.jsx("div",{className:"col-md-6 col-xl-4",children:e.jsx(S,{icon:"media/svg/brand-logos/aven.svg",badgeColor:"primary",status:"In Progress",statusColor:"primary",title:"Buldozer CRM",description:"CRM App application to HR efficiency",date:"Mar 14, 2021",budget:"$605,100.00",progress:70,users:is})}),e.jsx("div",{className:"col-md-6 col-xl-4",children:e.jsx(S,{icon:"media/svg/brand-logos/treva.svg",badgeColor:"danger",status:"Overdue",statusColor:"danger",title:"Aviasales App",description:"CRM App application to HR efficiency",date:"Mar 14, 2021",budget:"$605,100.00",progress:10,users:rs})}),e.jsx("div",{className:"col-md-6 col-xl-4",children:e.jsx(S,{icon:"media/svg/brand-logos/kanba.svg",badgeColor:"success",status:"Completed",statusColor:"success",title:"Oppo CRM",description:"CRM App application to HR efficiency",date:"Mar 14, 2021",budget:"$605,100.00",progress:100,users:ts})})]}),e.jsxs("div",{className:"d-flex flex-stack flex-wrap pt-10",children:[e.jsx("div",{className:"fs-6 fw-bold text-gray-700",children:"Showing 1 to 10 of 50 entries"}),e.jsxs("ul",{className:"pagination",children:[e.jsx("li",{className:"page-item previous",children:e.jsx("a",{href:"#",className:"page-link",children:e.jsx("i",{className:"previous"})})}),e.jsx("li",{className:"page-item active",children:e.jsx("a",{href:"#",className:"page-link",children:"1"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{href:"#",className:"page-link",children:"2"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{href:"#",className:"page-link",children:"3"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{href:"#",className:"page-link",children:"4"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{href:"#",className:"page-link",children:"5"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{href:"#",className:"page-link",children:"6"})}),e.jsx("li",{className:"page-item next",children:e.jsx("a",{href:"#",className:"page-link",children:e.jsx("i",{className:"next"})})})]})]})]})}const Qe=[{name:"Emma Smith",avatar:"media/avatars/300-6.jpg"},{name:"Rudy Stone",avatar:"media/avatars/300-1.jpg"},{name:"Susan Redwood",initials:"S",color:"primary"}],Ze=[{name:"Alan Warden",initials:"A",color:"warning"},{name:"Brian Cox",avatar:"media/avatars/300-5.jpg"}],es=[{name:"Mad Masy",avatar:"media/avatars/300-6.jpg"},{name:"Cris Willson",avatar:"media/avatars/300-1.jpg"},{name:"Mike Garcie",initials:"M",color:"info"}],ss=[{name:"Nich Warden",initials:"N",color:"warning"},{name:"Rob Otto",initials:"R",color:"success"}],as=[{name:"Francis Mitcham",avatar:"media/avatars/300-20.jpg"},{name:"Michelle Swanston",avatar:"media/avatars/300-7.jpg"},{name:"Susan Redwood",initials:"S",color:"primary"}],ls=[{name:"Emma Smith",avatar:"media/avatars/300-6.jpg"},{name:"Rudy Stone",avatar:"media/avatars/300-1.jpg"},{name:"Susan Redwood",initials:"S",color:"primary"}],is=[{name:"Meloday Macy",avatar:"media/avatars/300-2.jpg"},{name:"Rabbin Watterman",initials:"S",color:"success"}],rs=[{name:"Emma Smith",avatar:"media/avatars/300-6.jpg"},{name:"Rudy Stone",avatar:"media/avatars/300-1.jpg"},{name:"Susan Redwood",initials:"S",color:"primary"}],ts=[{name:"Meloday Macy",avatar:"media/avatars/300-2.jpg"},{name:"Rabbin Watterman",initials:"S",color:"danger"}],$=({image:s,title:a,description:l,status:i,statusValue:r,statusDesc:n,progress:c,progressType:x})=>e.jsxs("div",{className:"card h-100",children:[e.jsxs("div",{className:"card-header flex-nowrap border-0 pt-9",children:[e.jsxs("div",{className:"card-title m-0",children:[e.jsx("div",{className:"symbol symbol-45px w-45px bg-light me-5",children:e.jsx("img",{src:_(s),alt:"Metronic",className:"p-3"})}),e.jsx("a",{href:"#",className:"fs-4 fw-bold text-hover-primary text-gray-600 m-0",children:a})]}),e.jsxs("div",{className:"card-toolbar m-0",children:[e.jsx("button",{type:"button",className:"btn btn-clean btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end",children:e.jsx(j,{iconName:"category",className:"fs-3 text-primary"})}),e.jsx(se,{})]})]}),e.jsxs("div",{className:"card-body d-flex flex-column px-9 pt-6 pb-8",children:[e.jsx("div",{className:"fs-2tx fw-bolder mb-3",children:l}),e.jsxs("div",{className:"d-flex align-items-center flex-wrap mb-5 mt-auto fs-6",children:[i==="up"&&e.jsx(j,{iconName:"arrow-up-right",className:"fs-3 me-1 text-success"}),i==="down"&&e.jsx(j,{iconName:"arrow-down-right",className:"fs-3 me-1 text-danger"}),e.jsxs("div",{className:"fw-bolder me-2 "+(i==="up"?"text-success":"text-danger"),children:[i==="up"?"+":"-",r,"%"]}),e.jsx("div",{className:"fw-bold text-gray-500",children:n})]}),e.jsxs("div",{className:"d-flex align-items-center fw-bold",children:[e.jsxs("span",{className:"badge bg-light text-gray-700 px-3 py-2 me-2",children:[c,"%"]}),e.jsx("span",{className:"text-gray-500 fs-7",children:x})]})]})]});function ns(){return e.jsxs(F,{children:[e.jsxs("div",{className:"d-flex flex-wrap flex-stack mb-6",children:[e.jsxs("h3",{className:"fw-bolder my-2",children:["My Campaigns",e.jsx("span",{className:"fs-6 text-gray-500 fw-bold ms-1",children:"30 Days"})]}),e.jsxs("div",{className:"d-flex align-items-center my-2",children:[e.jsx("div",{className:"w-100px me-5",children:e.jsxs("select",{name:"status","data-control":"select2","data-hide-search":"true",className:"form-select form-select-white form-select-sm",defaultValue:"1",children:[e.jsx("option",{value:"1",children:"30 Days"}),e.jsx("option",{value:"2",children:"90 Days"}),e.jsx("option",{value:"3",children:"6 Months"}),e.jsx("option",{value:"4",children:"1 Year"})]})}),e.jsx("button",{className:"btn btn-primary btn-sm","data-bs-toggle":"tooltip",title:"Coming soon",children:"Add Campaign"})]})]}),e.jsxs("div",{className:"row g-6 g-xl-9",children:[e.jsx("div",{className:"col-sm-6 col-xl-4",children:e.jsx($,{image:"media/svg/brand-logos/twitch.svg",title:"Twitch Posts",description:"$500.00",status:"down",statusValue:40.5,statusDesc:"more impressions",progress:.5,progressType:"MRR"})}),e.jsx("div",{className:"col-sm-6 col-xl-4",children:e.jsx($,{image:"media/svg/brand-logos/twitter.svg",title:"Twitter Followers",description:"807k",status:"up",statusValue:17.62,statusDesc:"Followers growth",progress:5,progressType:"New trials"})}),e.jsx("div",{className:"col-sm-6 col-xl-4",children:e.jsx($,{image:"media/svg/brand-logos/spotify.svg",title:"Spotify Listeners",description:"1,073",status:"down",statusValue:10.45,statusDesc:"Less comments than usual",progress:40,progressType:"Impressions"})}),e.jsx("div",{className:"col-sm-6 col-xl-4",children:e.jsx($,{image:"media/svg/brand-logos/pinterest-p.svg",title:"Pinterest Posts",description:"97",status:"up",statusValue:26.1,statusDesc:"More posts",progress:10,progressType:"Spend"})}),e.jsx("div",{className:"col-sm-6 col-xl-4",children:e.jsx($,{image:"media/svg/brand-logos/github.svg",title:"Github Contributes",description:"4,109",status:"down",statusValue:32.8,statusDesc:"Less contributions",progress:40,progressType:"Dispute"})}),e.jsx("div",{className:"col-sm-6 col-xl-4",children:e.jsx($,{image:"media/svg/brand-logos/youtube-play.svg",title:"Youtube Subscribers",description:"354",status:"up",statusValue:29.45,statusDesc:"Subscribers growth",progress:40,progressType:"Subscribers"})}),e.jsx("div",{className:"col-sm-6 col-xl-4",children:e.jsx($,{image:"media/svg/brand-logos/telegram.svg",title:"Telegram Posts",description:"566",status:"up",statusValue:11.4,statusDesc:"more clicks",progress:40,progressType:"Profit"})}),e.jsx("div",{className:"col-sm-6 col-xl-4",children:e.jsx($,{image:"media/svg/brand-logos/reddit.svg",title:"Reddit Awards",description:"2.1M",status:"up",statusValue:46.7,statusDesc:"more adds",progress:0,progressType:"Retention"})})]}),e.jsxs("div",{className:"d-flex flex-stack flex-wrap pt-10",children:[e.jsx("div",{className:"fs-6 fw-bold text-gray-700",children:"Showing 1 to 10 of 50 entries"}),e.jsxs("ul",{className:"pagination",children:[e.jsx("li",{className:"page-item previous",children:e.jsx("a",{href:"#",className:"page-link",children:e.jsx("i",{className:"previous"})})}),e.jsx("li",{className:"page-item active",children:e.jsx("a",{href:"#",className:"page-link",children:"1"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{href:"#",className:"page-link",children:"2"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{href:"#",className:"page-link",children:"3"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{href:"#",className:"page-link",children:"4"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{href:"#",className:"page-link",children:"5"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{href:"#",className:"page-link",children:"6"})}),e.jsx("li",{className:"page-item next",children:e.jsx("a",{href:"#",className:"page-link",children:e.jsx("i",{className:"next"})})})]})]})]})}const R=({icon:s,title:a,description:l})=>e.jsx("div",{className:"card h-100",children:e.jsxs("div",{className:"card-body d-flex justify-content-center text-center flex-column p-8",children:[e.jsxs("a",{href:"#",className:"text-gray-800 text-hover-primary d-flex flex-column",children:[e.jsx("div",{className:"symbol symbol-75px mb-6",children:e.jsx("img",{src:_(s),alt:""})}),e.jsx("div",{className:"fs-5 fw-bolder mb-2",children:a})]}),e.jsx("div",{className:"fs-7 fw-bold text-gray-500 mt-auto",children:l})]})});function cs(){return e.jsxs(F,{children:[e.jsxs("div",{className:"d-flex flex-wrap flex-stack mb-6",children:[e.jsxs("h3",{className:"fw-bolder my-2",children:["My Documents",e.jsx("span",{className:"fs-6 text-gray-500 fw-bold ms-1",children:"100+ resources"})]}),e.jsxs("div",{className:"d-flex my-2",children:[e.jsxs("div",{className:"d-flex align-items-center position-relative me-4",children:[e.jsx(j,{iconName:"magnifier",className:"fs-3 position-absolute ms-3"}),e.jsx("input",{type:"text",id:"kt_filter_search",className:"form-control form-control-white form-control-sm w-150px ps-9",placeholder:"Search"})]}),e.jsx("a",{href:"#",className:"btn btn-primary btn-sm",children:"File Manager"})]})]}),e.jsxs("div",{className:"row g-6 g-xl-9 mb-6 mb-xl-9",children:[e.jsx("div",{className:"col-12 col-sm-12 col-xl",children:e.jsx(R,{icon:"media/svg/files/folder-document.svg",title:"Finance",description:"7 files"})}),e.jsx("div",{className:"col-12 col-sm-12 col-xl",children:e.jsx(R,{icon:"media/svg/files/folder-document.svg",title:"Customers",description:"3 files"})}),e.jsx("div",{className:"col-12 col-sm-12 col-xl",children:e.jsx(R,{icon:"media/svg/files/folder-document.svg",title:"CRM Project",description:"25 files"})})]}),e.jsxs("div",{className:"row g-6 g-xl-9 mb-6 mb-xl-9",children:[e.jsx("div",{className:"col-12 col-sm-12 col-xl",children:e.jsx(R,{icon:"media/svg/files/pdf.svg",title:"Project Reqs..",description:"3 days ago"})}),e.jsx("div",{className:"col-12 col-sm-12 col-xl",children:e.jsx(R,{icon:"media/svg/files/doc.svg",title:"CRM App Docs..",description:"3 days ago"})}),e.jsx("div",{className:"col-12 col-sm-12 col-xl",children:e.jsx(R,{icon:"media/svg/files/css.svg",title:"User CRUD Styles",description:"4 days ago"})}),e.jsx("div",{className:"col-12 col-sm-12 col-xl",children:e.jsx(R,{icon:"media/svg/files/ai.svg",title:"Metronic Logo",description:"5 days ago"})}),e.jsx("div",{className:"col-12 col-sm-12 col-xl",children:e.jsx(R,{icon:"media/svg/files/sql.svg",title:"Orders backup",description:"1 week ago"})})]}),e.jsxs("div",{className:"row g-6 g-xl-9 mb-6 mb-xl-9",children:[e.jsx("div",{className:"col-12 col-sm-12 col-xl",children:e.jsx(R,{icon:"media/svg/files/xml.svg",title:"UTAIR CRM API Co..",description:"2 week ago"})}),e.jsx("div",{className:"col-12 col-sm-12 col-xl",children:e.jsx(R,{icon:"media/svg/files/tif.svg",title:"Tower Hill App..",description:"3 week ago"})})]})]})}const u=({color:s="",avatar:a="",online:l=!1,name:i,job:r,avgEarnings:n,totalEarnings:c})=>e.jsx("div",{className:"card",children:e.jsxs("div",{className:"card-body d-flex flex-center flex-column p-9",children:[e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"symbol symbol-75px symbol-circle",children:[s?e.jsx("span",{className:`symbol-label bg-light-${s} text-${s} fs-5 fw-bolder`,children:i.charAt(0)}):e.jsx("img",{alt:"Pic",src:_(a)}),l&&e.jsx("div",{className:"symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3"})]})}),e.jsx("a",{href:"#",className:"fs-4 text-gray-800 text-hover-primary fw-bolder mb-0",children:i}),e.jsx("div",{className:"fw-bold text-gray-500 mb-6",children:r}),e.jsxs("div",{className:"d-flex flex-center flex-wrap mb-5",children:[e.jsxs("div",{className:"border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3",children:[e.jsx("div",{className:"fs-6 fw-bolder text-gray-700",children:n}),e.jsx("div",{className:"fw-bold text-gray-500",children:"Avg. Earnings"})]}),e.jsxs("div",{className:"border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3",children:[e.jsx("div",{className:"fs-6 fw-bolder text-gray-700",children:c}),e.jsx("div",{className:"fw-bold text-gray-500",children:"Total Sales"})]})]}),e.jsxs("a",{href:"#",className:"btn btn-sm btn-light",children:[e.jsx(j,{iconName:"plus",className:"fs-3"}),"Connect"]})]})});function os(){return e.jsxs(F,{children:[e.jsxs("div",{className:"d-flex flex-wrap flex-stack mb-6",children:[e.jsxs("h3",{className:"fw-bolder my-2",children:["My Contacts",e.jsx("span",{className:"fs-6 text-gray-500 fw-bold ms-1",children:"(59)"})]}),e.jsx("div",{className:"d-flex my-2",children:e.jsxs("select",{name:"status","data-control":"select2","data-hide-search":"true",className:"form-select form-select-white form-select-sm w-125px",defaultValue:"Online",children:[e.jsx("option",{value:"Online",children:"Online"}),e.jsx("option",{value:"Pending",children:"Pending"}),e.jsx("option",{value:"Declined",children:"Declined"}),e.jsx("option",{value:"Accepted",children:"Accepted"})]})})]}),e.jsxs("div",{className:"row g-6 g-xl-9",children:[e.jsx("div",{className:"col-md-6 col-xxl-4",children:e.jsx(u,{avatar:"media/avatars/300-6.jpg",name:"Emma Smith",job:"Art Director",avgEarnings:"$14,560",totalEarnings:"$236,400"})}),e.jsx("div",{className:"col-md-6 col-xxl-4",children:e.jsx(u,{color:"danger",name:"Melody Macy",job:"Marketing Analytic",avgEarnings:"$14,560",totalEarnings:"$236,400",online:!0})}),e.jsx("div",{className:"col-md-6 col-xxl-4",children:e.jsx(u,{avatar:"media/avatars/300-1.jpg",name:"Max Smith",job:"Software Enginer",avgEarnings:"$14,560",totalEarnings:"$236,400"})}),e.jsx("div",{className:"col-md-6 col-xxl-4",children:e.jsx(u,{avatar:"media/avatars/300-5.jpg",name:"Sean Bean",job:"Web Developer",avgEarnings:"$14,560",totalEarnings:"$236,400"})}),e.jsx("div",{className:"col-md-6 col-xxl-4",children:e.jsx(u,{avatar:"media/avatars/300-25.jpg",name:"Brian Cox",job:"UI/UX Designer",avgEarnings:"$14,560",totalEarnings:"$236,400"})}),e.jsx("div",{className:"col-md-6 col-xxl-4",children:e.jsx(u,{color:"warning",name:"Mikaela Collins",job:"Head Of Marketing",avgEarnings:"$14,560",totalEarnings:"$236,400",online:!0})}),e.jsx("div",{className:"col-md-6 col-xxl-4",children:e.jsx(u,{avatar:"media/avatars/300-9.jpg",name:"Francis Mitcham",job:"Software Arcitect",avgEarnings:"$14,560",totalEarnings:"$236,400"})}),e.jsx("div",{className:"col-md-6 col-xxl-4",children:e.jsx(u,{color:"danger",name:"Olivia Wild",job:"System Admin",avgEarnings:"$14,560",totalEarnings:"$236,400",online:!0})}),e.jsx("div",{className:"col-md-6 col-xxl-4",children:e.jsx(u,{color:"primary",name:"Neil Owen",job:"Account Manager",avgEarnings:"$14,560",totalEarnings:"$236,400",online:!0})}),e.jsx("div",{className:"col-md-6 col-xxl-4",children:e.jsx(u,{avatar:"media/avatars/300-23.jpg",name:"Dan Wilson",job:"Web Desinger",avgEarnings:"$14,560",totalEarnings:"$236,400"})}),e.jsx("div",{className:"col-md-6 col-xxl-4",children:e.jsx(u,{color:"danger",name:"Emma Bold",job:"Corporate Finance",avgEarnings:"$14,560",totalEarnings:"$236,400",online:!0})}),e.jsx("div",{className:"col-md-6 col-xxl-4",children:e.jsx(u,{avatar:"media/avatars/300-12.jpg",name:"Ana Crown",job:"Customer Relationship",avgEarnings:"$14,560",totalEarnings:"$236,400"})})]}),e.jsxs("div",{className:"d-flex flex-stack flex-wrap pt-10",children:[e.jsx("div",{className:"fs-6 fw-bold text-gray-700",children:"Showing 1 to 10 of 50 entries"}),e.jsxs("ul",{className:"pagination",children:[e.jsx("li",{className:"page-item previous",children:e.jsx("a",{href:"#",className:"page-link",children:e.jsx("i",{className:"previous"})})}),e.jsx("li",{className:"page-item active",children:e.jsx("a",{href:"#",className:"page-link",children:"1"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{href:"#",className:"page-link",children:"2"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{href:"#",className:"page-link",children:"3"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{href:"#",className:"page-link",children:"4"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{href:"#",className:"page-link",children:"5"})}),e.jsx("li",{className:"page-item",children:e.jsx("a",{href:"#",className:"page-link",children:"6"})}),e.jsx("li",{className:"page-item next",children:e.jsx("a",{href:"#",className:"page-link",children:e.jsx("i",{className:"next"})})})]})]})]})}const ds=()=>{const s=ye();return e.jsxs(e.Fragment,{children:[e.jsx(we,{}),e.jsx(F,{children:e.jsx("div",{className:"card mb-5 mb-xl-10",children:e.jsxs("div",{className:"card-body pt-9 pb-0",children:[e.jsxs("div",{className:"d-flex flex-wrap flex-sm-nowrap mb-3",children:[e.jsx("div",{className:"me-7 mb-4",children:e.jsxs("div",{className:"symbol symbol-100px symbol-lg-160px symbol-fixed position-relative",children:[e.jsx("img",{src:_("/media/avatars/300-1.jpg"),alt:"Metornic"}),e.jsx("div",{className:"position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"})]})}),e.jsxs("div",{className:"flex-grow-1",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-start flex-wrap mb-2",children:[e.jsxs("div",{className:"d-flex flex-column",children:[e.jsxs("div",{className:"d-flex align-items-center mb-2",children:[e.jsx("a",{href:"#",className:"text-gray-800 text-hover-primary fs-2 fw-bolder me-1",children:"Max Smith"}),e.jsx("a",{href:"#",children:e.jsx(j,{iconName:"verify",className:"fs-1 text-primary"})})]}),e.jsxs("div",{className:"d-flex flex-wrap fw-bold fs-6 mb-4 pe-2",children:[e.jsxs("a",{href:"#",className:"d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2",children:[e.jsx(j,{iconName:"profile-circle",className:"fs-4 me-1"}),"Developer"]}),e.jsxs("a",{href:"#",className:"d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2",children:[e.jsx(j,{iconName:"geolocation",className:"fs-4 me-1"}),"SF, Bay Area"]}),e.jsxs("a",{href:"#",className:"d-flex align-items-center text-gray-500 text-hover-primary mb-2",children:[e.jsx(j,{iconName:"sms",className:"fs-4 me-1"}),"max@kt.com"]})]})]}),e.jsxs("div",{className:"d-flex my-4",children:[e.jsxs("a",{href:"#",className:"btn btn-sm btn-light me-2",id:"kt_user_follow_button",children:[e.jsx(j,{iconName:"check",className:"fs-3 d-none"}),e.jsx("span",{className:"indicator-label",children:"Follow"}),e.jsxs("span",{className:"indicator-progress",children:["Please wait...",e.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e.jsx("a",{href:"#",className:"btn btn-sm btn-primary me-3","data-bs-toggle":"modal","data-bs-target":"#kt_modal_offer_a_deal",children:"Hire Me"}),e.jsxs("div",{className:"me-0",children:[e.jsx("button",{className:"btn btn-sm btn-icon btn-bg-light btn-active-color-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end",children:e.jsx("i",{className:"bi bi-three-dots fs-3"})}),e.jsx(se,{})]})]})]}),e.jsxs("div",{className:"d-flex flex-wrap flex-stack",children:[e.jsx("div",{className:"d-flex flex-column flex-grow-1 pe-8",children:e.jsxs("div",{className:"d-flex flex-wrap",children:[e.jsxs("div",{className:"border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(j,{iconName:"arrow-up",className:"fs-3 text-success me-2"}),e.jsx("div",{className:"fs-2 fw-bolder",children:"4500$"})]}),e.jsx("div",{className:"fw-bold fs-6 text-gray-500",children:"Earnings"})]}),e.jsxs("div",{className:"border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(j,{iconName:"arrow-down",className:"fs-3 text-danger me-2"}),e.jsx("div",{className:"fs-2 fw-bolder",children:"75"})]}),e.jsx("div",{className:"fw-bold fs-6 text-gray-500",children:"Projects"})]}),e.jsxs("div",{className:"border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(j,{iconName:"arrow-up",className:"fs-3 text-success me-2"}),e.jsx("div",{className:"fs-2 fw-bolder",children:"60%"})]}),e.jsx("div",{className:"fw-bold fs-6 text-gray-500",children:"Success Rate"})]})]})}),e.jsxs("div",{className:"d-flex align-items-center w-200px w-sm-300px flex-column mt-3",children:[e.jsxs("div",{className:"d-flex justify-content-between w-100 mt-auto mb-2",children:[e.jsx("span",{className:"fw-bold fs-6 text-gray-500",children:"Profile Compleation"}),e.jsx("span",{className:"fw-bolder fs-6",children:"50%"})]}),e.jsx("div",{className:"h-5px mx-3 w-100 bg-light mb-3",children:e.jsx("div",{className:"bg-success rounded h-5px",role:"progressbar",style:{width:"50%"}})})]})]})]})]}),e.jsx("div",{className:"d-flex overflow-auto h-55px",children:e.jsxs("ul",{className:"nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap",children:[e.jsx("li",{className:"nav-item",children:e.jsx(T,{className:"nav-link text-active-primary me-6 "+(s.pathname==="/crafted/pages/profile/overview"&&"active"),to:"/crafted/pages/profile/overview",children:"Overview"})}),e.jsx("li",{className:"nav-item",children:e.jsx(T,{className:"nav-link text-active-primary me-6 "+(s.pathname==="/crafted/pages/profile/projects"&&"active"),to:"/crafted/pages/profile/projects",children:"Projects"})}),e.jsx("li",{className:"nav-item",children:e.jsx(T,{className:"nav-link text-active-primary me-6 "+(s.pathname==="/crafted/pages/profile/campaigns"&&"active"),to:"/crafted/pages/profile/campaigns",children:"Campaigns"})}),e.jsx("li",{className:"nav-item",children:e.jsx(T,{className:"nav-link text-active-primary me-6 "+(s.pathname==="/crafted/pages/profile/documents"&&"active"),to:"/crafted/pages/profile/documents",children:"Documents"})}),e.jsx("li",{className:"nav-item",children:e.jsx(T,{className:"nav-link text-active-primary me-6 "+(s.pathname==="/crafted/pages/profile/connections"&&"active"),to:"/crafted/pages/profile/connections",children:"Connections"})})]})})]})})})]})},B=[{title:"Profile",path:"/crafted/pages/profile/overview",isSeparator:!1,isActive:!1},{title:"",path:"",isSeparator:!0,isActive:!1}],js=()=>e.jsx(Ce,{children:e.jsxs(P,{element:e.jsxs(e.Fragment,{children:[e.jsx(ds,{}),e.jsx(ke,{})]}),children:[e.jsx(P,{path:"overview",element:e.jsxs(e.Fragment,{children:[e.jsx(W,{breadcrumbs:B,children:"Overview"}),e.jsx(Ye,{})]})}),e.jsx(P,{path:"projects",element:e.jsxs(e.Fragment,{children:[e.jsx(W,{breadcrumbs:B,children:"Projects"}),e.jsx(Je,{})]})}),e.jsx(P,{path:"campaigns",element:e.jsxs(e.Fragment,{children:[e.jsx(W,{breadcrumbs:B,children:"Campaigns"}),e.jsx(ns,{})]})}),e.jsx(P,{path:"documents",element:e.jsxs(e.Fragment,{children:[e.jsx(W,{breadcrumbs:B,children:"Documents"}),e.jsx(cs,{})]})}),e.jsx(P,{path:"connections",element:e.jsxs(e.Fragment,{children:[e.jsx(W,{breadcrumbs:B,children:"Connections"}),e.jsx(os,{})]})}),e.jsx(P,{index:!0,element:e.jsx(Re,{to:"/crafted/pages/profile/overview"})})]})});export{js as default};
