import{r as t,j as e,ae as n,ag as p,z as i,P as m,ah as g}from"./index-DYlhEq0c.js";import{PageSkeleton as h}from"./JobDetailPage-BAEqAI8W.js";import"./index-BlIg1qZq.js";function y(){const[d,o]=t.useState(!0),[c,l]=t.useState(""),f=async()=>{o(!0);var r=null;try{r=await p("users/me"),r.code!==1&&i.error(r.message||"Failed to fetch cv because : "+r.message)}catch(a){throw o(!1),i.error("Failed to fetch cv because : "+a),console.error("Error fetching job by ID:",a),a}o(!1);var s=m.fromJson(JSON.stringify(r.data));if(s.id==""){i.error("Failed to fetch cv because : "+r.message);return}l(g+"/storage/"+s.school_pay_account_id)};return t.useEffect(()=>{document.title="My CV",f()},[]),d?e.jsx(n,{children:e.jsx(h,{})}):e.jsx(n,{children:e.jsxs("main",{className:"",children:[e.jsx("section",{className:"pdf-viewer-container",children:e.jsx("iframe",{title:"My CV PDF Viewer",src:c,className:"pdf-iframe",allowFullScreen:!0,"aria-label":"PDF viewer"})}),e.jsx("style",{children:`
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
      `})]})})}export{y as default};
