import React, { useState } from "react";
import "./SecurityGuardRules.css";

const rulesData = [
  {
    title: "1. Time Discipline",
    points: [
      "Every security guard must report to duty at least 10 minutes before the scheduled shift time.",
      "Late reporting without prior notice may result in disciplinary action.",
    ],
  },
  {
    title: "2. Uniform & Appearance",
    points: [
      "Wearing the complete prescribed uniform during duty hours is mandatory.",
      "The uniform must be clean, well-maintained, and properly pressed.",
      "Wearing the official ID card at all times during duty is compulsory.",
    ],
  },
  {
    title: "3. Alertness & Vigilance",
    points: [
      "Guards must remain fully alert, attentive, and active while on duty.",
      "Continuous monitoring of surrounding activities is essential.",
      "Any suspicious activity or incident must be reported immediately to the concerned authority.",
    ],
  },
  {
    title: "4. Discipline & Professional Conduct",
    points: [
      "All employees, visitors, and senior officials must be treated with courtesy and respect.",
      "Arguments, misconduct, or inappropriate behavior are strictly prohibited.",
    ],
  },
  {
    title: "5. Prohibited Activities During Duty",
    points: [
      "Sleeping while on duty is strictly prohibited.",
      "Personal use of mobile phones during duty hours is not permitted.",
      "Consumption of alcohol, tobacco, or any intoxicating substances during duty hours is strictly forbidden.",
    ],
  },
  {
    title: "6. Duty Post Compliance",
    points: [
      "Leaving the assigned duty post without permission or prior information is strictly prohibited.",
      "In case of an emergency, the supervisor must be informed immediately.",
    ],
  },
  {
    title: "7. Leave Policy",
    points: [
      "Prior approval or advance notice is mandatory before taking leave.",
      "Unauthorized absence may result in salary deduction and disciplinary action.",
    ],
  },
  {
    title: "8. Duties & Responsibilities",
    points: [
      "Maintain strict monitoring at all entry and exit points.",
      "Ensure accurate details are recorded in the visitor register.",
      "Safeguard company property and maintain overall security responsibilities effectively.",
    ],
  },
  {
    title: "9. Documents Required at Joining",
    points: [
      "Aadhaar Card / Valid Identity Proof",
      "Passport-size photographs",
      "Address Proof",
      "Bank Account Details",
      "Educational Certificates (if applicable)",
    ],
  },
  {
    title: "10. Exit Policy",
    points: [
      "A minimum notice period of 15 days is mandatory before resignation.",
      "Salary may be withheld in case of resignation without prior notice.",
    ],
  },
  {
    title: "11. Disciplinary Action",
    points: [
      "Violation of company rules may lead to warning notices, salary deductions, or termination of employment.",
    ],
  },
  {
    title: "12. Confidentiality",
    points: [
      "Sharing any confidential or internal company information with unauthorized persons is strictly prohibited.",
    ],
  },
];

function SecurityGuardRules() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    signature: "",
    date: "",
  });

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Declaration Submitted Successfully!");
  };

  return (
    <div className="container">
      <div className="card">

        <div className="header">
          <h1>Security Guard Service Rules & Conditions</h1>
          <p>(Security Guard Duty Norms)</p>
        </div>

        <div className="accordion">
          {rulesData.map((rule, index) => (
            <div className="accordion-item" key={index}>
              
              <button
                className="accordion-title"
                onClick={() => toggleAccordion(index)}
              >
                <span>{rule.title}</span>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </button>

              {activeIndex === index && (
                <div className="accordion-content">
                  <ul>
                    {rule.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          ))}
        </div>

        <div className="declaration">
          <h2>Declaration</h2>

          <p>
            I hereby confirm that I have read and understood all the above-mentioned
            rules and regulations and agree to comply with them.
          </p>

          <form onSubmit={handleSubmit}>
            
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Signature</label>
              <input
                type="text"
                name="signature"
                placeholder="Enter Signature"
                value={formData.signature}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit Declaration
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default SecurityGuardRules;