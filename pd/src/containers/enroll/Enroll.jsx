/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './enroll.css';

function Enroll() {
  return (
    <div className="container">
      <div className="title">Registration</div>
      <div className="content">
        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSd6Tw-yLs62MUQWpLj2SbgcUyMIHr_RuKv6NsaLIExPMkhEoA/formResponse"
          id="formId"
        >
          <div className="user-details">
            <div className="input-box">
              <span className="details">First Name</span>
              <input
                type="text"
                placeholder="Enter your first name"
                autoComplete="off"
                name="entry.1575329892"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Last Name</span>
              <input
                type="text"
                placeholder="Enter your last name"
                autoComplete="off"
                name="entry.1558956944"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input
                type="text"
                placeholder="Enter your email"
                autoComplete="off"
                name="entry.478503502"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input
                type="text"
                placeholder="Enter your number"
                autoComplete="off"
                name="entry.1432241805"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Qualification</span>
              <input
                type="text"
                placeholder="Enter your qualification"
                autoComplete="off"
                name="entry.577238184"
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Courses</span>
              <select name="entry.1340168065" id="courses" required>
                <option value="select" selected disabled>Select Courses</option>
                <option value="Course-1">Course-1</option>
                <option value="Course-2">Course-2</option>
                <option value="Course-3">Course-3</option>
                <option value="Course-4">Course-4</option>
                <option value="Course-5">Course-5</option>
                <option value="Course-6">Course-6</option>
                <option value="Course-7">Course-7</option>
                <option value="Course-8">Course-8</option>
                <option value="Course-9">Course-9</option>
                <option value="Course-10">Course-10</option>
              </select>
            </div>
          </div>
          <div className="gender-details">
            <span className="gender-title">Gender</span>
            <div className="category">
              <input type="radio" className="dot" name="entry.786294958" value="Male" id="dot-1" />
              <label htmlFor="dot-1" className="gender">
                Male
              </label>

              <input type="radio" className="dot" name="entry.786294958" value="Female" id="dot-2" />
              <label htmlFor="dot-2" className="gender">
                Female
              </label>

              <input type="radio" className="dot" name="entry.786294958" value="Prefer not to say" id="dot-3" />
              <label htmlFor="dot-3" className="gender">
                Prefer not to say
              </label>
            </div>
          </div>
          <div className="button">
          <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Enroll;
