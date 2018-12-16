import React from 'react';

const ReservationForm = () => {

  return (
    <div id="reservations">
      <h3>Reservations</h3>
      <hr />
      <span id="reservationsBlurb">
        Make a reservation blah blah blah...
      </span>
      <div id="reservation-form">
        <p>Make A Booking</p>
        <form>
          <div className="form-group">
            <label htmlFor="date">Select Date:</label>
            <input name="date" type="date" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="time">Select Time:</label>
            <input name="time" type="time" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="people">Number of People:</label>
            <input name="people" type="number" min="1" max="10" className="form-control" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ReservationForm;