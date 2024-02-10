import './App.css';

function Calendar() {

  const today = new Date();

  return (
    <div className="Calendar">
      <h1>{today.toDateString()}</h1>
    </div>
  );
}

export default Calendar;
