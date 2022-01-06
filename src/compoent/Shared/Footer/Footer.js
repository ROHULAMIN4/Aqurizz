import React from "react";
import "./Footer.css";
import cards from "../../../images/270220617_4490775674377611_451247911147086818_n.png";
import { FormControl, InputGroup } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-list">
        <li className="footer-item">
          <p className="my-3">
            Azoriqqqq is a fishing and aqurium industry service provider.
          </p>

          <p className="footer-social">
            Follow Us{" "}
            <span className="ms-3">
              <a href="/">
                <i className="footer-social-icon fab fa-facebook-f"></i>
              </a>
              <a href="/">
                <i className="footer-social-icon fab fa-instagram"></i>
              </a>

              <a href="/">
                <i className="footer-social-icon fab fa-twitter"></i>
              </a>
              <a href="/">
                <i className="footer-social-icon fab fa-pinterest"></i>
              </a>
            </span>
          </p>
        </li>
        <li className="footer-item">
          <h4>Useful Links</h4>
          <a href="/">About</a>
          <a href="/">Login</a>
          <a href="/">News & Events</a>
          <a href="/">Contacts</a>
        </li>
        <li className="footer-item footer-item-contact">
          <h4>Contact With Us</h4>
          <span>
            <i className="fas fa-mobile-alt"></i> +88016600000
          </span>
          <span>
            <i className="fas fa-envelope"></i> demo@gmail.com
          </span>

          <InputGroup className="input-group">
            <FormControl
              placeholder="Your email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <button className="btn-book">Submit</button>
          </InputGroup>
        </li>
      </ul>
      <hr />

      <ul className="footer-bottom-list">
        <li className="footer-bottom-list--item mb-3 mb-lg-0">
          <img src={cards} alt="" />
        </li>
        <li className="footer-bottom-list--item">
          <small>Terms & Condition | Privacy & Policy | &copy;2022</small>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
