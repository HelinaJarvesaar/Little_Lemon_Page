import React from 'react';
import Testimonial from './Testimonial';

const testimonials = [
  {
    name: "Giulia R.",
    rating: 5,
    text: "Absolutely loved the ambiance and flavors! Felt like home.",
    getImageSrc: () => require("../images/giulia.jpg"),
  },
  {
    name: "Luca M.",
    rating: 4,
    text: "A cozy little spot with authentic Italian taste. Will come again!",
    getImageSrc: () => require("../images/luca.jpg"),
  },
  {
    name: "Emma T.",
    rating: 5,
    text: "The lemon dessert is a must-try! Service was fantastic too.",
    getImageSrc: () => require("../images/emma.jpg"),
  },
  {
    name: "James B.",
    rating: 4,
    text: "Fresh ingredients and beautiful presentation. Highly recommend!",
    getImageSrc: () => require("../images/james.jpg"),
  },
];

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <h1>Testimonials</h1>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <Testimonial
            key={t.name}
            name={t.name}
            rating={t.rating}
            text={t.text}
            imageSrc={t.getImageSrc()}
          />
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
