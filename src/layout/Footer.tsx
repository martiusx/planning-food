import Button from "../components/Button";
import instagramImage from "../assets/instagram.png";
import facebookImage from "../assets/facebook.png";
import twitterImage from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__wrapper__element">
          <div>
            <h5>Lorem ipsum dolor</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos minus beatae odio, iure ratione voluptates?
            </p>
          </div>
        </div>
        <div className="footer__wrapper__element">
          <h5>Lorem ipsum dolor</h5>
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit.</li>
          </ul>
        </div>
        <div className="footer__wrapper__element">
          <div>
            <h5>Lorem ipsum dolor</h5>

            <form>
              <input type="email" id="email" name="email" />
              <Button buttonText="Lorem" />
            </form>
            <div>
              <img src={facebookImage} alt="facebook icon" />
              <img src={twitterImage} alt="twitter icon" />
              <img src={instagramImage} alt="instagram icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
