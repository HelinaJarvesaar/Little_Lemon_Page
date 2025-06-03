import React from 'react';
import Item from './Item';
import Button from './Button';

const items = [
  {
    title: "Greek Salad",
    price: "12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("../images/greek_salad.jpg")
  },
  {
    title: "Bruchetta",
    price: "5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    getImageSrc: () => require("../images/bruschetta.jpg")
  },
  {
    title: "Lemon Dessert",
    price: "7.99",
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../images/lemon_dessert.jpg")
  },

]


function SpecialsSection() {
  return (
    <section className="specials-section">
      <div className="specials-header">
        <h1>Specials</h1>
        <Button>Online Menu</Button>
      </div>
      <div className="specials-grid">
        {items.map((item) => (
          <Item
            key={item.title}
            title={item.title}
            price={item.price}
            description={item.description}
            imageSrc={item.getImageSrc()}
          />
        ))}
      </div>
    </section>
  );
}

export default SpecialsSection;