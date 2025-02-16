import{r as i,K as le,L as _,j as e,C as d,af as h,a0 as b,U as L,N as ie}from"./index-DCNJvYWR.js";import{C as te}from"./CvModel-P-TP-SM-.js";import{JobSkeleton as ne}from"./JobDetailPage-Co-yT55X.js";import"./index-CDUdbnSp.js";const T={search:"",experienceMin:void 0,experienceMax:void 0,educationLevel:"",skills:""},re=["High School","Bachelor's Degree","Master's Degree","PhD"],o={hidden:{opacity:0,y:10},visible:{opacity:1,y:0,transition:{duration:.3}},exit:{opacity:0,y:10}},xe=()=>{const[v,G]=i.useState([]),[g,M]=i.useState(!1),[B,D]=i.useState(!1),[U,y]=i.useState(!1),[n,m]=i.useState(T),[r,j]=i.useState(1),[u,Y]=i.useState(1),[p,R]=i.useState(!0),[l,H]=i.useState(null),[K,c]=i.useState(!1),{currentUser:N,setCurrentUser:ce}=le(),[Q,C]=i.useState(!1),[X,q]=i.useState(!1),[z,I]=i.useState(!1),[t,W]=i.useState({jobTitle:"",companyName:"",salary:"",startDate:"",jobDescription:""}),[k,P]=i.useState(!1);i.useEffect(()=>{N!=null?(D(!0),(N==null?void 0:N.is_company)=="Yes"?y(!0):y(!1)):(D(!1),y(!1)),O(r,n)},[r,n]);const O=async(s,a)=>{var f,J;try{M(!0);const V={search:a.search,experienceMin:((f=a.experienceMin)==null?void 0:f.toString())||"",experienceMax:((J=a.experienceMax)==null?void 0:J.toString())||"",educationLevel:a.educationLevel||"",skills:a.skills||""},S=await te.fetchJobs(s,V);G(S.data),j(S.current_page),Y(S.last_page)}catch{_.error("Failed to load CV bank data.")}finally{M(!1)}},Z=s=>{s.preventDefault(),j(1),O(1,n)},ee=()=>{m(T),j(1)},w=s=>{s>=1&&s<=u&&j(s)},$=s=>{H(s),c(!0)},se=()=>{if(!B){q(!0),c(!1);return}if(!U){I(!0),c(!1);return}C(!0),c(!1)},A=()=>{C(!1)},E=()=>{q(!1),c(!0)},F=()=>{I(!1),c(!0)},x=s=>{W(a=>({...a,[s.target.name]:s.target.value}))},ae=async s=>{s.preventDefault(),P(!0);var a;try{a=await ie("/job-offer-create",{job_title:t.jobTitle,company_name:t.companyName,salary:t.salary,start_date:t.startDate,job_description:t.jobDescription,candidate_id:l==null?void 0:l.id}),_.success("Job offer created successfully!"),C(!1)}catch(f){_.error(f+"")}finally{P(!1)}};return g?ne():e.jsxs(d.div,{className:"container py-4 px-0 px-md-12",variants:o,initial:"hidden",animate:"visible",exit:"exit",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-0",children:[e.jsxs("ol",{className:"breadcrumb breadcrumb-item text-muted fs-6 fw-bold mb-5 mx-0 mt-2",children:[e.jsx("li",{className:"breadcrumb-item pe-3",children:e.jsx(h,{to:"/",className:"active text-decoration-none",children:"Home"})}),e.jsx("li",{className:"breadcrumb-item px-3 text-muted",children:"CV Bank"})]}),e.jsxs("div",{className:"d-flex gap-2 mb-2",children:[e.jsxs("button",{className:`btn btn-outline-secondary ${p?"active":""}`,onClick:()=>R(!0),children:[e.jsx("i",{className:"bi bi-grid-fill"})," Grid"]}),e.jsxs("button",{className:`btn btn-outline-secondary ${p?"":"active"}`,onClick:()=>R(!1),children:[e.jsx("i",{className:"bi bi-list-task"})," Table"]})]})]}),e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-3",children:e.jsx(d.div,{className:"card shadow-sm h-100",variants:o,initial:"hidden",animate:"visible",exit:"exit",children:e.jsx("div",{className:"card-body",children:e.jsxs("form",{onSubmit:Z,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Search by Name/Email"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Enter keywords...",value:n.search,onChange:s=>m(a=>({...a,search:s.target.value}))})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Experience Range (years)"}),e.jsxs("div",{className:"row g-2",children:[e.jsx("div",{className:"col",children:e.jsx("input",{type:"number",className:"form-control",placeholder:"Min",min:"0",value:n.experienceMin||"",onChange:s=>m(a=>({...a,experienceMin:parseInt(s.target.value)||0}))})}),e.jsx("div",{className:"col",children:e.jsx("input",{type:"number",className:"form-control",placeholder:"Max",min:"0",value:n.experienceMax||"",onChange:s=>m(a=>({...a,experienceMax:parseInt(s.target.value)||0}))})})]})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Education Level"}),e.jsxs("select",{className:"form-select",value:n.educationLevel,onChange:s=>m(a=>({...a,educationLevel:s.target.value})),children:[e.jsx("option",{value:"",children:"All Education Levels"}),re.map(s=>e.jsx("option",{value:s,children:s},s))]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"form-label",children:"Skills"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"e.g., JavaScript, React, Python",value:n.skills,onChange:s=>m(a=>({...a,skills:s.target.value}))}),e.jsx("div",{className:"form-text",children:"Separate skills with commas"})]}),e.jsxs("div",{className:"d-grid gap-2",children:[e.jsxs("button",{type:"submit",className:"btn btn-primary",children:[e.jsx("i",{className:"bi bi-funnel me-2"}),"Apply Filters"]}),e.jsxs("button",{type:"button",className:"btn btn-outline-danger",onClick:ee,children:[e.jsx("i",{className:"bi bi-arrow-counterclockwise me-2"}),"Reset Filters"]})]})]})})})}),e.jsxs("div",{className:"col-lg-9",children:[g?e.jsx("div",{className:"text-center py-5",children:e.jsx("div",{className:"spinner-border text-primary",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})})}):v.length===0?e.jsx("div",{className:"alert alert-warning",children:"No matching candidates found."}):e.jsx(b,{mode:"wait",children:e.jsx(d.div,{variants:o,initial:"hidden",animate:"visible",exit:"exit",children:p?e.jsx("div",{className:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4",children:v.map((s,a)=>e.jsx(d.div,{className:"col",variants:o,initial:"hidden",animate:"visible",exit:"exit",children:e.jsx("div",{className:"card h-100 shadow-sm",children:e.jsxs("div",{className:"card-body text-center",children:[e.jsx("div",{className:"d-flex justify-content-center mb-3",children:s.avatar?e.jsx("img",{src:L.img(s.avatar),alt:"Avatar",className:"rounded-circle",style:{width:"100px",height:"100px",objectFit:"cover"}}):e.jsx("div",{className:"rounded-circle",style:{width:"100px",height:"100px",backgroundColor:"#dee2e6"}})}),e.jsx("h5",{className:"card-title mb-2",children:s.name||`${s.first_name} ${s.last_name}`}),e.jsxs("div",{className:"text-muted small mb-3",children:[e.jsx("div",{children:s.email}),e.jsx("div",{children:s.phone_number_1||s.phone_number_2})]}),e.jsx("button",{className:"btn btn-outline-primary btn-sm",onClick:()=>$(s),children:"View Details"})]})})},s.id))}):e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover align-middle",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Avatar"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Phone"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:v.map((s,a)=>e.jsxs("tr",{children:[e.jsx("td",{children:a+1+(r-1)*10}),e.jsx("td",{children:s.avatar?e.jsx("img",{src:L.img(s.avatar),alt:"Avatar",className:"rounded-circle",style:{width:"40px",height:"40px"}}):e.jsx("div",{className:"rounded-circle",style:{width:"40px",height:"40px",backgroundColor:"#dee2e6"}})}),e.jsx("td",{children:s.name||`${s.first_name} ${s.last_name}`}),e.jsx("td",{children:s.email}),e.jsx("td",{children:s.phone_number_1||s.phone_number_2}),e.jsx("td",{children:e.jsx("button",{className:"btn btn-outline-primary btn-sm",onClick:()=>$(s),children:"Details"})})]},s.id))})]})})},p?"grid":"table")}),!g&&u>1&&e.jsx("nav",{className:"mt-4",children:e.jsxs("ul",{className:"pagination justify-content-center",children:[e.jsx("li",{className:`page-item ${r===1?"disabled":""}`,onClick:()=>w(r-1),children:e.jsx("button",{className:"page-link",children:"Previous"})}),Array.from({length:u},(s,a)=>a+1).map(s=>e.jsx("li",{className:`page-item ${s===r?"active":""}`,onClick:()=>w(s),children:e.jsx("button",{className:"page-link",children:s})},s)),e.jsx("li",{className:`page-item ${r===u?"disabled":""}`,onClick:()=>w(r+1),children:e.jsx("button",{className:"page-link",children:"Next"})})]})})]})]}),e.jsx(b,{children:K&&l&&e.jsx(d.div,{className:"modal fade show d-block",tabIndex:-1,variants:o,initial:"hidden",animate:"visible",exit:"exit",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:e.jsx("div",{className:"modal-dialog modal-lg modal-dialog-centered",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title",children:l.name||`${l.first_name} ${l.last_name}`}),e.jsx("button",{type:"button",className:"btn-close",onClick:()=>c(!1)})]}),e.jsx("div",{className:"modal-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-4 text-center",children:[l.avatar?e.jsx("img",{src:L.img(l.avatar),alt:"Avatar",className:"img-fluid rounded-circle mb-3",style:{width:"150px",height:"150px"}}):e.jsx("div",{className:"rounded-circle bg-secondary mb-3",style:{width:"150px",height:"150px",margin:"0 auto"}}),e.jsx("h5",{children:"Contact Information"}),e.jsxs("ul",{className:"list-unstyled",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Email:"})," ",l.email]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Phone:"})," ",l.phone_number_1||l.phone_number_2]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Location:"})," ",l.current_address]})]})]}),e.jsxs("div",{className:"col-md-8",children:[e.jsx("h5",{children:"Professional Details"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h6",{children:"Objective"}),e.jsx("p",{children:l.objective||"Not specified"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h6",{children:"Career Summary"}),e.jsx("p",{children:l.career_summary||"Not specified"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("h6",{children:"Special Qualifications"}),e.jsx("p",{children:l.special_qualification||"None provided"})]})]})]})}),e.jsxs("div",{className:"modal-footer d-flex justify-content-between",children:[e.jsxs("div",{children:[e.jsx(h,{to:`/cv-bank/${l.id}`,className:"btn btn-primary me-2",children:"View Complete Cv"}),e.jsx("button",{className:"btn btn-success",onClick:se,children:"Offer a Job"})]}),e.jsx("button",{className:"btn btn-secondary",onClick:()=>c(!1),children:"Close"})]})]})})})}),e.jsx(b,{children:Q&&e.jsx(d.div,{className:"modal fade show d-block",tabIndex:-1,variants:o,initial:"hidden",animate:"visible",exit:"exit",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:e.jsx("div",{className:"modal-dialog modal-md modal-dialog-centered",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title",children:"Offer a Job"}),e.jsx("button",{type:"button",className:"btn-close",onClick:A})]}),e.jsxs("form",{onSubmit:ae,children:[e.jsxs("div",{className:"modal-body",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Job Title"}),e.jsx("input",{type:"text",className:"form-control",name:"jobTitle",value:t.jobTitle,onChange:x,required:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Company Name"}),e.jsx("input",{type:"text",className:"form-control",name:"companyName",value:t.companyName,onChange:x,required:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Proposed Salary (UGX)"}),e.jsx("input",{type:"number",className:"form-control",name:"salary",value:t.salary,onChange:x,required:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Start Date"}),e.jsx("input",{type:"date",className:"form-control",name:"startDate",value:t.startDate,onChange:x,required:!0})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Job Description"}),e.jsx("textarea",{className:"form-control",name:"jobDescription",rows:3,value:t.jobDescription,onChange:x,required:!0})]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:k,children:k?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),"Submitting..."]}):"Submit Offer"}),e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:A,disabled:k,children:"Cancel"})]})]})]})})})}),e.jsx(b,{children:X&&e.jsx(d.div,{className:"modal fade show d-block",tabIndex:-1,variants:o,initial:"hidden",animate:"visible",exit:"exit",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title",children:"Login Required"}),e.jsx("button",{type:"button",className:"btn-close",onClick:E})]}),e.jsxs("div",{className:"modal-body",children:[e.jsx("p",{children:"You need to be logged in as a company to offer a job."}),e.jsxs("p",{children:["Please ",e.jsx(h,{to:"/login",children:"login"})," to continue."]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx(h,{to:"/login",className:"btn btn-primary",children:"Login"}),e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:E,children:"Close"})]})]})})})}),e.jsx(b,{children:z&&e.jsx(d.div,{className:"modal fade show d-block",tabIndex:-1,variants:o,initial:"hidden",animate:"visible",exit:"exit",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:e.jsx("div",{className:"modal-dialog modal-dialog-centered",children:e.jsxs("div",{className:"modal-content",children:[e.jsxs("div",{className:"modal-header",children:[e.jsx("h5",{className:"modal-title",children:"Company Registration Required"}),e.jsx("button",{type:"button",className:"btn-close",onClick:F})]}),e.jsxs("div",{className:"modal-body",children:[e.jsx("p",{children:"You need to register as a company to offer a job."}),e.jsxs("p",{children:["Please ",e.jsx(h,{to:"/admin/company-profile-edit",children:"register your company profile"})," to continue."]})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx(h,{to:"/admin/company-profile-edit",className:"btn btn-primary",children:"Register Company"}),e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:F,children:"Close"})]})]})})})})]})};export{xe as default};
