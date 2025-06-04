import React, { useReducer } from "react";
import LandingSection from '../components/LandingSection';
import ItemsSection from '../components/ItemsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';
import { initializeTimes, timesReducer } from '../utils/timeUtils';

function Main() {
  const [availableTimes, dispatch] = useReducer(timesReducer, initializeTimes());

  function updateTimes(date) {
    dispatch({ type: "UPDATE_TIMES", date });
  }

  return (
    <main>
      <LandingSection />
      <ItemsSection />
      <TestimonialsSection />
      <AboutSection />
    </main>
  );
}

export default Main;
