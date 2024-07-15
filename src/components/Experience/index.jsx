import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "wCyber Solutions",
      period: "2023 - Present",
      responsibilities: [
        "Developing innovative software solutions for various projects, enhancing functionality and performance.",
        "Collaborating with cross-functional teams to define, design, and ship new features.",
        "Using modern programming languages and frameworks to create scalable applications.",
        "Contributing to code reviews and ensuring high code quality.",
        "Implementing automated testing and continuous integration processes.",
      ],
    },
    {
      title: "Internship",
      company: "wCyber Solutions",
      period: "2022 - 2023",
      responsibilities: [
        "Participated in software development, gaining practical experience.",
        "Assisted senior developers in coding, debugging, and testing applications.",
        "Conducted research to support innovative software projects.",
        "Learned best practices in software development and agile methodologies.",
        "Contributed to team meetings and project improvements.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="primary-title">Experience</h2>
        </div>
      </div>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <span>{exp.period}</span>
            <ul className="responsibilities-list">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
