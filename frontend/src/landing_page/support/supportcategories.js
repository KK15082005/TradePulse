import React from "react";

function SupportCategories() {
  return (
    <section className="container py-5">

      <div className="row">

        <div className="col-md-8">

          <div className="accordion" id="supportAccordion">

            <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#one"
                >
                  Account Opening
                </button>
              </h2>

              <div
                id="one"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body text-white">
                  Learn how to open and activate
                  your TradePulse account.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#two"
                >
                  Your TradePulse Account
                </button>
              </h2>

              <div
                id="two"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body  text-white">
                  Manage profile, KYC and settings.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#three"
                >
                  Trading Platform
                </button>
              </h2>

              <div
                id="three"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body  text-white">
                  Help with charts, orders and portfolio.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#four"
                >
                  Funds & Payments
                </button>
              </h2>

              <div
                id="four"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body  text-white">
                  Deposits, withdrawals and statements.
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="col-md-4">

          <div
            className="p-4 mb-4"
            style={{
              background: "#08111F",
              borderRadius: "10px"
            }}
          >
            <h5 style={{ color: "#00E676" , background: "#08111F"}}>
              Latest Updates
            </h5>

            <ul style={{ color: "#fff"  , background: "#08111F"}}>
              <li style={{ color: "#fff"  , background: "#08111F"}}>New AI Scanner launched</li>
              <li style={{ color: "#fff"  , background: "#08111F"}}>Platform maintenance update</li>
            </ul>
          </div>

          <div
            className="p-4"
            style={{
              background: "#08111F",
              borderRadius: "10px"
            }}
          >
            <h5 style={{ color: "#00E676" ,  background: "#08111F"}}>
              Quick Links
            </h5>

            <ul style={{background: "#08111F"}}>
              <li style={{color : "#00E676" , background: "#08111F"}}><a href="/" style={{ background: "#08111F"}}>Track account opening</a></li>
              <li style={{color : "#00E676" , background: "#08111F"}}><a href="/" style={{ background: "#08111F"}}>Fund transfer guide</a></li>
              <li style={{color : "#00E676" , background: "#08111F"}}><a href="/" style={{ background: "#08111F"}}>Trading FAQs</a></li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
}

export default SupportCategories;