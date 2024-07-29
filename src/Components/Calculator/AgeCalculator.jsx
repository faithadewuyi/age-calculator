import  { useState } from 'react';
import '../Calculator/calculator.css';

const AgeCalculator = () => {
  // Variables to store input values for day, month, and year
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // Variable to store the calculated age, error message, and health tips
  const [age, setAge] = useState(null);
  const [error, setError] = useState("");
  const [healthTips, setHealthTips] = useState("");

  const calculateAge = () => {
    if (!day || !month || !year) {
      setError("Please fill in all fields!");
      setAge(null);
      setHealthTips("");
      return;
    }

    setError("");

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

    // Determine health tips based on age
    let tips = "";
    if (years <= 18) {
      tips = `Since you're in your formative years, it's important to develop healthy habits now. Make sure you engage in regular physical activity, like sports or outdoor play, and eat a balanced diet rich in fruits, vegetables, and whole grains.`;
    } else if (years <= 30) {
      tips = `In your 20s and 30s, it's crucial to maintain a healthy lifestyle amidst changing responsibilities. Focus on regular exercise, managing stress effectively, and avoiding excessive alcohol and smoking. Regular monitoring of blood pressure and cholesterol levels is important.`;
    } else if (years <= 50) {
      tips = `As you approach middle age, managing stress becomes key. Regular cardiovascular exercise and a diet rich in fruits, vegetables, and whole grains will help control weight and blood pressure. It's also important to schedule routine health check-ups to keep an eye on cholesterol levels and other potential heart issues.`;
    } else if (years <= 65) {
      tips = `During middle age, focus on maintaining a heart-healthy diet by reducing salt intake and incorporating heart-friendly fats. Regular exercise, and don't forget to get regular screenings for diabetes and hypertension.`;
    } else {
      tips = `In your senior years, staying active through low-impact exercises such as walking is important. A heart-healthy diet with appropriate portion sizes and nutrient intake will support your cardiovascular health. Regular check-ups and monitoring of blood pressure and cholesterol levels are crucial. Also, maintaining social connections and mental well-being contributes to overall heart health.`;
    }
    setHealthTips(tips);
  };

  // Functions to update state when input field is filled
  const handleDayChange = (event) => {
    setDay(event.target.value);
    setAge(null);
    setError("");
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
    setAge(null);
    setError("");
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
    setAge(null);
    setError("");
  };

  return (
    <div className='container'>
      <h1>Age Calculator 📅</h1>
      <div className="input">
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
      <div className="input">
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
      <div className="input">
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
      <button onClick={calculateAge} type="button" className='calculate-button'>
        Calculate Age
      </button>
      {error && <p className="error-message">{error}</p>}
      {age && (
        <div className="age-result">
          <p>Your age is: {age.years} years, {age.months} months, {age.days} days, {age.hours} hours, {age.minutes} minutes, {age.seconds} seconds</p>
          <p className="health-tips"><span>HealthTips: </span>    {healthTips}</p>
          <p className="reference">
            Health tips adapted from: <a href="https://familiestogetheroc.org/heart-health-for-different-age-groups-tips-for-every-life-stage" target="_blank" rel="noopener noreferrer">Families Together OC</a>.
          </p>
        </div>
      )}
       <footer className="footer">
            <p>&copy; 2024, Faith Adewuyi</p>
          </footer>
    </div>
  );
};

export default AgeCalculator;
