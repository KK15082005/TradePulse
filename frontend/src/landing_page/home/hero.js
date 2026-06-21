import React from "react" ;

function Hero (){
    return(
        <div className="Container p-5">
            <div className="row text-center">
                <img src="media/HomeHero.png" alt= "Hero-img" className="text-center mb-5"/>
                <h1 className="mt-5" style={{color: "#ffffff"}}>Trade Smarter</h1>
                <h1 style={{color : "#00E676" }}>Invest Better</h1>
                <p style={{color : "#ffffff"}}>TradePulse is an all-in-one platform to invest in stocks , mutual funds ,track your porfolio
                    analyze markets for better decision .
                </p>
                <button className="p-2 btn btn-success" style={{width:" 10% " , margin:"0 auto", background:"#02dd73"} }>SignUp Now</button>
            </div>
        </div>
    );
}
export default Hero ;