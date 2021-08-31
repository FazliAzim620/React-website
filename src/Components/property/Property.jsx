import React from "react";
import Navbar from "../Navbar";
import pic1 from "./picture/pic1.jpg";
import pic2 from "./picture/pic2.jpg";
import pic3 from "./picture/pic3.jpg";
import pic4 from "./picture/pic4.jpg";
import pic5 from "./picture/pic5.jpg";
import pic6 from "./picture/pic6.jpg";
import pic7 from "./picture/pic7.jpg";

function Property() {
  return (
    <>
      <div className="main-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="main_card_section">
                <div
                  className="image_side"
                  style={{ backgroundImage: `url(${pic1})` }}
                ></div>
                <div className="sell">Sell</div>
                <div className="card_text">
                  <h5 style={{ marginLeft: "20px !important" }}>
                    <span style={{ color: "#f3b43f " }}>48.45LACK</span> <br />
                    G-9, ISLAMABAD
                  </h5>
                  <p>
                    6 Bedrooms With Attached Baths drawing Room Dinning Room (2)
                    tv Lounge (3) kitchen (3) beautiful... more
                  </p>
                  <span className="btn_group">
                    <button>EMail</button>
                    <button>More Info</button>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="main_card_section">
                <div
                  className="image_side"
                  style={{ backgroundImage: `url(${pic4})` }}
                ></div>
                <div className="rent">Rent</div>
                <div className="card_text">
                  <h5>
                    <span style={{ color: "#f3b43f" }}>48.45LACK</span> <br />
                    G-9, ISLAMABAD
                  </h5>
                  <p>
                    6 Bedrooms With Attached Baths drawing Room Dinning Room (2)
                    tv Lounge (3) kitchen (3) beautiful... more
                  </p>
                  <span className="btn_group">
                    <button>EMail</button>
                    <button>More Info</button>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="main_card_section">
                <div
                  className="image_side"
                  style={{ backgroundImage: `url(${pic3})` }}
                ></div>
                <div className="rent">Rent</div>
                <div className="card_text">
                  <h5>
                    <span style={{ color: "#f3b43f" }}>48.45LACK</span> <br />
                    G-9, ISLAMABAD
                  </h5>
                  <p>
                    6 Bedrooms With Attached Baths drawing Room Dinning Room (2)
                    tv Lounge (3) kitchen (3) beautiful... more
                  </p>
                  <span className="btn_group">
                    <button>EMail</button>
                    <button>More Info</button>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row secondRow" style={{marginTop:'15px'}}>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="main_card_section">
                <div
                  className="image_side"
                  style={{ backgroundImage: `url(${pic5})` }}
                ></div>
                <div className="rent">Rent</div>
                <div className="card_text">
                  <h5 style={{ marginLeft: "20px !important" }}>
                    <span style={{ color: "#f3b43f " }}>48.45LACK</span> <br />
                    G-9, ISLAMABAD
                  </h5>
                  <p>
                    6 Bedrooms With Attached Baths drawing Room Dinning Room (2)
                    tv Lounge (3) kitchen (3) beautiful... more
                  </p>
                  <span className="btn_group">
                    <button>EMail</button>
                    <button>More Info</button>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="main_card_section">
                <div
                  className="image_side"
                  style={{ backgroundImage: `url(${pic6})` }}
                ></div>
                <div className="sell">Sell</div>
                <div className="card_text">
                  <h5>
                    <span style={{ color: "#f3b43f" }}>48.45LACK</span> <br />
                    G-9, ISLAMABAD
                  </h5>
                  <p>
                    6 Bedrooms With Attached Baths drawing Room Dinning Room (2)
                    tv Lounge (3) kitchen (3) beautiful... more
                  </p>
                  <span className="btn_group">
                    <button>EMail</button>
                    <button>More Info</button>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-12">
              <div className="main_card_section">
                <div
                  className="image_side"
                  style={{ backgroundImage: `url(${pic7})` }}
                ></div>
                <div className="rent">Rent</div>
                <div className="card_text">
                  <h5>
                    <span style={{ color: " #f3b43f" }}>48.45LACK</span> <br />
                    G-9, ISLAMABAD
                  </h5>
                  <p>
                    6 Bedrooms With Attached Baths drawing Room Dinning Room (2)
                    tv Lounge (3) kitchen (3) beautiful... more
                  </p>
                  <span className="btn_group">
                    <button>EMail</button>
                    <button>More Info</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Property;
