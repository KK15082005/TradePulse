import React from 'react';

function Team() {
    return (
        <section className="container py-5">

            <div className="text-center mb-5">
                <h2 style={{ color: "#00E676" }}>Our Team</h2>
                <h1 style={{ color: "#fff" }}>
                    Meet The Minds Behind TradePulse
                </h1>
                <p style={{ color: "#B0BEC5" }}>
                    A passionate team dedicated to building smarter
                    trading experiences through technology and innovation.
                </p>
            </div>

            <div className="row">

                {/* Team Member 1 */}
                <div className="col-md-4 mb-4">
                    <div
                        className="text-center p-4"
                        style={{
                            border: "1px solid #1a1a1a",
                            borderRadius: "15px",
                            backgroundColor: "#08111F"
                        }}
                    >
                        <img
                            src="media/photo1.png"
                            alt="team"
                            className="img-fluid rounded-circle mb-3"
                            style={{
                                width: "150px",
                                height: "150px",
                                objectFit: "cover"
                            }}
                        />

                        <h4 style={{ color: "#fff" }}>
                            Kamaljeet Kaur
                        </h4>

                        <p style={{ color: "#00E676" }}>
                            Founder & Developer
                        </p>

                        <p style={{ color: "#B0BEC5" }}>
                            Building AI-powered trading solutions
                            for modern investors.
                        </p>
                    </div>
                </div>

                {/* Team Member 2 */}
                <div className="col-md-4 mb-4">
                    <div
                        className="text-center p-4"
                        style={{
                            border: "1px solid #1a1a1a",
                            borderRadius: "15px",
                            backgroundColor: "#08111F"
                        }}
                    >
                        <img
                            src="media/photo2.png"
                            alt="team"
                            className="img-fluid rounded-circle mb-3"
                            style={{
                                width: "150px",
                                height: "150px",
                                objectFit: "cover"
                            }}
                        />

                        <h4 style={{ color: "#fff" }}>
                            Rahul Sharma
                        </h4>

                        <p style={{ color: "#00E676" }}>
                            Market Analyst
                        </p>

                        <p style={{ color: "#B0BEC5" }}>
                            Analyzing market trends and
                            delivering actionable insights.
                        </p>
                    </div>
                </div>

                {/* Team Member 3 */}
                <div className="col-md-4 mb-4">
                    <div
                        className="text-center p-4"
                        style={{
                            border: "1px solid #1a1a1a",
                            borderRadius: "15px",
                            backgroundColor: "#08111F"
                        }}
                    >
                        <img
                            src="media/photo3.png"
                            alt="team"
                            className="img-fluid rounded-circle mb-3"
                            style={{
                                width: "150px",
                                height: "150px",
                                objectFit: "cover"
                            }}
                        />

                        <h4 style={{ color: "#fff" }}>
                            Priya Verma
                        </h4>

                        <p style={{ color: "#00E676" }}>
                            AI Engineer
                        </p>

                        <p style={{ color: "#B0BEC5" }}>
                            Developing intelligent prediction
                            models for traders.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Team;