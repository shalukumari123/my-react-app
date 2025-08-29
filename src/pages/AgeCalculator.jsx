import React, { useState } from "react";
import "./AgeCalculator.css";
import Header from "./Header";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!birthDate) {
      alert("Please select your birth date!");
      return;
    }

    const today = new Date();
    const dob = new Date(birthDate);

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Adjust if negative
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <>
    <Header/>
   
    <div className="age-container">
      <h1>🎂 Age Calculator</h1>
      <p>Enter your Date of Birth to calculate your exact age till today.</p>

      <div className="input-box">
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <button onClick={calculateAge}>Calculate Age</button>
      </div>

      {age && (
        <div className="result">
          <h2>Your Age is:</h2>
          <p>
            <strong>{age.years}</strong> Years,{" "}
            <strong>{age.months}</strong> Months,{" "}
            <strong>{age.days}</strong> Days
          </p>
        </div>
      )}
    </div>
    </>
  );
};

export default AgeCalculator;
