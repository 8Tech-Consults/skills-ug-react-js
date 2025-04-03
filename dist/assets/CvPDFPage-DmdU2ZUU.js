import{ba as b,r as t,P as d,j as e,ae as n,a7 as i,ad as g,ag as j,z as o,ah as w,C as v}from"./index-vCKNI0hA.js";import{PageSkeleton as y}from"./JobDetailPage-B47UNYrP.js";import"./index-8sqG7PSo.js";function P(){const{id:c}=b(),[l,a]=t.useState(!0),[m,f]=t.useState(""),[p,h]=t.useState(new d),u=async()=>{a(!0);try{const r=await j(`cvs/${c}`);if(r.code!==1){o.error(r.message||"Failed to fetch CV"),a(!1);return}const s=d.fromJson(JSON.stringify(r.data));if(!s.id){o.error("Failed to fetch CV"),a(!1);return}h(s),f(w+"/storage/"+s.school_pay_account_id),await x()}catch(r){console.error("Error fetching CV:",r),o.error("Failed to fetch CV: "+r.message)}finally{a(!1)}},x=async()=>{try{(await v("/view-record-create",{type:"CV",item_id:c})).code===1&&o.success("View recorded successfully.")}catch{}};return t.useEffect(()=>{document.title="My CV",u()},[c]),l?e.jsx(n,{children:e.jsx(y,{})}):e.jsxs(n,{children:[e.jsxs("ol",{className:"breadcrumb breadcrumb-item text-muted fs-6 fw-bold mb-5 mx-3",children:[e.jsx("li",{className:"breadcrumb-item pe-3",children:e.jsx(i,{to:"/",className:"active text-decoration-none",children:"Home"})}),e.jsx("li",{className:"breadcrumb-item pe-3 ",children:e.jsx(i,{to:"/cv-bank",className:"active text-decoration-none",children:"CVs"})}),e.jsx("li",{className:"breadcrumb-item px-3 text-muted ",children:p.name})]}),e.jsxs("div",{className:"  shadow-sm my-4",children:[e.jsx(g,{}),e.jsxs("div",{className:"card-body",children:[e.jsx("section",{className:"pdf-viewer-container mb-4",children:e.jsx("iframe",{title:"My CV PDF Viewer",src:m,className:"pdf-iframe",allowFullScreen:!0,"aria-label":"PDF viewer"})}),e.jsx("div",{className:"pdf-footer text-center",children:e.jsx(i,{to:"/cv-bank",className:"btn btn-outline-primary",children:"Back to CV Bank"})})]})]}),e.jsx("style",{children:`
        .cv-page-container {
          max-width: 900px;
          margin: auto;
          background-color: #fff;
          border-radius: 8px;
          overflow: hidden;
        }
        .pdf-viewer-container {
          border: 1px solid #ddd;
          border-radius: 5px;
          overflow: hidden;
          background-color: #fdfdfd;
          height: 95vh;
        }
        .pdf-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
        .pdf-footer {
          padding: 1rem;
        }
        @media print {
          .cv-page-container {
            margin: 0;
            box-shadow: none;
          }
        }
      `})]})}export{P as default};
