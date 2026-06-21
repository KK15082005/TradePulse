import React from "react";

function Stats() {
    return (
        <section className="container py-5">
            <div className="row align-items-center">

                <div className="col-lg-5 mb-5 mb-lg-0">

                    <div className="mb-4">
                        <span style={{color: "#00E676",fontSize: "14px" ,fontWeight: "600",letterSpacing: "1px",}}>
                            ● <span style={{color: "#ffffff",fontSize: "14px" ,fontWeight: "600",letterSpacing: "1px"}}>Smart Investing, Simplified</span>
                        </span>
                    </div>

                    <h1 style={{color: "#ffffff",fontWeight: "700",lineHeight: "1.2",}}>Trade Smarter</h1>

                    <h1 style={{color: "#00E676",fontWeight: "700",lineHeight: "1.2",}}>Invest Better</h1>

                    <div className="mt-5">

                        <div className="mb-4">
                            <h5 style={{ color: "#86f8c1" }}><i class="bi bi-people" style={{color:"#86f8c1"}}></i>  Customer-First Always</h5>

                            <p style={{ color: "#d1d5db" }}>
                                Join 50L+ traders who trust TradePulse for simple,
                                transparent, and powerful investing.
                            </p>
                        </div>

                        <div className="mb-4">
                            <h5 style={{ color: "#86f8c1" }}><i class="bi bi-shield-check" style={{color:"#86f8c1"}}></i>  No Spam. No Gimmicks.</h5>

                            <p style={{ color: "#d1d5db" }}>
                                Just real tools, meaningful insights, and a platform
                                designed to help you grow your wealth with confidence.
                            </p>
                        </div>

                        <div className="mb-4">
                        <h5 style={{ color: "#86f8c1" }}><i class="bi bi-lightning-charge" style={{ color: "#86f8c1" }} ></i> TradePulse Universe</h5>

                        <p style={{ color: "#d1d5db" }}>
                            A complete ecosystem built for every investor's journey—
                            from learning and analysis to execution and growth.
                        </p>
                        </div>

                        <div>
                        <h5 style={{ color: "#86f8c1" }}><i class="bi bi-graph-up-arrow" style={{ color: "#86f8c1" }}></i> Do Better With Money</h5>

                        <p style={{ color: "#d1d5db" }}>
                            AI-powered insights, smart analytics, and modern tools
                            that help you make better financial decisions every day.
                        </p>
                        </div>

                    </div>
                </div>

        {/* Right Section */}
                <div className="col-lg-7 text-center">

                    <img src="media/stats.png" alt="TradePulse Dashboard"className="img-fluid"/>

                    <div className="mt-4">

                        <button className="btn me-3" style={{backgroundColor: "#00E676", color: "#ffffff", border: "none",fontWeight: "600",padding: "10px 24px",}}>Explore Product <i className="bi bi-arrow-right" style={{color: "#fff",backgroundColor: "#00E676"}} ></i></button>

                        <button className="btn" style={{color: "#00E676",border: "1px solid #00E676",fontWeight: "800",padding: "10px 24px",}}>Try Dashboard<i className="bi bi-arrow-right ms-2" style={{color : "#00E676"}}></i></button>

                    </div>

                </div>
            </div>
        </section>
  );
}

export default Stats;