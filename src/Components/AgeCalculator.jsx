import React, { useState } from 'react';

const AgeCalculator = () => {
  // Variables to store input values for day, month, and year
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // Variable to store the calculated age
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (day && month && year) {
      // Create a Date Object for the birth date
      const birthday = new Date(`${year}-${month}-${day}`);
      const currentDate = new Date();

      const agedifference = currentDate - birthday;

      const years = Math.floor(agedifference / (1000 * 60 * 60 * 24 * 365.25));
      const months = Math.floor((agedifference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor((agedifference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((agedifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((agedifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((agedifference % (1000 * 60)) / 1000);

      setAge({ years, months, days, hours, minutes, seconds });
    }
  };

  // Functions to update state when input field is filled
  const handleDayChange = (event) => {
    setDay(event.target.value);
    setAge(null);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
    setAge(null);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
    setAge(null);
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <div>
        <label htmlFor="day">Day:</label>
        <input
          type="number"
          name="day"
          id="day"
          placeholder="Enter Day"
          value={day}
          onChange={handleDayChange}
          min="1"
          max="31"
          required
        />
      </div>
      <div>
        <label htmlFor="month">Month:</label>
        <input
          type="number"
          name="month"
          id="month"
          placeholder="Enter Month"
          value={month}
          onChange={handleMonthChange}
          min="1"
          max="12"
          required
        />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          name="year"
          id="year"
          placeholder="Enter Year"
          value={year}
          onChange={handleYearChange}
          required
        />
      </div>
      <button onClick={calculateAge} type="submit">
        Calculate Age
      </button>
      <div>
        {age && (
          <div>
            <p>
              Your age is: {age.years} years, {age.months} months, {age.days} days, {age.hours} hours, {age.minutes} minutes, {age.seconds} seconds
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCalculator;
