import{r,x as F,z as I,j as e,ao as P,H as x,U as f,C as R}from"./index-D1_DXHNL.js";import{C as $}from"./CvModel-KlK3XX17.js";const C={search:"",industry:"",employeesMin:void 0,employeesMax:void 0,establishedAfter:void 0,certifications:""},D=["Technology","Finance","Healthcare","Manufacturing","Retail","Education","Construction","Transportation"],_={hidden:{opacity:0,y:10},visible:{opacity:1,y:0,transition:{duration:.3}},exit:{opacity:0,y:10}},Y=()=>{const[o,w]=r.useState([]),[S,u]=r.useState(!1),[t,l]=r.useState(C),[i,n]=r.useState(1),[c,M]=r.useState(1),[d,b]=r.useState(!0),k=F();r.useEffect(()=>{p(i,t)},[i,t]);const p=async(s,a)=>{var y,N,g;try{u(!0);const v={search:a.search,industry:a.industry||"",employeesMin:((y=a.employeesMin)==null?void 0:y.toString())||"",employeesMax:((N=a.employeesMax)==null?void 0:N.toString())||"",establishedAfter:((g=a.establishedAfter)==null?void 0:g.toString())||"",certifications:a.certifications||"",is_company:"Yes"},h=await $.fetchJobs(s,v);w(h.data),n(h.current_page),M(h.last_page)}catch{I.error("Failed to load company data.")}finally{u(!1)}},A=s=>{s.preventDefault(),n(1),p(1,t)},E=()=>{l(C),n(1)},m=s=>{s>=1&&s<=c&&n(s)},j=async s=>{try{const a={type:"COMPANY",item_id:s.id};await R("/view-record-create",a)}catch(a){console.error("Error recording view:",a)}k(`/employers/${s.id}`)};return S?e.jsx("div",{className:"container py-4",children:e.jsx(P,{count:10})}):e.jsx(x.div,{className:"container py-4 px-2 px-md-4",variants:_,initial:"hidden",animate:"visible",exit:"exit",children:e.jsxs("div",{className:"row g-4",children:[e.jsx("div",{className:"col-lg-3",children:e.jsx(x.div,{className:"card border-0 shadow-sm h-100",layout:!0,children:e.jsxs("div",{className:"card-body",children:[e.jsx("h4",{className:"mb-4",children:"Search Employers"}),e.jsxs("form",{onSubmit:A,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Company Search"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"Name or industry...",value:t.search,onChange:s=>l(a=>({...a,search:s.target.value}))})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Industry"}),e.jsxs("select",{className:"form-select",value:t.industry,onChange:s=>l(a=>({...a,industry:s.target.value})),children:[e.jsx("option",{value:"",children:"All Industries"}),D.map(s=>e.jsx("option",{value:s,children:s},s))]})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Company Size"}),e.jsxs("div",{className:"row g-2",children:[e.jsx("div",{className:"col",children:e.jsx("input",{type:"number",className:"form-control",placeholder:"Min",min:"0",value:t.employeesMin||"",onChange:s=>l(a=>({...a,employeesMin:Number(s.target.value)}))})}),e.jsx("div",{className:"col",children:e.jsx("input",{type:"number",className:"form-control",placeholder:"Max",min:"0",value:t.employeesMax||"",onChange:s=>l(a=>({...a,employeesMax:Number(s.target.value)}))})})]})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Established After"}),e.jsx("input",{type:"number",className:"form-control",placeholder:"Year",min:"1900",max:new Date().getFullYear(),value:t.establishedAfter||"",onChange:s=>l(a=>({...a,establishedAfter:Number(s.target.value)}))})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"form-label",children:"Certifications"}),e.jsx("input",{type:"text",className:"form-control",placeholder:"e.g. ISO, OSHA...",value:t.certifications,onChange:s=>l(a=>({...a,certifications:s.target.value}))})]}),e.jsxs("div",{className:"d-grid gap-2",children:[e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Search"}),e.jsx("button",{type:"button",className:"btn btn-outline-secondary",onClick:E,children:"Reset"})]})]})]})})}),e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[e.jsx("h3",{className:"fw-bold mb-0",children:"Employers"}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsx("button",{className:`btn btn-sm ${d?"btn-primary":"btn-outline-primary"}`,onClick:()=>b(!0),children:e.jsx("i",{className:"bi bi-grid"})}),e.jsx("button",{className:`btn btn-sm ${d?"btn-outline-primary":"btn-primary"}`,onClick:()=>b(!1),children:e.jsx("i",{className:"bi bi-list"})})]})]}),o.length===0?e.jsx("div",{className:"alert alert-secondary",children:"No companies found. Try adjusting your filters."}):e.jsx(x.div,{variants:_,initial:"hidden",animate:"visible",exit:"exit",children:d?e.jsx("div",{className:"row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4",children:o.map(s=>e.jsx("div",{className:"col",children:e.jsxs("div",{className:"card h-100 border-0 shadow-sm",children:[e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"d-flex align-items-center mb-3",children:[e.jsx("img",{src:f.img(s.company_logo),alt:"Company",style:{width:"60px",height:"60px",objectFit:"cover",borderRadius:"4px"},className:"me-3 border"}),e.jsxs("div",{children:[e.jsx("h5",{className:"mb-0",children:s.company_name}),e.jsxs("p",{className:"small mb-0 mt-1 text-muted",children:[e.jsx("strong",{children:"Country:"})," ",s.company_country]}),e.jsxs("p",{className:"small mb-2 text-muted",children:[e.jsx("strong",{children:"Employees:"})," ",s.company_employees_range]})]})]}),e.jsx("p",{className:"text-truncate-3 small text-muted",children:s.company_description})]}),e.jsx("div",{className:"card-footer bg-white border-0",children:e.jsx("button",{className:"btn btn-sm border border-1 border-primary btn-outline-primary w-100",onClick:()=>j(s),children:"View Details"})})]})},s.id))}):e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover align-middle",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{children:"Company"}),e.jsx("th",{children:"Industry"}),e.jsx("th",{children:"Employees"}),e.jsx("th",{children:"Country"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:o.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("img",{src:f.img(s.company_logo||"default-company.png"),alt:"Company",style:{width:"45px",height:"45px",objectFit:"cover",borderRadius:"4px"},className:"me-2 border"}),e.jsxs("div",{children:[e.jsx("div",{className:"fw-semibold",children:s.company_name}),e.jsx("small",{className:"text-muted",children:s.company_sub_category_id})]})]})}),e.jsx("td",{children:s.company_main_category_id}),e.jsx("td",{children:s.company_employees_range}),e.jsx("td",{children:s.company_country}),e.jsx("td",{children:e.jsx("button",{className:"btn btn-sm btn-outline-primary",onClick:()=>j(s),children:"Details"})})]},s.id))})]})})}),c>1&&e.jsx("nav",{className:"mt-4",children:e.jsxs("ul",{className:"pagination justify-content-center",children:[e.jsx("li",{className:`page-item ${i===1?"disabled":""}`,children:e.jsx("button",{className:"page-link",onClick:()=>m(i-1),children:"« Prev"})}),Array.from({length:c},(s,a)=>a+1).map(s=>e.jsx("li",{className:`page-item ${i===s?"active":""}`,children:e.jsx("button",{className:"page-link",onClick:()=>m(s),children:s})},s)),e.jsx("li",{className:`page-item ${i===c?"disabled":""}`,children:e.jsx("button",{className:"page-link",onClick:()=>m(i+1),children:"Next »"})})]})})]})]})})};export{Y as default};
