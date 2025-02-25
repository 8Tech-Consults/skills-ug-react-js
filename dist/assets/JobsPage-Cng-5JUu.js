import{y as $,r as n,z as d,b5 as N,j as e,ab as L,ae as v,ad as O,H as f,F as V,D as H,G as B,S as b,W as G,V as S,X as j,_ as U}from"./index-CtoB344B.js";const W=[{value:"",label:"All"},{value:"draft",label:"Draft"},{value:"published",label:"Published"},{value:"closed",label:"Closed"},{value:"pending",label:"Pending"}],z=[{value:"",label:"All"},{value:"JC001",label:"IT & Software"},{value:"JC002",label:"Marketing & Sales"},{value:"JC003",label:"Education & Training"}],C={search:"",status:"",category_id:""},J={hidden:{opacity:0,y:10},visible:{opacity:1,y:0,transition:{duration:.3}},exit:{opacity:0,y:10}},Y=()=>{const{currentUser:u}=$(),[g,_]=n.useState([]),[k,p]=n.useState(!1),[t,r]=n.useState(1),[o,w]=n.useState(1),[i,y]=n.useState(C),[l,T]=n.useState(null),[P,h]=n.useState(!1);n.useEffect(()=>{if(!u){d.error("Please log in.");return}m(t,i)},[u,t,i]);const m=async(s,a)=>{try{p(!0);const c={};a.search&&(c.search=a.search),a.status&&(c.status=a.status),a.category_id&&(c.category_id=a.category_id);const I=await N.fetchMyJobs(s,c),{data:D,current_page:R,last_page:E}=I;_(D),r(R),w(E)}catch{d.error("Failed to load jobs.")}finally{p(!1)}},A=()=>{m(t,i)},M=async s=>{try{const a=`Are you sure you want to delete job: ${s.title}?`;window.confirm(a)&&(await N.deleteJob(s.id),d.success("Job deleted successfully!"),m(t,i))}catch(a){d.error(a.message||"Failed to delete the job.")}},F=s=>{T(s),h(!0)},x=s=>{s>=1&&s<=o&&r(s)};return e.jsxs(e.Fragment,{children:[e.jsx(L,{breadcrumbs:[{title:"Jobs",path:"/admin/jobs",isActive:!1}],children:"My Jobs"}),e.jsx("div",{className:"toolbar-wrapper",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsxs("button",{className:"btn btn-sm btn-light-info me-2",onClick:A,title:"Reload Jobs",children:[e.jsx("i",{className:"bi bi-arrow-clockwise me-2"}),"Reload"]}),e.jsxs(v,{to:"/admin/jobs/create",className:"btn btn-sm btn-primary",children:[e.jsx("i",{className:"bi bi-plus me-2"}),"Create Job"]})]})}),e.jsxs(O,{children:[e.jsx(f.div,{variants:J,initial:"hidden",animate:"visible",exit:"exit",children:e.jsxs("div",{className:"card card-custom p-5",children:[e.jsx("h2",{className:"mb-5",children:"All My Jobs"}),e.jsx(V,{initialValues:i,validationSchema:H({search:j().nullable(),status:j().nullable(),category_id:j().nullable()}),onSubmit:s=>{y(s),r(1)},children:({isSubmitting:s,resetForm:a})=>e.jsxs(B,{children:[e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-md-4",children:e.jsx(b,{name:"search",label:"Search",placeholder:"Search by title",component:G})}),e.jsx("div",{className:"col-md-4",children:e.jsx(b,{name:"status",label:"Status",options:W,component:S})}),e.jsx("div",{className:"col-md-4",children:e.jsx(b,{name:"category_id",label:"Category",options:z,component:S})})]}),e.jsxs("div",{className:"mt-4 d-flex",children:[e.jsx("button",{type:"submit",className:"btn btn-primary me-2",disabled:s,children:s?"Searching...":"Search"}),e.jsx("button",{type:"button",className:"btn btn-light",onClick:()=>{a(),y(C),r(1)},children:"Reset"})]})]})}),e.jsx("div",{className:"table-responsive mt-5",children:e.jsxs("table",{className:"table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"fw-bold text-muted",children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Title"}),e.jsx("th",{children:"Category"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Deadline"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:k?e.jsx("tr",{children:e.jsx("td",{colSpan:6,className:"text-center",children:"Loading..."})}):g.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,className:"text-center",children:"No jobs found."})}):g.map((s,a)=>e.jsxs("tr",{children:[e.jsx("td",{children:(t-1)*10+a+1}),e.jsx("td",{className:"text-primary fw-bold cursor-pointer",onClick:()=>F(s),children:s.title}),e.jsx("td",{children:s.category_id}),e.jsx("td",{children:s.status}),e.jsx("td",{children:s.deadline}),e.jsxs("td",{children:[e.jsx(v,{to:`/admin/jobs/${s.id}/edit`,className:"btn btn-sm btn-light-primary me-2",children:"Edit"}),e.jsx("button",{type:"button",className:"btn btn-sm btn-light-danger",onClick:()=>M(s),children:"Delete"})]})]},s.id))})]})}),e.jsx("div",{className:"d-flex justify-content-center mt-5",children:e.jsx("nav",{children:e.jsxs("ul",{className:"pagination",children:[e.jsx("li",{className:`page-item ${t===1?"disabled":""}`,children:e.jsx("button",{className:"page-link",onClick:()=>x(t-1),children:"Previous"})}),Array.from({length:o},(s,a)=>a+1).map(s=>e.jsx("li",{className:`page-item ${s===t?"active":""}`,children:e.jsx("button",{className:"page-link",onClick:()=>x(s),children:s})},s)),e.jsx("li",{className:`page-item ${t===o?"disabled":""}`,children:e.jsx("button",{className:"page-link",onClick:()=>x(t+1),children:"Next"})})]})})})]})}),e.jsx(U,{children:P&&l&&e.jsx(f.div,{className:"modal fade show d-block",tabIndex:-1,variants:J,initial:"hidden",animate:"visible",exit:"exit",children:e.jsx("div",{className:"modal-dialog modal-lg modal-dialog-centered",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("h5",{className:"modal-title",children:["Job Details: ",l.title]}),e.jsx("button",{type:"button",className:"btn btn-icon btn-sm btn-light btn-hover-danger",onClick:()=>h(!1),children:e.jsx("i",{className:"bi bi-x fs-2"})})]}),e.jsxs("div",{className:"modal-body",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Status:"})," ",l.status]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Category:"})," ",l.category_id]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Deadline:"})," ",l.deadline]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Workplace:"})," ",l.workplace]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Employment Status:"})," ",l.employment_status]}),e.jsx("hr",{}),e.jsx("p",{children:e.jsx("strong",{children:"Responsibilities:"})}),e.jsx("div",{dangerouslySetInnerHTML:{__html:l.responsibilities||"<em>None</em>"}}),e.jsx("hr",{}),e.jsx("p",{children:e.jsx("strong",{children:"Benefits:"})}),e.jsx("div",{dangerouslySetInnerHTML:{__html:l.benefits||"<em>None</em>"}})]}),e.jsx("div",{className:"modal-footer",children:e.jsx("button",{className:"btn btn-light",onClick:()=>h(!1),children:"Close"})})]})})})})]})]})};export{Y as default};
