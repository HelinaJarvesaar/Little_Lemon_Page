import bike from './images/bike.png';

const Card = ({ title, price, description, imageSrc }) => {
    return(
        <div>
            <img src={imageSrc} alt={title} width="100%"/>
            <h3>{title}</h3>
            <p>{price} EUR</p>
            <p>{description}</p>
            <h3>Delivery in 20 min</h3>
            <img src="images/bike.png" alt="bike"/>
        </div>
    );
};

export default Card;