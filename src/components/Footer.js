import biglogo from "../images/BigLogo.png";

const Footer = () => {
    return (
        <footer>
            <img src={biglogo} alt="Little Lemon logo" width="95" />
            <div className="navigation">
                <ul>
                    <li><b>Doormat</b></li>
                    <li><b>Navigation</b></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order">Order online</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#home">Home</a></li>
                </ul>
            </div>
            <div className="contacts">
                <ul>
                    <li><b>Contacts</b></li>
                    <li>Florence Str 17</li>
                    <li>Florence, Italy</li>
                    <li>+372 0000 0000</li>
                    <li>info@littlelemon.com</li>
                </ul>
            </div>
            <div className="social-media">
                <ul>
                    <li><b>Social Media Links</b></li>
                    <li><a href="#facebook">Facebook</a></li>
                    <li><a href="#instagram">Instagram</a></li>
                    <li><a href="#tiktok">TikTok</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;