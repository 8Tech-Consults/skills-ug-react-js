// src/app/pages/public/sections/LandingCategoriesSection.tsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ManifestModel } from "../../../models/Manifest";

// Example ads data (placeholder for demonstration)
const QUICK_ADS = [
  {
    title: "Government Jobs",
    description: "Multiple openings for engineers in public offices...",
    linkText: "VIEW ALL (138)",
    linkPath: "/jobs?type=government",
  },
  {
    title: "Jobs Abroad",
    description: "Cambodia (1), China (3), Croatia (1), Greece (2)",
    linkText: "VIEW ALL (14)",
    linkPath: "/jobs?type=abroad",
  },
];

// Framer Motion container variants
const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: { opacity: 0, y: 10 },
};

interface LandingCategoriesSectionProps {
  manifest: ManifestModel | null;
}

const LandingCategoriesSection: React.FC<LandingCategoriesSectionProps> = ({
  manifest,
}) => {
  // Fallback if manifest is null or undefined
  const currentManifest = manifest || new ManifestModel();

  // Separate categories by type (Functional vs. Industrial)
  const allCategories = currentManifest.CATEGORIES || [];

  // Filter categories for "Functional" or "Industrial" and status "Active"
  const functionalCategories = allCategories.filter(
    (cat: any) => cat.type === "Functional" && cat.status === "Active"
  );
  const industrialCategories = allCategories.filter(
    (cat: any) => cat.type === "Industry" && cat.status === "Active"
  );

  // Manage which tab is active
  const [activeTab, setActiveTab] = useState<"functional" | "industrial">(
    "functional"
  );

  // Manage expanded/collapsed view
  const [expanded, setExpanded] = useState(true);

  // Determine which set of categories to display
  const categories =
    activeTab === "functional" ? functionalCategories : industrialCategories;

  // If collapsed, only show the first 12 categories
  const displayedCategories = expanded ? categories : categories.slice(0, 12);

  return (
    <div className="py-5" style={{ backgroundColor: "#f5f5f5" }}>
      {/* Inline CSS in <style> tag to keep everything in one file */}
      <style>
        {`
          /* Card and container improvements */
          .landing-categories-card {
            border: 1px solid #ccc !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05) !important;
          }

          /* Hover-lift effect for links */
          .category-link {
            transition: background-color 0.2s ease, transform 0.2s ease;
            border-radius: 4px;
            padding: 6px 8px;
          }
          .category-link:hover {
            background-color: #ececec;
            transform: translateY(-2px);
            box-shadow: 0 2px 4px rgba(0,0,0,0.08);
            text-decoration: none; /* ensure link doesn't underline on hover */
          }

          /* Hover-scale for CTA button */
          .hover-scale {
            transition: transform 0.2s ease;
          }
          .hover-scale:hover {
            transform: scale(1.03);
          }
        `}
      </style>

      <div className="container px-lg-10">
        <div className="row">
          {/* LEFT SIDE: BROWSE CATEGORIES */}
          <div className="col-lg-9 mb-5 mb-lg-0">
            <motion.div
              className="card landing-categories-card"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Card header */}
              <div className="card-header d-flex align-items-center justify-content-between bg-white">
                <h5 className="mb-0 d-flex align-items-center">
                  <i className="bi bi-list me-2 text-primary fs-4"></i>
                  <span className="text-primary fw-bolder fs-4">
                    Browse Categories
                  </span>
                </h5>

                {/* Tab Switch: Functional / Industrial */}
                <div>
                  <button
                    className={`btn btn-sm fw-bold me-2 ${
                      activeTab === "functional" ? "btn-primary" : "btn-light"
                    }`}
                    onClick={() => setActiveTab("functional")}
                  >
                    <i className="bi bi-layers me-1"></i>Functional
                  </button>
                  <button
                    className={`btn btn-sm fw-bold ${
                      activeTab === "industrial" ? "btn-primary" : "btn-light"
                    }`}
                    onClick={() => setActiveTab("industrial")}
                  >
                    <i className="bi bi-building me-1"></i>Industrial
                  </button>
                </div>
              </div>

              {/* Card body */}
              <div className="card-body p-4">
                {/* Categories list */}
                <motion.div
                  className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2"
                  variants={containerVariants}
                >
                  {displayedCategories.map((cat: any) => (
                    <motion.div key={cat.id} variants={containerVariants}>
                      <Link
                        to={`/jobs?category=${encodeURIComponent(cat.slug)}`}
                        className="text-dark d-flex align-items-center p-1 category-link"
                      >
                        {/* If cat.icon is provided, display it */}
                        {cat.icon ? (
                          <i
                            className={`bi ${cat.icon} text-primary me-2 fs-5`}
                          ></i>
                        ) : (
                          <i className="bi bi-arrow-right-circle text-primary me-2 fs-5"></i>
                        )}
                        <span>
                          {cat.name}{" "}
                          <span className="text-muted">
                            ({cat.jobs_count ?? 0})
                          </span>
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Expand/Collapse Button */}
                {categories.length > 12 && (
                  <div className="mt-4 text-center text-md-start">
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => setExpanded(!expanded)}
                    >
                      {expanded ? "Show Fewer" : "Show More"}{" "}
                      <i
                        className={`bi bi-chevron-${
                          expanded ? "up" : "down"
                        } ms-1`}
                      ></i>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: ADS/PROMOS */}
          <motion.div
            className="col-lg-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Ads list */}
            {QUICK_ADS.map((ad, index) => (
              <div className="card landing-categories-card mb-4" key={index}>
                <div className="card-body">
                  <h6 className="fw-bold text-primary">{ad.title}</h6>
                  <p className="text-muted mb-3">{ad.description}</p>
                  <Link to={ad.linkPath} className="fw-bold text-dark fs-7">
                    {ad.linkText} <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}

            {/* Additional Ad or CTA */}
            <div className="card landing-categories-card">
              <div className="card-body p-3 text-center bg-light">
                <img
                  src="https://bdjobs.com/images/video-cv.gif"
                  alt="Ad Banner"
                  className="img-fluid rounded mb-3"
                />
                <button className="btn btn-sm btn-info fw-bold hover-scale">
                  <i className="bi bi-camera-video me-1"></i>Video CV Upload
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingCategoriesSection;
