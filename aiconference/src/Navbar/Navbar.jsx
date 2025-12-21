import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("main-content");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMenuOpen(false); // close menu on link click (mobile)
    }
  };

  const goToCommittee = () => {
    if (window.appState) {
      window.appState.setShowTemp(true);
      setMenuOpen(false); // close menu on mobile after click
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Hamburger icon */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter") setMenuOpen((prev) => !prev);
          }}
        >
          &#9776;
        </div>

        {/* Nav links, toggle 'active' class on mobile */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li
            className={activeSection === "main-content" ? "active" : ""}
            onClick={() => scrollToSection("main-content")}
          >
            Home
          </li>
          <li
            className={activeSection === "about" ? "active" : ""}
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className={activeSection === "committee" ? "active" : ""}
            onClick={goToCommittee}
          >
            Committee
          </li>
          <li
            className={activeSection === "speakers" ? "active" : ""}
            onClick={() => scrollToSection("speakers")}
          >
            Speakers
          </li>
          <li
            className={activeSection === "theme" ? "active" : ""}
            onClick={() => scrollToSection("theme")}
          >
            Theme
          </li>
          <li
            className={activeSection === "Dates" ? "active" : ""}
            onClick={() => scrollToSection("Dates")}
          >
            Important Dates
          </li>
          <li
            className={activeSection === "registration" ? "active" : ""}
            onClick={() => scrollToSection("registration")}
          >
            Registration
          </li>
          <li
            className={activeSection === "firechats" ? "active" : ""}
            onClick={() => scrollToSection("firechats")}
          >
            Firechats & Panel Discussion
          </li>
          <li
            className={activeSection === "publications" ? "active" : ""}
            onClick={() => scrollToSection("publications")}
          >
            Publications
          </li>
          <li
            className={activeSection === "sponsors" ? "active" : ""}
            onClick={() => scrollToSection("sponsors")}
          >
            Sponsors and Partners
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
