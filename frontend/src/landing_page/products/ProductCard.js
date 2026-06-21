import React from "react";

function ProductCards() {
    return (
        <section className="container py-4">

            <div className="row">

                {/* Card 1 */}

                <div className="col-md-6 mb-4">
                    <div
                        className="p-4 h-100"
                        style={{
                            background: "#08111F",
                            borderRadius: "15px",
                            border: "1px solid #1a1a1a"
                        }}
                    >
                        <h2 style={{ color: "#00E676" , background: "#08111F" }}>
                            Pulse Analytics
                        </h2>

            
                        <p style={{ color: "#fff" , background: "#08111F" }}>
                            Advanced charts, technical analysis
                            and market insights.
                        </p>

                        <img src="media/prod1.png" style={{borderRadius :"10px" , width:"100%"}}/>

                        <ul style={{ color: "#00E676" , background: "#08111F"  }}>
                            <li style={{ color: "#00E676", background: "#08111F" }}>Interactive Charts</li>
                            <li style={{ color: "#00E676" , background: "#08111F"  }}>Technical Indicators</li>
                            <li style={{ color: "#00E676" , background: "#08111F"  }}>Market Reports</li>
                        </ul>
                    </div>
                </div>

                {/* Card 2 */}

                <div className="col-md-6 mb-4">
                    <div
                        className="p-4 h-100"
                        style={{
                            background: "#08111F",
                            borderRadius: "15px",
                            border: "1px solid #1a1a1a"
                        }}
                    >
                        <h2 style={{ color: "#00E676" , background: "#08111F",}}>
                            Pulse AI
                        </h2>

                        <p style={{ color: "#fff" , background: "#08111F", }}>
                            AI-powered predictions and
                            trading signals.
                        </p>

                        <img src="media/prod2.png" style={{borderRadius :"10px" , width:"100%"}}/>


                        <ul style={{ color: "#00E676", background: "#08111F"  }}>
                            <li style={{ color: "#00E676", background: "#08111F" }} >Buy / Sell Signals</li>
                            <li style={{ color: "#00E676", background: "#08111F" }}>AI Predictions</li>
                            <li style={{ color: "#00E676", background: "#08111F" }}>Risk Analysis</li>
                        </ul>
                    </div>
                </div>

                {/* Card 3 */}

                <div className="col-md-6 mb-4">
                    <div
                        className="p-4 h-100"
                        style={{
                            background: "#08111F",
                            borderRadius: "15px",
                            border: "1px solid #1a1a1a"
                        }}
                    >
                        <h2 style={{ color: "#00E676" , background: "#08111F"}}>
                            Portfolio Tracker
                        </h2>

                        <p style={{ color: "#fff" , background: "#08111F"}}>
                            Track investments and monitor
                            portfolio performance.
                        </p>

                        <img src="media/prod3.png" style={{borderRadius :"10px" , width:"100%"}}/>

                        <ul style={{ color: "#B0BEC5" }}>
                            <li  style={{ color: "#00E676", background: "#08111F" }}>P&L Tracking</li>
                            <li  style={{ color: "#00E676", background: "#08111F" }}>Performance Reports</li>
                            <li  style={{ color: "#00E676", background: "#08111F" }}>Asset Allocation</li>
                        </ul>
                    </div>
                </div>

                {/* Card 4 */}

                <div className="col-md-6 mb-4">
                    <div
                        className="p-4 h-100"
                        style={{
                            background: "#08111F",
                            borderRadius: "15px",
                            border: "1px solid #1a1a1a"
                        }}
                    >
                        <h2 style={{ color: "#00E676" , background: "#08111F" }}>
                            Market Scanner
                        </h2>

                        <p style={{ color: "#fff", background: "#08111F" }}>
                            Discover opportunities in
                            real-time markets.
                        </p>

                        <img src="media/prod4.png" style={{borderRadius :"10px" , width:"100%"}}/>

                        <ul  style={{ color: "#00E676", background: "#08111F" }}>
                            <li  style={{ color: "#00E676", background: "#08111F" }}>Stock Screening</li>
                            <li  style={{ color: "#00E676", background: "#08111F" }}>Sector Analysis</li>
                            <li  style={{ color: "#00E676", background: "#08111F" }}>Real-Time Alerts</li>
                        </ul>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default ProductCards;