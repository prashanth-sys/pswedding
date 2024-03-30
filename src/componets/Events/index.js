import { Component } from "react";
import Header from "../Header";
import "./index.css";

class Events extends Component {
  render() {
    return (
      <>
        <div className="events-container">
          <Header />
          <div className="home-container">
            <div className="wedding-image-layout">
              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711616806/1_2x_1_kmkaoz.png"
                alt="Logo"
                className="flower-bottom"
              />
              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711616476/Rectangle_5_vc6pnj.png"
                alt="Logo"
                className="wedding-photo"
              />

              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711618029/Ellipse_1_rmvymx.png"
                alt="Logo"
                className="together-photo"
              />
            </div>
            <div className="names-container">
              <div className="together-text-container">
                <img
                  src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711614998/3_2x_1_qqhrv7.png"
                  alt="Logo"
                  className="image-logo"
                />
                <h1 className="welcome-note">
                  TOGETHER
                  <br /> WITH THEIR FAMILIES
                </h1>
                <img
                  src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711619035/1_2x_2_daumof.png"
                  alt="Logo"
                  className="image-logo"
                />
              </div>
              <div className="couple-names-container">
                <h1 className="couple-name">Jeremy Renner</h1>
                <h1 className="couple-wife">Brie Larson</h1>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711619035/1_2x_2_daumof.png"
              alt="Logo"
              className="flower-right"
            />
          </div>

          <hr className="line" />

          <div className="wedding-bg-container">
            <div className="save-date-container">
              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711711357/5_2x_2_nu8y6e.png"
                alt="Logo"
                className="frame-1"
              />
              <div>
                <h1 className="save-date-heading">
                  Save <br />
                  the <br />
                  Date
                </h1>
                <p className="date-items">
                  MAY <hr className="hr" /> Sat <br /> 25 <hr className="hr" />{" "}
                  2024
                </p>
              </div>
              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711711627/5_2x_3_bsucht.png"
                alt="Logo"
                className="frame-2"
              />
            </div>
            <div className="venue-container">
              <h1 className="venue-heading">VENUE</h1>
              <p className="venue-description">
                Epic Church San Francisco <br /> 250 Stevenson St, San
                Francisco, CA 94103, United States
              </p>
              <button className="venue-button" type="button">
                RSVP
              </button>
            </div>
          </div>

          <hr className="line" />

          <div className="met-container">
            <div className="how-met-flower-2">
              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711719718/4_2x_1_a7xhxc.png"
                alt="Logo"
                className="met-flower-2"
              />
            </div>
            <div className="how-we-met-container">
              <h1 className="how-we-met">How We Met</h1>
              <p className="met-date">05-20-2024</p>
              <p className="met-content">
                We met at a classmate's party and didn't think much of it. Then
                a bunch of us went to karaoke after a long day of back-to-back
                classes and we both picked, "I’d Do Anything for Love." And it
                just clicked. He went low, I went high. There were fist pumps.
                We harmonized by accident. That’s pretty much when we thought,
                "Okay. This could be something."
              </p>
              <h1 className="how-we-met">The Proposal</h1>
              <p className="met-date">05-25-2024</p>
              <p className="met-content">
                On the anniversary of when we first met, we went back to our old
                stomping grounds to do karaoke with friends. When "I'd Do
                Anything for Love" came on, we ran up to the front. When the
                music suddenly died down, I looked over and he was down on one
                knee. I screamed, shouted "YES," and we were engaged.
                <br />
                We're so excited to celebrate this next chapter in our lives
                with you.
                <br />
                See you in San Fran!
              </p>
            </div>
            <div className="how-met-flower-1">
              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711714364/6_2x_2_1_dfj1v9.png"
                alt="Logo"
                className="met-flower-1"
              />
              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711720521/7_2x_1_efuqvy.png"
                alt="Logo"
                className="met-flower-3"
              />
            </div>
          </div>
          <div className="image-bg-container">
            <div className="image-container">
              <div className="gift-register-container">
                <button className="gift-button" type="button">
                  Gift Registry
                </button>
              </div>
            </div>
            <div className="location-container"></div>
          </div>
          <div className="gallery-container">
            <div className="gallery-name-container">
              <div>
                <img
                  src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711724036/4_2x_2_ttuvle.png"
                  alt="Logo"
                  className="gallery-image"
                />
              </div>
              <h1 className="gallery-heading">Gallery</h1>
            </div>
            <div className="album-layout">
              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711724449/Rectangle_13_iyt9kt.png"
                alt="Logo"
                className="album-1"
              />
              <div>
                <img
                  src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711724644/Rectangle_14_w170yp.png"
                  alt="Logo"
                  className="album-2"
                />
              </div>
              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711724885/Rectangle_16_lc50ak.png"
                alt="Logo"
                className="album-3"
              />
              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711725064/Rectangle_18_s7jc61.png"
                alt="Logo"
                className="album-4"
              />
              <img
                src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711724449/Rectangle_13_iyt9kt.png"
                alt="Logo"
                className="album-1"
              />
            </div>
          </div>
          <div className="bottom-flower-container">
            <img
              src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711714364/6_2x_2_1_dfj1v9.png"
              alt="Logo"
              className="bottom-flower"
            />
          </div>
          <h1 className="gallery-heading">Thank You</h1>
        </div>
      </>
    );
  }
}

export default Events;
