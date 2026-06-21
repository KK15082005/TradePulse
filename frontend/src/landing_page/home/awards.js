import React from "react" ;

function Awards(){
    return(
        <div className="container mb-5">
            <div className="row">
                <div className="col-6 mb-2">
                    <img src="media/Award.png" alt="award" style={{width : "50%"}}/>
                </div>
                <div className="col-6 mt-5">
                    <h2 style={{color:"#00E676"}}>Largest Stock Broker in India</h2>
                    <p style={{color:"#ffffff"}} className="mt-3">2+ million TradePulse clients contibute to over 15% of all retail order volumes in India daily by Trading and Investing in : </p>
                    <div className="row ">
                        <div className="col-6 mt-3">
                            <ul>
                                <li style={{color:"#ffffff"}}><p style={{color:"#ffffff"}}>Future and Options</p></li>
                                <li style={{color:"#ffffff"}}><p style={{color:"#ffffff"}}>Commodity Derivatives</p></li>
                                <li style={{color:"#ffffff"}}><p style={{color:"#ffffff"}}>Currency Derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6 mt-3" >
                            <ul>
                                <li style={{color:"#ffffff"}}><p style={{color:"#ffffff"}}>Stocks & IPOs</p></li>
                                <li style={{color:"#ffffff"}}><p style={{color:"#ffffff"}}>Direct Mutual Funds</p></li>
                                <li style={{color:"#ffffff"}}><p style={{color:"#ffffff"}}>Bonds and Goods</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;