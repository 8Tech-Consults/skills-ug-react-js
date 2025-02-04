import React, { useRef, forwardRef } from "react";
import ReactToPrint from "react-to-print";

// -------------------- SAMPLE USER DATA --------------------
// In a real application, you'd fetch this from your backend / API
const currentUser = {
  avatar: "images/1738147290-281612.jpg",
  first_name: "Ursa",
  last_name: "Henry",
  username: "+1 (827) 224-7089",
  email: "admin@gmail.com",
  phone_number_1: "+1 (827) 224-7089",
  phone_number_2: "+1 (809) 485-3471",
  current_address: "Est at rerum sint",
  sex: "Male",
  nationality: "MM",
  religion: "Islam",
  marital_status: "Widowed",
  date_of_birth: "2008-03-28",
  place_of_birth: "Fort Portal",
  objective: "Quis aspernatur quia",
  career_summary: "Voluptate laborum U",
  special_qualification: "Aliqua Voluptas qui",
  present_salary: "Rem assumenda iure s",
  expected_salary: "Incidunt enim debit",
  blood_group: "AB+",
  height: "Nulla voluptatibus v",
  weight: "Molestiae ex cum com",
  languages: "Id culpa hic harum",
  // For demonstration: "degree_university_name" -> Education list
  // "seconday_school_name" -> Certificates list
  degree_university_name: `[
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
  ]`,
  seconday_school_name: `[
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
  ]`,
};

// -------------------- HELPER: Safe JSON parse --------------------
function parseJsonArray(jsonStr: string): any[] {
  if (!jsonStr) return [];
  try {
    const data = JSON.parse(jsonStr);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

// -------------------- CV Content (Printable) --------------------
interface CVContentProps {
  user: typeof currentUser;
}

const CVContent = forwardRef<HTMLDivElement, CVContentProps>(
  ({ user }, ref) => {
    // Parse education & certificate data
    const educationList = parseJsonArray(user.degree_university_name);
    const certificateList = parseJsonArray(user.seconday_school_name);

    return (
      <div ref={ref} className="cv-wrapper">
        {/* Top Section (Two Columns) */}
        <div className="cv-header">
          <div className="cv-header-left">
            {/* Avatar */}
            <img src={user.avatar} alt="Profile" className="cv-avatar" />
          </div>
          <div className="cv-header-right">
            {/* Basic Info */}
            <h2 className="cv-name">
              {user.first_name} {user.last_name}
            </h2>
            <p className="cv-username">{user.username}</p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone 1:</strong> {user.phone_number_1}
              {user.phone_number_2 && ` | Phone 2: ${user.phone_number_2}`}
            </p>
            <p>
              <strong>Address:</strong> {user.current_address}
            </p>
            <p>
              <strong>Sex:</strong> {user.sex} | <strong>Nationality:</strong>{" "}
              {user.nationality}
            </p>
            <p>
              <strong>Religion:</strong> {user.religion} |{" "}
              <strong>Marital Status:</strong> {user.marital_status}
            </p>
            <p>
              <strong>DOB:</strong> {user.date_of_birth}, {user.place_of_birth}
            </p>
          </div>
        </div>

        {/* Objective & Summary */}
        <div className="cv-section">
          <h3>Career Objective</h3>
          <p>{user.objective}</p>
          <h3>Career Summary</h3>
          <p>{user.career_summary}</p>
        </div>

        {/* Special Qualifications & Salary */}
        <div className="cv-section">
          <h3>Special Qualification</h3>
          <p>{user.special_qualification}</p>
          <div className="cv-salary-row">
            <div>
              <strong>Present Salary:</strong> {user.present_salary}
            </div>
            <div>
              <strong>Expected Salary:</strong> {user.expected_salary}
            </div>
          </div>
        </div>

        {/* Personal / Additional Info */}
        <div className="cv-section">
          <h3>Additional Details</h3>
          <p>
            <strong>Blood Group:</strong> {user.blood_group},{" "}
            <strong>Height:</strong> {user.height}, <strong>Weight:</strong>{" "}
            {user.weight}
          </p>
          <p>
            <strong>Languages:</strong> {user.languages}
          </p>
        </div>

        {/* Education Table */}
        <div className="cv-section">
          <h3>Education</h3>
          {educationList.length > 0 ? (
            <table className="cv-table">
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Major</th>
                  <th>Institution</th>
                  <th>Duration</th>
                  <th>Graduation Year</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {educationList.map((edu: any) => (
                  <tr key={edu.id}>
                    <td>{edu.education_level}</td>
                    <td>{edu.major}</td>
                    <td>{edu.institution}</td>
                    <td>{edu.duration}</td>
                    <td>{edu.graduation_year}</td>
                    <td>{edu.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No education records found.</p>
          )}
        </div>

        {/* Certificates Table */}
        <div className="cv-section">
          <h3>Certificates</h3>
          {certificateList.length > 0 ? (
            <table className="cv-table">
              <thead>
                <tr>
                  <th>Certificate Title</th>
                  <th>Issuing Authority</th>
                  <th>Date Issued</th>
                  <th>Certificate ID</th>
                </tr>
              </thead>
              <tbody>
                {certificateList.map((cert: any) => (
                  <tr key={cert.id}>
                    <td>{cert.certificate_title}</td>
                    <td>{cert.issuing_authority}</td>
                    <td>{cert.date_issued}</td>
                    <td>{cert.certificate_id || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No certificate records found.</p>
          )}
        </div>
      </div>
    );
  }
);

// -------------------- MAIN PAGE COMPONENT --------------------
export default function MyCVPage() {
  const printRef = useRef<HTMLDivElement>(null);

  return (
    <div className="my-cv-container">
      {/* Header with Print Button */}
      <div className="cv-header-section">
        <h2>My CV</h2>
        {/*   <ReactToPrint
          trigger={() => <button className="btn-print">Print to PDF</button>}
          content={() => printRef.current}
          documentTitle={`${currentUser.first_name}_${currentUser.last_name}_CV`}
        /> */}
      </div>

      {/* The CV Content (Printable Area) */}
      <div className="cv-print-area" ref={printRef}>
        <CVContent user={currentUser} />
      </div>

      {/* Inline CSS to make this file self-contained */}
      <style>{`
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
      `}</style>
    </div>
  );
}
