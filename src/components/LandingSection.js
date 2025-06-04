import Button from './Button';

const LandingSection = () => {
    return (
        <section className="landing-section">
            <div className="overlay-box">
                <div className="content">
                    <div className="title-block">
                        <h1>Little Lemon</h1>
                        <h2>Florence</h2>
                    </div>
                    <div className="content-columns">
                        <div className="info">
                            <p>We are a family owned</p>
                            <p><b>Mediterranean restaurant</b></p>
                            <p>focused on traditional recipes served with a modern twist.</p>
                        </div>
                        <div className="open-hours">
                            <p><b>Opening Hours:</b></p>
                            <p><b>Mo - Thu 08:00 - 21:00</b></p>
                            <p><b>Fri - Sun 08:00 - 24:00</b></p>
                            <p><b>Florence Str 17, Florence, Italy</b></p>
                        </div>
                    </div>
                    <div className="buttons">
                        <Button to="/order">Order For Delivery</Button>
                        <Button to="/reservation">Book A Table</Button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default LandingSection;