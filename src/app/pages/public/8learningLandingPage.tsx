// src/app/pages/public/8learningLandingPage.tsx

import React from "react";
import {
  Container,
  // Navbar, // Navbar removed as it's likely part of MasterLayout
  // Nav, // Nav removed as it's likely part of MasterLayout
  Button,
  Row,
  Col,
  Card,
  Carousel,
  // Form, // Form removed as it wasn't used
  // InputGroup, // InputGroup removed as it wasn't used
} from "react-bootstrap";
// Using Bootstrap Icons instead of FontAwesome for consistency with other examples
import {
  PiStudentFill, // Replacement for FaGraduationCap
  PiChalkboardTeacherFill, // Replacement for FaChalkboardTeacher
  PiUsersThreeFill, // Replacement for FaUsers
  PiFacebookLogoFill, // Replacement for FaFacebook
  PiTwitterLogoFill, // Replacement for FaTwitter
  PiInstagramLogoFill, // Replacement for FaInstagram
} from "react-icons/pi"; // Using react-icons/pi for Phosphor Icons (example)
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Keep for internal routing if needed

// Define your main colours (using Bootstrap theme names is often better)
const primaryColor = "var(--bs-primary)"; // Use Bootstrap variable
const accentColor = "var(--bs-warning)"; // Using warning as an accent color

// Animation Variants
const fadeVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

// Placeholder image function
const placeholderImg = (
  width: number,
  height: number,
  text: string,
  bgColor: string = "6c757d",
  textColor: string = "ffffff"
) => {
  return `https://8technologies.net/wp-content/uploads/2024/05/Dr-Drake.jpg`;
};

const EightLearningLandingPage: React.FC = () => {
  return (
    <>
      {/* --- Hero Section --- */}
      {/* Use classes for background and padding */}
      <section
        id="hero"
        className="py-5 text-white position-relative overflow-hidden"
        // Apply background using inline style for complex gradient/image, or use CSS classes
        style={{
          // Example using a CSS variable for primary color and a placeholder background
          backgroundImage: `linear-gradient(45deg, rgba(17, 71, 134, 0.85), rgba(243, 61, 2, 0.85)), url(https://t3.ftcdn.net/jpg/07/53/20/82/360_F_753208233_2tFjybdyLCTU12MEJfguSJKBtl0sG5pj.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "70vh", // Ensure hero has substantial height
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Overlay div removed, incorporated into background gradient */}
        <Container style={{ position: "relative", zIndex: 2 }}>
          <Row className="align-items-center gy-4">
            {" "}
            {/* Added gy-4 for vertical gap on small screens */}
            <Col md={7}>
              <motion.div
                initial="hidden"
                whileInView="visible" // Animate when in view
                viewport={{ once: true }} // Animate only once
                variants={fadeVariant}
              >
                <h1 className="display-4 fw-bold mb-3">
                  {" "}
                  {/* Added margin */}
                  8learning – Transform Your Future, One Skill at a Time.
                </h1>
                <p className="lead text-white-75 mb-4">
                  {" "}
                  {/* Use text-white-75 for muted */}
                  Join our comprehensive skills training programs and unlock
                  your potential with expert instructors and flexible learning.
                </p>
                {/* Use React-Bootstrap Buttons */}
                <a
                  href="https://8learning.org/register-for-course/"
                  className="me-3 fw-bold"
                  target="_blank"
                >
                  Get Started
                </a>
                <a
                  href="https://8learning.org/courses"
                  className="btn btn-outline-light btn-lg fw-bold"
                  target="_blank"
                >
                  Browse Courses
                </a>
              </motion.div>
            </Col>
            <Col md={5}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleVariant} // Use scale animation
              >
                <img
                  src={placeholderImg(500, 400, "Expert Training")}
                  alt="Expert Training Session"
                  className="img-fluid rounded shadow-lg" // Enhanced shadow
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* --- Features Section --- */}
      <section id="features" className="py-5 bg-light">
        {" "}
        {/* Use Bootstrap bg class */}
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold text-primary">Why Choose 8learning?</h2>{" "}
              {/* Use text-primary */}
              <p className="lead text-muted">
                Explore a wide range of skills training programs designed to
                empower you for the future.
              </p>
            </Col>
          </Row>
          <Row>
            {/* Feature 1 */}
            <Col md={4} className="mb-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeVariant}
              >
                <Card className="h-100 text-center shadow border-0 p-3">
                  {" "}
                  {/* Added padding */}
                  <Card.Body>
                    <PiChalkboardTeacherFill
                      size={50}
                      className="text-primary mb-3" // Use text-primary class
                    />
                    <Card.Title className="fw-semibold">
                      Expert Instructors
                    </Card.Title>
                    <Card.Text className="text-muted">
                      Learn from industry professionals with years of real-world
                      experience.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            {/* Feature 2 */}
            <Col md={4} className="mb-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeVariant}
              >
                <Card className="h-100 text-center shadow border-0 p-3">
                  <Card.Body>
                    <PiStudentFill size={50} className="text-primary mb-3" />
                    <Card.Title className="fw-semibold">
                      Comprehensive Curriculum
                    </Card.Title>
                    <Card.Text className="text-muted">
                      Gain practical skills with hands-on projects and real-life
                      case studies.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            {/* Feature 3 */}
            <Col md={4} className="mb-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeVariant}
              >
                <Card className="h-100 text-center shadow border-0 p-3">
                  <Card.Body>
                    <PiUsersThreeFill size={50} className="text-primary mb-3" />
                    <Card.Title className="fw-semibold">
                      Community Support
                    </Card.Title>
                    <Card.Text className="text-muted">
                      Connect with like-minded learners and industry experts in
                      our vibrant community.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer Section - Add your standard footer component here if needed */}
      {/* <FooterSection /> */}

      {/* Optional: Add custom styles here if needed, though Bootstrap utilities are preferred */}
      {/* <style jsx global>{`
        // Custom CSS can go here
      `}</style> */}
    </>
  );
};

export default EightLearningLandingPage;
