import React from 'react';
import Maria from '../images/Maria.jpg';
import Paolo from '../images/Paolo.jpg';

function AboutSection() {
    return (
        <section className='about'>
            <article>
              <h2>Little Lemon</h2>
              <h3>Florence</h3>
              <p>Little Lemon is a family-owned Mediterranean restaurant founded by Sofia and Paolo. They combine traditional recipes with a modern twist to create a unique dining experience. Using fresh, local ingredients, they bring authentic flavors to every dish. Sofia and Paolo’s passion for food and hospitality shines through in every meal. At Little Lemon, you’re invited to enjoy the warmth and taste of Mediterranean cuisine in a welcoming atmosphere. </p>
            </article>
            <div>
              <img src={Maria} alt="Owner Maria" />
              <img src={Paolo} alt="Owner Paolo" />
            </div>
        </section>
    )
}

export default AboutSection;