import{r as c,j as e}from"./index-DAEQaZOH.js";const d={avatar:"images/1738147290-281612.jpg",first_name:"Ursa",last_name:"Henry",username:"+1 (827) 224-7089",email:"admin@gmail.com",phone_number_1:"+1 (827) 224-7089",phone_number_2:"+1 (809) 485-3471",current_address:"Est at rerum sint",sex:"Male",nationality:"MM",religion:"Islam",marital_status:"Widowed",date_of_birth:"2008-03-28",place_of_birth:"Fort Portal",objective:"Quis aspernatur quia",career_summary:"Voluptate laborum U",special_qualification:"Aliqua Voluptas qui",present_salary:"Rem assumenda iure s",expected_salary:"Incidunt enim debit",blood_group:"AB+",height:"Nulla voluptatibus v",weight:"Molestiae ex cum com",languages:"Id culpa hic harum",degree_university_name:`[
    {
      "id": "mtrh56k0z",
      "education_level": "bachelor",
      "major": "Computer Science",
      "institution": "At possimus non Nam",
      "duration": "4 years",
      "graduation_year": "2005",
      "result": "3.8 GPA"
    },
    {
      "id": "2p2g7z6m2",
      "education_level": "Bachelor's Degree",
      "major": "Deleniti dolorem iru",
      "institution": "s2ascc",
      "duration": "3",
      "graduation_year": "1900",
      "result": "ss"
    },
    {
      "id": "qdrhoq04f",
      "education_level": "diploma",
      "major": "Computer Science & Engineering",
      "institution": "IUIU",
      "duration": "3",
      "graduation_year": "2020",
      "result": "3.1"
    }
  ]`,seconday_school_name:`[
    {
      "id": "mfouaht3k",
      "certificate_title": "Similique rerum ut d",
      "issuing_authority": "Sit nostrud molestia",
      "date_issued": "05-Feb-2010",
      "certificate_id": "Enim explicabo Dolo"
    },
    {
      "id": "grwj5d93o",
      "certificate_title": "Praesentium similiqu",
      "issuing_authority": "Amet sit autem dol",
      "date_issued": "16-Feb-1973",
      "certificate_id": "Nulla consequatur cu"
    }
  ]`};function n(i){if(!i)return[];try{const t=JSON.parse(i);return Array.isArray(t)?t:[]}catch{return[]}}const l=c.forwardRef(({user:i},t)=>{const a=n(i.degree_university_name),s=n(i.seconday_school_name);return e.jsxs("div",{ref:t,className:"cv-wrapper",children:[e.jsxs("div",{className:"cv-header",children:[e.jsx("div",{className:"cv-header-left",children:e.jsx("img",{src:i.avatar,alt:"Profile",className:"cv-avatar"})}),e.jsxs("div",{className:"cv-header-right",children:[e.jsxs("h2",{className:"cv-name",children:[i.first_name," ",i.last_name]}),e.jsx("p",{className:"cv-username",children:i.username}),e.jsxs("p",{children:[e.jsx("strong",{children:"Email:"})," ",i.email]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Phone 1:"})," ",i.phone_number_1,i.phone_number_2&&` | Phone 2: ${i.phone_number_2}`]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Address:"})," ",i.current_address]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Sex:"})," ",i.sex," | ",e.jsx("strong",{children:"Nationality:"})," ",i.nationality]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Religion:"})," ",i.religion," |"," ",e.jsx("strong",{children:"Marital Status:"})," ",i.marital_status]}),e.jsxs("p",{children:[e.jsx("strong",{children:"DOB:"})," ",i.date_of_birth,", ",i.place_of_birth]})]})]}),e.jsxs("div",{className:"cv-section",children:[e.jsx("h3",{children:"Career Objective"}),e.jsx("p",{children:i.objective}),e.jsx("h3",{children:"Career Summary"}),e.jsx("p",{children:i.career_summary})]}),e.jsxs("div",{className:"cv-section",children:[e.jsx("h3",{children:"Special Qualification"}),e.jsx("p",{children:i.special_qualification}),e.jsxs("div",{className:"cv-salary-row",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Present Salary:"})," ",i.present_salary]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Expected Salary:"})," ",i.expected_salary]})]})]}),e.jsxs("div",{className:"cv-section",children:[e.jsx("h3",{children:"Additional Details"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Blood Group:"})," ",i.blood_group,","," ",e.jsx("strong",{children:"Height:"})," ",i.height,", ",e.jsx("strong",{children:"Weight:"})," ",i.weight]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Languages:"})," ",i.languages]})]}),e.jsxs("div",{className:"cv-section",children:[e.jsx("h3",{children:"Education"}),a.length>0?e.jsxs("table",{className:"cv-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Level"}),e.jsx("th",{children:"Major"}),e.jsx("th",{children:"Institution"}),e.jsx("th",{children:"Duration"}),e.jsx("th",{children:"Graduation Year"}),e.jsx("th",{children:"Result"})]})}),e.jsx("tbody",{children:a.map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:r.education_level}),e.jsx("td",{children:r.major}),e.jsx("td",{children:r.institution}),e.jsx("td",{children:r.duration}),e.jsx("td",{children:r.graduation_year}),e.jsx("td",{children:r.result})]},r.id))})]}):e.jsx("p",{children:"No education records found."})]}),e.jsxs("div",{className:"cv-section",children:[e.jsx("h3",{children:"Certificates"}),s.length>0?e.jsxs("table",{className:"cv-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Certificate Title"}),e.jsx("th",{children:"Issuing Authority"}),e.jsx("th",{children:"Date Issued"}),e.jsx("th",{children:"Certificate ID"})]})}),e.jsx("tbody",{children:s.map(r=>e.jsxs("tr",{children:[e.jsx("td",{children:r.certificate_title}),e.jsx("td",{children:r.issuing_authority}),e.jsx("td",{children:r.date_issued}),e.jsx("td",{children:r.certificate_id||"N/A"})]},r.id))})]}):e.jsx("p",{children:"No certificate records found."})]})]})});function h(){const i=c.useRef(null);return e.jsxs("div",{className:"my-cv-container",children:[e.jsx("div",{className:"cv-header-section",children:e.jsx("h2",{children:"My CV"})}),e.jsx("div",{className:"cv-print-area",ref:i,children:e.jsx(l,{user:d})}),e.jsx("style",{children:`
        /* Basic resets & container styling */
        .my-cv-container {
          max-width: 900px;
          margin: 20px auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .cv-header-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .btn-print {
          background: #0d6efd;
          color: #fff;
          border: none;
          padding: 8px 16px;
          cursor: pointer;
          border-radius: 4px;
        }
        .btn-print:hover {
          opacity: 0.8;
        }

        /* CV Layout */
        .cv-wrapper {
          background: #fff;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 5px;
        }
        .cv-header {
          display: flex;
          gap: 20px;
          margin-bottom: 1.5rem;
        }
        .cv-header-left {
          flex: 0 0 150px; /* fixed width for avatar */
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .cv-avatar {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 8px;
          border: 2px solid #eee;
        }
        .cv-header-right {
          flex: 1;
        }
        .cv-name {
          margin: 0;
          font-size: 1.5rem;
          font-weight: bold;
        }
        .cv-username {
          color: #666;
          margin: 4px 0 12px 0;
        }

        /* CV Sections */
        .cv-section {
          margin-bottom: 1.5rem;
        }
        .cv-section h3 {
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
          color: #0d6efd;
        }
        .cv-salary-row {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin-top: 0.5rem;
        }

        /* Tables for Education & Certificates */
        .cv-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1rem;
        }
        .cv-table th, .cv-table td {
          border: 1px solid #ccc;
          padding: 8px 10px;
          font-size: 0.95rem;
        }
        .cv-table thead {
          background-color: #f8f9fa;
        }
        .cv-table th {
          color: #333;
          font-weight: 600;
        }

        /* Print area */
        @media print {
          .btn-print {
            display: none;
          }
          .my-cv-container {
            margin: 0;
            padding: 0;
          }
          .cv-wrapper {
            border: none;
          }
        }
      `})]})}export{h as default};
