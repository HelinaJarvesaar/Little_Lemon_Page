function ConfirmedBookingPage({ bookingData }) {
  const latest = bookingData[bookingData.length - 1];

  return (
    <div>
      <h2>Booking Confirmed!</h2>
      {latest && (
        <ul>
          <li><strong>Date:</strong> {latest.date}</li>
          <li><strong>Time:</strong> {latest.time}</li>
          <li><strong>Guests:</strong> {latest.guests}</li>
          <li><strong>Occasion:</strong> {latest.occasion}</li>
        </ul>
      )}
    </div>
  );
}

export default ConfirmedBookingPage;
