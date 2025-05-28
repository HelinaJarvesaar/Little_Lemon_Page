import Button from './Button';

const LandingSection = () => {
    return (
        <section className="landing-section">
            <div className="overlay-box">
                <div className="content">
                    <h1>Little Lemon</h1>
                    <h2>Florence</h2>

                    <div className="content-columns">
                        <div>
                            <p>Opening Hours:</p>
                            <p>Mo - Thu 08:00 - 21:00</p>
                            <p>Fri - Sun 08:00 - 24:00</p>
                        </div>
                        <div>
                            <p>We are a family owned</p>
                            <p><b>Mediterranean</b></p>
                            <p><b>restaurant</b></p>
                            <p>focused on traditional recipes</p>
                            <p>served with a modern twist.</p>
                        </div>
                        <div>
                            <p>Florence Str 17</p>
                            <p>Florence, Italy</p>
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