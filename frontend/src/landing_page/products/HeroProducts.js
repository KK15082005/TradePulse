import React from 'react';

function Hero() {
    return (
        <section className="container text-center py-5">

            <h4 style={{ color: "#00E676" }}>
                OUR PRODUCTS
            </h4>

            <h1
                style={{
                    color: "#fff",
                    fontSize: "3rem",
                    fontWeight: "bold"
                }}
            >
                Powerful Tools.
                <span style={{ color: "#00E676" }}>
                    {" "}Smarter Trading.
                </span>
            </h1>

            <p
                style={{
                    color: "#B0BEC5",
                    fontSize: "1.1rem"
                }}
            >
                Explore our suite of AI-powered tools and
                platforms designed to help you analyze,
                trade and grow with confidence.
            </p>

        </section>
    );
}

export default Hero;
;