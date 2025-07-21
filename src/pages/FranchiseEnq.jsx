// FranchiseForm.jsx
import React, { useState } from 'react';
import styles from "../styles/pages/FranchiseEnq.module.css";

const FranchiseEnq = () => {
  const [timeFrame, setTimeFrame] = useState('Immediate');

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className={styles.inputGroup}>
            <label>City</label>
            <input type="text" placeholder="Enter your city" />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Address</label>
          <input type="text" placeholder="Enter your address" />
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>E-Mail</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className={styles.inputGroup}>
            <label>Contact No.</label>
            <input type="text" placeholder="Enter your contact number" />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label>Current Occupation</label>
          <input type="text" placeholder="Enter your occupation" />
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Investment Plan (INR Lacs)</label>
            <input type="number" placeholder="Ex: 10" />
          </div>
          <div className={styles.inputGroupAsCard}>
            <label>Time Frame (Months)</label>
            <div className={styles.optionGroup}>
              {['Immediate', '3 Months', '3-6 Months'].map(option => (
                <button
                  key={option}
                  type="button"
                  className={`${styles.optionButton} ${timeFrame === option ? styles.activeOption : ''}`}
                  onClick={() => setTimeFrame(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Type of Franchise Association</label>
            <select>
              <option>Single Unit</option>
              <option>Multi Unit</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label>Desired City for Franchise</label>
            <input type="text" placeholder="Enter desired city" />
          </div>
        </div>
        
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Property</label>
            <select>
              <option>Not Available</option>
              <option>Own</option>
              <option>Rented</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label>Are you currently holding any Franchise?</label>
            <select>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>


        <div className={styles.inputGroup}>
          <label>If Yes, Name of Franchisor</label>
          <input type="text" placeholder="Enter franchisor name" />
        </div>

        <div className={styles.inputGroup}>
          <label>Convenient Date & Time to call</label>
          <input type="datetime-local" />
        </div>

        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default FranchiseEnq;