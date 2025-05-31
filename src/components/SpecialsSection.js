
const items = [
    {
        title: "Greek Salad",
        price: "12.99",
        desctiption: "text",
        getImageSrc: () => require("../images/greek_salad_small.jpg")
    },
    {

    }
]

function SpecialsSection({ children }) {
  return (
    <section className="specials-section">
        <div>
        </div>
    </section>
  );
}

export default SpecialsSection;