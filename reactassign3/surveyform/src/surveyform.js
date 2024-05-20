
import React, { useState } from 'react';
import './surveyform.css';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    class: '',
    course: '',
    academicYear: '',
    teachingStaff: '',
    improvements: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-container">
        <h2>Thank you for participating!</h2>
      </div>
    );
  }

  return (
    <div className="form-container">
        <h1>Survey Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="class">Class:</label>
          <input type="text" id="class" name="class" value={formData.class} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <select id="course" name="course" value={formData.course} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="comps">Computer Science</option>
            <option value="it">Information Technology</option>
            <option value="civil">Civil Engineering</option>
            <option value="mech">Mechanical Engineering</option>
            <option value="auto">Automobile Engineering</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="academicYear">Academic Year:</label>
          <select id="academicYear" name="academicYear" value={formData.academicYear} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="2021-2022">2021-2022</option>
            <option value="2023-2024">2023-2024</option>
            <option value="2025-2026">2025-2026</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="teachingStaff">Teaching:</label>
          <select id="teachingStaff" name="teachingStaff" value={formData.teachingStaff} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="ineffective">Ineffective</option>
            <option value="average">Average</option>
            <option value="effective">Effective</option>
            <option value="highlyEffective">Highly Effective</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="improvements">What can we improve?</label>
          <textarea id="improvements" name="improvements" value={formData.improvements} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </div>
  );
};

export default SurveyForm;
