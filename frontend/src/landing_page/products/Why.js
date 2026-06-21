import React from "react";

function WhyChoose() {
    return (
        <section className="container py-5">

            <h1
                className="text-center mb-5"
                style={{ color: "#fff" }}
            >
                Why Choose
                <span style={{ color: "#00E676" }}>
                    {" "}TradePulse?
                </span>
            </h1>

            <div className="row text-center">

                <div className="col-md-3">
                    <h2 style={{ color: "#00E676" }}>⚡</h2>
                    <h4 style={{ color: "#fff" }}>
                        Real-Time Data
                    </h4>
                </div>

                <div className="col-md-3">
                    <h2 style={{ color: "#00E676" }}>🧠</h2>
                    <h4 style={{ color: "#fff" }}>
                        AI Insights
                    </h4>
                </div>

                <div className="col-md-3">
                    <h2 style={{ color: "#00E676" }}>🛡️</h2>
                    <h4 style={{ color: "#fff" }}>
                        Secure Platform
                    </h4>
                </div>

                <div className="col-md-3">
                    <h2 style={{ color: "#00E676" }}>👨‍💻</h2>
                    <h4 style={{ color: "#fff" }}>
                        Easy To Use
                    </h4>
                </div>

            </div>

        </section>
    );
}

export default WhyChoose;