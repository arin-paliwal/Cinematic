import "./footer.css";
const Footer = () => {
  const addBlankTarget = (event) => {
    event.target.setAttribute("target", "_blank");
  };

  return (
    <div>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__section">
            <h4 className="footer__section-heading">About</h4>
            <ul className="footer__list">
              <li>
                <a
                  href="https://portfolio-arin.netlify.app/"
                  onClick={addBlankTarget}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://portfolio-arin.netlify.app/contact"
                  onClick={addBlankTarget}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/t&c" onClick={addBlankTarget}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/PrivacyPolicy" onClick={addBlankTarget}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__section">
            <h4 className="footer__section-heading">Help & Support</h4>
            <ul className="footer__list">
              <li>
                <a href="FAQ" onClick={addBlankTarget}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="help?" onClick={addBlankTarget}>
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__section">
            <h4 className="footer__section-heading">Social</h4>
            <ul className="footer__list">
              <li>
                <a
                  href="https://www.facebook.com/paliwal.arin"
                  onClick={addBlankTarget}
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/arin-paliwal"
                  onClick={addBlankTarget}
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/arin.paliwal"
                  onClick={addBlankTarget}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2023 Cinematic. All rights reserved.</p>
          <p>Created by <span style={{ color: "#8d021f" }}>Arin Paliwal</span></p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
