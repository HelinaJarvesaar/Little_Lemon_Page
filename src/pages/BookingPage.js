import React, { useState, useEffect } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI } from "../api";
import { submitAPI } from "../api";

function Bookings() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [availableTimes, setAvailableTimes] = useState([]);

  const initializeTimes = () => {
    const today = new Date().toISOString().split("T")[0];
    const times = fetchAPI(today);
    setAvailableTimes(times);
    if (times.length > 0) setTime(times[0]);
    setDate(today);
  };

  const updateTimes = (selectedDate) => {
    const times = fetchAPI(selectedDate);
    setAvailableTimes(times);
    if (times.length > 0) setTime(times[0]);
    else setTime("");
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  useEffect(() => {
    if (date) {
      updateTimes(date);
    }
  }, [date]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    const success = submitAPI(formData);
    if (success) {
      alert("Reservation successful!");
      // Optionally reset form
    } else {
      alert("Reservation failed. Please try again.");
    }
  };

  return (
    <BookingForm
      date={date}
      setDate={setDate}
      time={time}
      setTime={setTime}
      guests={guests}
      setGuests={setGuests}
      occasion={occasion}
      setOccasion={setOccasion}
      availableTimes={availableTimes}
      onSubmit={handleSubmit}
    />
  );
}

export default Bookings;
