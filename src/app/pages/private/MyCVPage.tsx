import React from "react";
import Utils from "../../services/Utils";
import { Content } from "../../../_metronic/layout/components/content";

export default function MyCVPage() {
  // PDF URL for the current user (you can update or fetch as needed)
  const currentUser = {
    pdfUrl:
      "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf",
  };

  // Use a utility-provided file if available, otherwise fallback to the user's PDF URL.
  const pdfSource = Utils.file("files/gen-cv-100.pdf") || currentUser.pdfUrl;

  return (
    <Content>
      <main className="pdf-page-container">
        <header>
          <h2>My CV</h2>
        </header>

        <section className="pdf-viewer-container">
          <iframe
            title="My CV PDF Viewer"
            src={pdfSource}
            className="pdf-iframe"
            allowFullScreen
            aria-label="PDF viewer"
          />
        </section>

        <footer className="pdf-footer">
          <a href={pdfSource} target="_blank" rel="noopener noreferrer">
            Open PDF in a new window
          </a>
        </footer>

        <style>{`
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
          height: 80vh;
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
      `}</style>
      </main>
    </Content>
  );
}
