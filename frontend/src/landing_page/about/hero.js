import React from 'react';

function Hero() {
    return (
        <section className='container mt-4 py-5'>

            {/* Hero Section */}
            <div className='row align-items-center'>

                <div className='col-md-4 d-flex flex-column justify-content-center'>
                    <h3 style={{ color: "#00E676", marginLeft: "30px" }}>
                        About Us
                    </h3>

                    <h1
                        style={{
                            color: "#fff",
                            marginTop: "5px",
                            marginLeft: "30px"
                        }}
                    >
                        About<span style={{ color: "#00E676" }}>TradePulse</span>
                    </h1>

                    <p
                        style={{
                            color: "#fff",
                            marginTop: "10px",
                            marginLeft: "30px",
                            lineHeight: "1.8"
                        }}
                    >
                        TradePulse is an AI-Powered trading platform
                        built to simplify investing and help traders
                        make smarter decisions through real-time
                        insights, analytics, and portfolio tracking.
                    </p>

                    <button
                        type="button"
                        className="btn btn-outline-success"
                        style={{
                            color: "#00E676",
                            width: "40%",
                            marginLeft: "70px"
                        }}
                    >
                        Our Journey
                    </button>
                </div>

                <div className='col-md-8'>
                    <img
                        src='media/HomeHero.png'
                        alt='hero'
                        style={{ width: "100%" }}
                    />
                </div>

            </div>

            {/* Mission Section */}

            <div className='mt-5 text-center'>
                <h2 style={{ color: "#00E676" }}>
                    Our Mission
                </h2>

                <h1
                    style={{
                        color: "#fff",
                        marginTop: "20px"
                    }}
                >
                    Empowering Traders. Simplifying Success.
                </h1>

                <p
                    style={{
                        color: "#B0BEC5",
                        lineHeight: "1.8"
                    }}
                >
                    We combine advanced AI Technology with real-time
                    market insights to help traders and investors
                    make smarter decisions, faster.
                </p>
            </div>

            {/* Features Section */}

            <div className='row mt-5 text-center'>

                <div className='col-md-3'>
                    <div
                        className='p-4'
                        style={{
                            border: "1px solid #1a1a1a",
                            borderRadius: "15px",
                            height: "100%"
                        }}
                    >
                        <h1 style={{ color: "#00E676" }}>📊</h1>
                        <h4 style={{ color: "#fff" }}>
                            Data-Driven Decisions
                        </h4>
                        <p style={{ color: "#B0BEC5" }}>
                            Leverage powerful analytics and AI
                            models to identify opportunities.
                        </p>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div
                        className='p-4'
                        style={{
                            border: "1px solid #1a1a1a",
                            borderRadius: "15px",
                            height: "100%"
                        }}
                    >
                        <h1 style={{ color: "#00E676" }}>⚡</h1>
                        <h4 style={{ color: "#fff" }}>
                            Real-Time Advantage
                        </h4>
                        <p style={{ color: "#B0BEC5" }}>
                            Get live market updates and insights
                            to stay ahead of trends.
                        </p>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div
                        className='p-4'
                        style={{
                            border: "1px solid #1a1a1a",
                            borderRadius: "15px",
                            height: "100%"
                        }}
                    >
                        <h1 style={{ color: "#00E676" }}>👥</h1>
                        <h4 style={{ color: "#fff" }}>
                            For Every Trader
                        </h4>
                        <p style={{ color: "#B0BEC5" }}>
                            Built for beginners as well as
                            experienced investors.
                        </p>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div
                        className='p-4'
                        style={{
                            border: "1px solid #1a1a1a",
                            borderRadius: "15px",
                            height: "100%"
                        }}
                    >
                        <h1 style={{ color: "#00E676" }}>🛡️</h1>
                        <h4 style={{ color: "#fff" }}>
                            Trust & Security
                        </h4>
                        <p style={{ color: "#B0BEC5" }}>
                            Your data is protected with
                            industry-standard security.
                        </p>
                    </div>
                </div>

            </div>

            {/* Stats Section */}

            <div
                className='row text-center mt-5 p-4'
                style={{
                    border: "1px solid #1a1a1a",
                    borderRadius: "15px"
                }}
            >

                <div className='col-md-3'>
                    <h1 style={{ color: "#00E676" }}>10K+</h1>
                    <p style={{ color: "#fff" }}>Active Traders</p>
                </div>

                <div className='col-md-3'>
                    <h1 style={{ color: "#00E676" }}>50K+</h1>
                    <p style={{ color: "#fff" }}>Trades Analyzed</p>
                </div>

                <div className='col-md-3'>
                    <h1 style={{ color: "#00E676" }}>98%</h1>
                    <p style={{ color: "#fff" }}>Prediction Accuracy</p>
                </div>

                <div className='col-md-3'>
                    <h1 style={{ color: "#00E676" }}>24/7</h1>
                    <p style={{ color: "#fff" }}>Secure Monitoring</p>
                </div>

            </div>

        </section>
    );
}

export default Hero;