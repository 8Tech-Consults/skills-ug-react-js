import{r as a,P as n,bg as b,j as e,ae as h,af as c,_ as g,L as i,ai as v}from"./index-C-COi_ch.js";import{pageSkeleton as w}from"./JobDetailPage-roP_0022.js";import"./index-DXh_XnLD.js";function S(){const[d,t]=a.useState(!0),[l,f]=a.useState(""),[m,p]=a.useState(new n),{id:u}=b(),x=async()=>{t(!0);var r=null;try{r=await g(`cvs/${u}`),r.code!==1&&i.error(r.message||"Failed to fetch cv because : "+r.message)}catch(s){throw t(!1),i.error("Failed to fetch cv because : "+s),console.error("Error fetching job by ID:",s),s}t(!1);var o=n.fromJson(JSON.stringify(r.data));if(o.id==""){i.error("Failed to fetch cv because : "+r.message);return}p(o),f(v+"/storage/"+o.school_pay_account_id)};return a.useEffect(()=>{document.title="My CV",x()},[]),d?w():e.jsx(h,{children:e.jsxs("main",{className:"",children:[e.jsxs("ol",{className:"breadcrumb breadcrumb-item text-muted fs-6 fw-bold mb-5 mx-3",children:[e.jsx("li",{className:"breadcrumb-item pe-3",children:e.jsx(c,{to:"/",className:"active text-decoration-none",children:"Home"})}),e.jsx("li",{className:"breadcrumb-item pe-3 ",children:e.jsx(c,{to:"/cv-bank",className:"active text-decoration-none",children:"CVs"})}),e.jsx("li",{className:"breadcrumb-item px-3 text-muted ",children:m.name})]}),e.jsx("section",{className:"pdf-viewer-container",children:e.jsx("iframe",{title:"My CV PDF Viewer",src:l,className:"pdf-iframe",allowFullScreen:!0,"aria-label":"PDF viewer"})}),e.jsx("style",{children:`
        .pdf-page-container {
          max-width: 900px;
          margin: 20px auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        header h2 {
          text-align: center;
          margin-bottom: 1rem;
          color: #333;
        }
        .pdf-viewer-container {
          border: 1px solid #ddd;
          border-radius: 5px;
          overflow: hidden;
          background-color: #fff;
          height: 95vh;
        }
        .pdf-iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }
        .pdf-footer {
          text-align: center;
          margin-top: 15px;
        }
        .pdf-footer a {
          color: #0078d7;
          text-decoration: none;
          font-weight: bold;
        }
        .pdf-footer a:hover {
          text-decoration: underline;
        }
        @media print {
          .pdf-page-container {
            margin: 0;
            padding: 0;
            box-shadow: none;
          }
        }
      `})]})})}export{S as default};
