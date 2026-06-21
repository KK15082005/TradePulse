import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#050B14",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "40px 0",
        marginTop: "50px",
      }}
    >
      <div className="container">
        <div className="row">

          {/* Logo & Description */}
          <div className="col-md-4">
            <h2>
              <span style={{ color: "#fff" }}>Trade</span>
              <span style={{ color: "#00E676" }}>Pulse</span>
            </h2>

            <p style={{ color: "#B0B0B0" }}>
              Smart Investing. Simplified.
              <br />
              AI-powered platform for modern traders and investors.
            </p>
          </div>

          {/* Company */}
          <div className="col-md-2">
            <h5 style={{ color: "#00E676" }}>Company</h5>
            <p><a href="#" className="text-white text-decoration-none">About</a></p>
            <p><a href="#" className="text-white text-decoration-none">Careers</a></p>
            <p><a href="#" className="text-white text-decoration-none">Pricing</a></p>
          </div>

          {/* Products */}
          <div className="col-md-2">
            <h5 style={{ color: "#00E676" }}>Products</h5>
            <p><a href="#" className="text-white text-decoration-none">Dashboard</a></p>
            <p><a href="#" className="text-white text-decoration-none">AI Insights</a></p>
            <p><a href="#" className="text-white text-decoration-none">Portfolio</a></p>
          </div>

          {/* Support */}
          <div className="col-md-2">
            <h5 style={{ color: "#00E676" }}>Support</h5>
            <p><a href="#" className="text-white text-decoration-none">Help Center</a></p>
            <p><a href="#" className="text-white text-decoration-none">Contact</a></p>
            <p><a href="#" className="text-white text-decoration-none">FAQs</a></p>
          </div>

        </div>

        <hr style={{ borderColor: "rgba(255,255,255,0.1)" }} />

        <div className="text-center">
          <p style={{ color: "#B0B0B0", margin: 0 }}>
            © 2026 TradePulse. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
